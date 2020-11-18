import axios from 'axios'


export function request(config){
  const instance=axios.create({
    baseURL:'http://127.0.0.1:8000',
    timeout:5000//ms毫秒单位，超过五秒钟报错没有获取到
  })
  //拦截器

  instance.interceptors.request.use(config=>{
    console.log(config)
    return config
  },error => {
    console.log(error)
  })


  instance.interceptors.response.use(res=>{
    console.log(res)
    return res.data
  },error => {
    console.log(error)
  })


  //发送真正的网络请求
  return instance(config)
}
