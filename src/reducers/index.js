"use strict"
import {combineReducers} from "redux";

//import boockReducers
import {boockReducers, booksReducers} from './booksReducers'


//combine the reducers
export default combineReducers({
  books: booksReducers
})