"use strict";


export function booksReducers(state= {
  books:[{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 44
      },
      {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the book description',
        price: 55
    }]
  }, action) {
  switch(action.type){
    case "GET_BOOK":
    return {...state, books:[...state.books]}
    break;

    case "POST_BOOK":
    // let books = state.books.concat(action.payload)
    // return {books};
    return {books: [...state.books, ...action.payload]}
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
