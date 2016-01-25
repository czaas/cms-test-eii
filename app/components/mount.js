import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/cms-store.js';
import App from './main.js';

const store = configureStore();
const apiUrl = 'http://dev100.etnainteractive.com/api/v1/content';

ReactDom.render(
	<Provider store={store}>
		<App apiUrl={apiUrl} />
	</Provider>, 
	document.getElementById('app'));