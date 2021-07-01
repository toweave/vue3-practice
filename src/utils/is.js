const isNumber = (num) => {
  // let num = Number(result)
  let record = num
  if (typeof record === "string") {
    record = record.trim()
  }
  // console.log('number::%d, isNaN(num)::%s', record, isNaN(record))
  return !(isNaN(record) || record === null || record === "" || typeof record === "boolean")
}
/**
 * @param {string} str
 * @returns {Boolean}
 */
const isString = (str) => {
  if (typeof str === "string" || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
const isArray = (arg) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]"
  }
  return Array.isArray(arg)
}
const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
const isLt2M = (size) => {
  return size / 1024 / 1024 < 2
}

export {
  isLt2M,
  isNumber,
  isString,
  isArray,
  isExternal
}
