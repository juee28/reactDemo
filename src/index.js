import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import countReducer from './store/reducer'

const rootReducer = combineReducers({
	count : countReducer
})
const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter >
		<App />
	</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
