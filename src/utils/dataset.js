/**
 * Author: Toweave
 * Date:  2019/09/25
 * @param: 数据集方法
 */
import { isArray } from "./is"
const Chunk = (arr, size) => (
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )
)

const FormatArray = (arr = [], target) => {
  return arr.map((item) => {
    if (!isArray(target)) {
      return item[target]
    }
    const element = {}
    target.forEach((ele) => {
      element[ele] = item[ele]
    })
    return element
  })
}

export {
  Chunk,
  FormatArray
}
