"use strict";
import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {postBooks, deleteBooks} from '../../actions/booksActions'


class BooksForm  extends React.Component {

  handleSubmit = () =>{
    const book=[{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
    }]
    this.props.postBooks(book)
  }


  onDelete = () => {
    let booksId = findDOMNode(this.refs.delete).value;
    this.props.deleteBooks(booksId)
  }

  render(){
    const booksList = this.props.books.map((booksArr) =>{
      return(
        <option key={booksArr._id}>{booksArr._id}</option>
      )
    })
    return (
      <Well>
        <Panel style={{padding: '15px'}}>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter title"
              ref="title" />
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter description"
              ref="description" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter price"
              ref="price" />
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary">Save Books</Button>
        </Panel>
        <Panel style={{marginTop: '25px'}}>
          <FormGroup>
            <ControlLabel>Select a book</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)} bsStyle="danger">Delete book</Button>
        </Panel>
      </Well>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    postBooks,
    deleteBooks
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
