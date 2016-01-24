import * as types from './_action-types.js';

export function addVideo(video) {
	return { type: types.ADD_VIDEO, video }
}