import { createStore } from 'redux';
import rootReducer from './_root-reducer.js';


export default function configureStore(initialState){
	const store = createStore(rootReducer, initialState);

	return store;
}