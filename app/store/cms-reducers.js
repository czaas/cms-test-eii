import { ADD_ITEM, GET_ALL_DATA, SET_STATUS } from '../constants/action-types.js';
import _ from 'lodash';

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
			var tempState = _.clone(state);
			_.remove(tempState, (item) => item.id === action.itemId); // removing item with old status
			return [action.item, ...tempState]; // adding item with new status
 
		default:
			return state;
	}
}