'use strict'
import {createStore} from 'redux'

//spte3 define reducers
const reducer = (state, action) => {
  switch(action.type){
    case "POST_BOOK":
    return state = action.payload;
    break;

  }
  return state
}


//Step 1 create the store
const store = createStore(reducer);

store.subscribe(() => {
  console.log('current state is :' , store.getState())
  console.log('current price :' , store.getState().price)
})

//step 2 create and dispatch actions
store.dispatch({
  type: "POST_BOOK", payload: {
    id: 1,
    title: 'this is the book title',
    description: 'this is the book description',
    price: 33.33
  }
})