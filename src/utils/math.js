/**
 * Author: Toweave
 * Date:  2019/09/25
 * @param: math.js 做一些数据计算的方法
 * @return: number 或着 ''
 */
import { add, subtract, multiply, divide, round, bignumber } from "mathjs"
import { isNumber } from "./is"
import { Chunk } from "./dataset"
// 四舍五入
const MathRound = (num, decimals = 2) => {
  // let num = Number(result)
  const record = Number(num)
  // console.log("number::%d, isNumber(num)::%s, isFinite(record):: %s", num, isNumber(num), isFinite(record))
  if (!isNumber(num)) {
    return ""
  }
  if (!isFinite(record)) {
    return record
  } else {
    return Number(round(record, decimals)).toFixed(decimals)
  }
}
// 千分位格式化
// const MathDecimalMark = (num, decimals = 2) => {
//   // let num = Number(result)
//   const record = Number(num)
//   // console.log("number::%d, isNumber(num)::%s, isFinite(record):: %s", num, isNumber(num), isFinite(record))
//   if (!isNumber(num)) {
//     return ""
//   }
//   if (!isFinite(record)) {
//     return record
//   } else {
//     return Number(Number(round(record, decimals)).toFixed(decimals)).toLocaleString("en-US")
//   }
// }
const MathDecimalMark = (num, decimals = 2) => {
  // let num = Number(result)
  const record = Number(num)
  // console.log("number::%d, isNumber(num)::%s, isFinite(record):: %s", num, isNumber(num), isFinite(record))
  if (!isNumber(num)) {
    return ""
  }
  if (!isFinite(record)) {
    return record
  } else {
    const [start, end] = Number(round(record, decimals)).toFixed(decimals).split(".")
    let first = ""
    if (start) {
      first = Chunk((start.split("")).reverse(), 3).reduce((cur, acc, index) => {
        // if (cur && cur)
        return cur + acc.join("") + ","
      }, "").slice(0, -1).split("").reverse().join("")
    }
    let second = ""
    if (end) {
      second = Chunk(end.split(""), 3).reduce((cur, acc, index) => {
        return cur + acc.join("") + ","
      }, "").slice(0, -1).split("").join("")
    }
    return second ? `${first}.${second}` : first
  }
}
// 加法
const MathAddend = (...addend) => {
  // let num = Number(result)
  const result = addend.reduce((acc, cur) => {
    let member = 0
    if (isNumber(cur)) {
      member = Number(cur)
    }
    return add(bignumber(acc), bignumber(member))
  }, 0)
  return Number(result)
}
// 减法
const MathSubtract = (minuend, ...subtrahend) => {
  // let num = Number(result)
  let record = minuend
  if (!isNumber(record)) {
    record = 0
  }
  const result = subtrahend.reduce((acc, cur) => {
    let member = 0
    if (isNumber(cur)) {
      member = Number(cur)
    }
    return subtract(bignumber(acc), bignumber(member))
  }, record)
  return Number(result)
}
// 乘法
const MathMultiply = (...multipliers) => {
  const flag = multipliers.some((multiplier) => !isNumber(multiplier))
  if (flag) {
    return ""
  }
  // 乘数如果有 0，直接返回 0
  const flagZero = multipliers.some((multiplier) => Number(multiplier) === 0)
  if (flagZero) {
    return 0
  }
  const result = multipliers.reduce((acc, cur) => {
    return multiply(bignumber(acc), bignumber(cur))
  }, 1)
  return Number(result)
}
// 除法
const MathDivide = (numerator, ...denominators) => {
  /**
   * Author: Toweave
   * Date:  2019/09/25
   * @param: numerator: 分子
   *         denominator: 分母
   * @return: NaN 的情况都返回 ''
   *          其他返回数值：result
   */
  // numerator：分子必须是数值
  let record = numerator
  if (!isNumber(record)) {
    return ""
  }
  // denominator：分母必须是数值，且不能为 0
  const flag = denominators.some((denominator) => !isNumber(denominator) || Number(denominator) === 0)
  if (flag) {
    return ""
  }
  record = Number(record)
  // numerator：分子为零或者有无穷
  const flagFinite = denominators.some((denominator) => !isFinite(denominator))
  if (record === 0 || flagFinite) {
    return 0
  }
  const result = denominators.reduce((acc, cur) => {
    return divide(bignumber(acc), bignumber(cur))
  }, record)
  return Number(result)
}
// 根据传递的数据集、属性、方法，返回方法处理数据集元素中属性的结果
const CalculateProperty = ({ dataset = [], property = "", fn, initialValue = 0 }) => {
  return dataset.reduce((acc, cur) => {
    const result = fn(acc[property], cur[property])
    return { [property]: result }
  }, { [property]: initialValue })
}
class UserChain {
  constructor(value = 0) {
    this.value = value
  }
  addend(...addend) {
    addend.push(this.value)
    this.value = MathAddend(...addend)
    return this
  }
  subtract(...denominators) {
    this.value = MathSubtract(this.value, ...denominators)
    return this
  }
  multiply(...denominators) {
    denominators.push(this.value)
    this.value = MathMultiply(...denominators)
    return this
  }
  divide(...denominators) {
    this.value = MathDivide(this.value, ...denominators)
    return this
  }
  round(decimals = 2) {
    this.value = MathRound(this.value, decimals)
    return this
  }
  done() {
    return this.value
  }
}
const MathChain = (value) => {
  return new UserChain(value)
}
export {
  MathRound,
  MathDecimalMark,
  MathAddend,
  MathSubtract,
  MathMultiply,
  MathDivide,
  CalculateProperty,
  MathChain
}
