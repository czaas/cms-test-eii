import { ADD_VIDEO, GET_ALL_DATA } from '../constants/action-types.js';

const intialState = [];

export default function cms(state = intialState, action) {
	switch (action.type) {
		case ADD_VIDEO: 
			return [
				action.video, // combining this new object
				...state // with the other objects
			];

		case GET_ALL_DATA:
			return [...action.data, ...state]; // combining two arrays full of objects

		default:
			return state;
	}
}