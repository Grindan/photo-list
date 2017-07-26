import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

import './index.css';

import App from './components/App';
import GalleryComponent from './components/GalleryComponent'
import NewPostComponent from './components/NewPostComponent'


render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRedirect to='allPosts' />
            <Route path='/allPosts' component={GalleryComponent} />
            <Route path='/newPost' component={NewPostComponent} />
        </Route>
    </Router>,
    document.getElementById('root')
)