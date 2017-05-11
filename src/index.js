import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
reducers.routing=routerReducer;

const store=createStore(combineReducers(reducers),applyMiddleware(thunkMiddleware));
const history=syncHistoryWithStore(browserHistory,store);

const routes=(
	<Route path='/' component={App}>
	</Route>
);

function run(){
	let state=store.getState();
	console.log(state);
	render(<Provider store={store}>
		<Router history={history}>
			{routes}
		</Router>
		</Provider>,document.getElementById('container')
	);
}

run();
store.subscribe(run);



















// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
