import { ADD_ITEM, GET_ALL_DATA, SET_STATUS } from '../constants/action-types.js';

const intialState = [];

export default function cms(state = intialState, action) {
	switch (action.type) {
		case ADD_ITEM: 
			return [
				action.item, // combining this new object
				...state // with the other objects
			];

		case GET_ALL_DATA:
			return [...action.data, ...state]; // combining two arrays full of objects

		case SET_STATUS:
			var tempState = [];
			state.map((item) => {
				(item.id !== action.item.id) ? tempState.push(item): '';
			});

			return [action.item, ...tempState]; // adding item with new status
 
		default:
			return state;
	}
}