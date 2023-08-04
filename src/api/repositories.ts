
import { SleepTime } from '@/utils/queue'
const fetchUserRepositories = async (data: any) => {
  return new Promise((resolve, reject) => {
    resolve([1, 2, 3])
  })
  //   return await Promise.resolve([1, 2, 3])
  //   return [1, 2, 3]
}
const fetchUserRepositoryTest = async (data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3])
    }, 5000)
  })
  //   return await Promise.resolve([1, 2, 3])
  //   return [1, 2, 3]
}

const fetchSomethingWithTime = async (data: any, fn_id: any) => {
  const time = await SleepTime(2000, 5000)
  return new Promise((resolve, reject) => {
    resolve({ time: time, fn_id: fn_id })
  })
  //   return await Promise.resolve([1, 2, 3])
  //   return [1, 2, 3]
}
const fetchSomethingWithTime1 = async (data: any, fn_id: any) => {
  const time = await SleepTime(2000, 5000)
  return new Promise((resolve, reject) => {
    resolve({ time: time, fn_id: fn_id })
  })
  //   return await Promise.resolve([1, 2, 3])
  //   return [1, 2, 3]
}
const fetchSomethingWithTime2 = async (data: any, fn_id: any) => {
  const time = await SleepTime(2000, 5000)
  return new Promise((resolve, reject) => {
    resolve({ time: time, fn_id: fn_id })
  })
  //   return await Promise.resolve([1, 2, 3])
  //   return [1, 2, 3]
}
export { fetchUserRepositories, fetchUserRepositoryTest, fetchSomethingWithTime, fetchSomethingWithTime1, fetchSomethingWithTime2 }
