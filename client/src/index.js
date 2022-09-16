import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider keeps track of the store
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

// initialize redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)
