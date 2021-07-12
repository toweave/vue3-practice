import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:7999/',
  // baseURL: '',
  timeout: 6000,
  withCredentials: false, // send cookies when cross-domain requests
  headers: {
    'Content-Type': 'application/json'
    // 'X-Custom-Header': 'foobar'
    // Pragma: 'no-cache'
    // 'Access-Control-Allow-Origin': '*'
    // 'Authorization': `Bearer ${'tokenId'}`
  }
})

const request = async (option: any) => {
  const { status, data } = await instance(option)
  if (status === 200) {
    return data || {}
  } else {
    return {}
  }
}

export { request }
