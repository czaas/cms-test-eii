import * as types from '../constants/action-types.js';

export function addItem(item) {
	return { type: types.ADD_ITEM, item }
}

export function getAllData(data) {
	return { type: types.GET_ALL_DATA, data }
}

export function updateStatus(item) {
	return { type: types.SET_STATUS, item }
}