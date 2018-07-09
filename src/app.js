'use strict'

import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import Menu from './components/menu'
import Footer from './components/footer'

// import combine reducers
import reducers from './reducers/index'

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

//Step 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList'
import Cart from './components/pages/cart'
import BooksForm './components/pages/booksForm'
import Main from './main'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={BooksList}/>
      <Route path="/admin" component={BooksForm}/>
      <Route path="/cart" component={Cart}/>
    </Route>
  </Router>
)

render(
  routes, document.getElementById('app'));
