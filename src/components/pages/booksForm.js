"use strict";
import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BooksForm  extends React.Component {
  render(){
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
              ref="title" />
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter price"
              ref="title" />
          </FormGroup>
          <Button bsStyle="primary">Save Books</Button>
        </Panel>
      </Well>
    )
  }
}

export default BooksForm;