import React from 'react';
import { render } from 'react-dom'
// import {  IndexRedirect, browserHistory } from 'react-router'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import './index.css';

import App from './components/App';
// import GalleryComponent from './components/GalleryComponent'

const store = createStore(reducers, {}, f => f);

const Root = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(Root, document.getElementById('root'))