import request from "/@/utils/request"

export function fetchList(query?: Object) {
  return request({
    url: '/pigx/atMarketBroker/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj?: Object) {
  return request({
    url: '/pigx/atMarketBroker',
    method: 'post',
    data: obj
  })
}

export function getObj(id?: string) {
  return request({
    url: '/pigx/atMarketBroker/' + id,
    method: 'get'
  })
}

export function delObjs(ids?: Object) {
  return request({
    url: '/pigx/atMarketBroker',
    method: 'delete',
    data: ids
  })
}

export function putObj(obj?: Object) {
  return request({
    url: '/pigx/atMarketBroker',
    method: 'put',
    data: obj
  })
}

