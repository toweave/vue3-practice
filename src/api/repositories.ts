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
export default { fetchUserRepositories, fetchUserRepositoryTest }
