'use strict'
import {createStore} from 'redux'

//spte3 define reducers
const reducer = (state={books:[]}, action) => {

  switch(action.type){
    case "POST_BOOK":
    // let books = state.books.concat(action.payload)
    // return {books};
    return {books: [...state.books,...action.payload]}
    break;

    case "DELETE_BOOK":
    const currentBookToDelete = [...state.books]

    const indexToDelte = currentBookToDelete.findIndex((book) =>{
      return book.id === action.payload.id
    } )
    return {books: [...currentBookToDelete.slice(0,indexToDelte),...currentBookToDelete.slice(indexToDelte + 1)]}
    break;

    case "UPDATE_BOOK":
      const currentBookToUpdate = [...state.books]
      const indexToUpdate = currentBookToUpdate.findIndex((book) => {
        return book.id === action.payload.id;
      })

      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      }

      console.log("what is it newBookToUpdate", newBookToUpdate);

      return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
      break;
  }
  return state
}


//Step 1 create the store
const store = createStore(reducer);

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