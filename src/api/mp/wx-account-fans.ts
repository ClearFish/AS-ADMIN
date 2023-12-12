import request from '/@/utils/request';

export function fetchList(query) {
	return request({
		url: '/mp/wx-account-fans/page',
		method: 'get',
		params: query,
	});
}

export function addObj(obj) {
	return request({
		url: '/mp/wx-account-fans',
		method: 'post',
		data: obj,
	});
}

export function sync(appId) {
	return request({
		url: '/mp/wx-account-fans/sync/' + appId,
		method: 'post',
	});
}

export function getObj(id) {
	return request({
		url: '/mp/wx-account-fans/' + id,
		method: 'get',
	});
}

export function delObjs(id) {
	return request({
		url: '/mp/wx-account-fans/' + id,
		method: 'delete',
	});
}

export function putObj(obj) {
	return request({
		url: '/mp/wx-account-fans',
		method: 'put',
		data: obj,
	});
}

export function black(obj, appid) {
	return request({
		url: '/mp/wx-account-fans/black/' + appid,
		method: 'post',
		data: obj,
	});
}

export function unblack(obj, appid) {
	return request({
		url: '/mp/wx-account-fans/unblack/' + appid,
		method: 'post',
		data: obj,
	});
}
