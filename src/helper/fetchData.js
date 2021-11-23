
export default axios = async(method, url, params) => {
  const res = await axios.create({
    method: method,
    baseURL: url,
    params : params
  })
  
}