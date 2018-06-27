'use strict'
import {createStore} from 'redux'

// import combine reducers
import reducers from './reducers/index'


//Step 1 create the store
const store = createStore(reducers);

store.subscribe(() => {
  console.log('current state is :' , store.getState())
  // console.log('current price :' , store.getState()[1].price)
})

//step 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK",
   payload: [
     {
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
})

//DELETE a second action
store.dispatch({
  type: "DELETE_BOOK",
  payload:{
    id: 1
  }
})
//Update a second action
store.dispatch({
  type: "UPDATE_BOOK",
  payload:{
    id:2,
    title: 'Learn React'
  }
})