import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/cms-store.js';
import App from './main.js';

const store = configureStore();


ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('app'));