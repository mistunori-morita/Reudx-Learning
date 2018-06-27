'use strict'

import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

// import combine reducers
import reducers from './reducers/index'

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

//Step 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList'

render(
  <Provider store={store}>
   <BooksList />
  </Provider>, document.getElementById('app'));


store.dispatch(postBooks(
  [{
      id: 1,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 33.33
    },
    {
      id: 2,
      title: 'this is the second book title',
      description: 'this is the book description',
      price: 50
    },
  ]
))


//DELETE a second action
store.dispatch(deleteBooks(
  {id: 1}
))

//Update a second action
store.dispatch(updateBooks(
{
  id: 2,
  title: 'Learn React'
}
))


// Add to cart

store.dispatch(addToCart([{id: 1}]))