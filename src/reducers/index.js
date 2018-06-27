"use strict"
import {combineReducers} from "redux";

//import boockReducers
import {booksReducers} from './booksReducers'
import {cartReducers} from './cartReducers'

//combine the reducers
export default combineReducers({
  books: booksReducers,
  cart: cartReducers
})