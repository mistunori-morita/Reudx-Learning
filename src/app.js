'use strict'

import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
import Menu from './components/menu'
import Footer from './components/footer';

const Routes = (
  <Provider store={store}>
      <BrowserRouter>
        <div>
        <Menu />
         <Switch>
            <Route exact path="/" component={BooksList}/>
            <Route path="/admin" component={BooksForm}/>
            <Route path="/cart" component={Cart}/>
         </Switch>
        <Footer />
        </div>
      </BrowserRouter>
  </Provider>
)

render(
  Routes, document.getElementById('app'));
