import React from 'react';
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'

function Searchbar(props) {
  return (
    <div className='navbar-div'>
      <div className='searchbar-container'>
      <Form inline>
        <Form.Control type="text" placeholder="Search" onChange={props.onChange} id='search' />
      </Form>
    </div>
    </div>
  );
}

export default Searchbar;
