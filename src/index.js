import React from 'react';
import './index.css';
import App from './App';
import ListComponent from './components/ListComponent'
import PostComponent from './components/PostComponent'

import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRedirect to='allPosts' />
            <Route path='/allPosts' component={ListComponent} />
            <Route path='/newPost' component={PostComponent} />
        </Route>
    </Router>,
    document.getElementById('root')
)