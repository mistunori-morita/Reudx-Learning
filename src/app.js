'use strict'
import {createStore} from 'redux'

// import combine reducers
import reducers from './reducers/index'

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

//Step 1 create the store
const store = createStore(reducers);

store.subscribe(() => {
  console.log('current state is :' , store.getState())
})
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