import * as types from '../constants/action-types.js';

export function addVideo(video) {
	return { type: types.ADD_VIDEO, video }
}

export function getAllData(data) {
	return { type: types.GET_ALL_DATA, data }
}