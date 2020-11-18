import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomedata() {
  return request({
    url:'/home/homedata'
  })
}
