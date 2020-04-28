import React from 'react';
import Form from 'react-bootstrap/Form'

function Searchbar(props) {
  return (
    <>
      <Form inline>
        <Form.Control type="text" placeholder="Search"  onChange={props.onChange} id='search'/>
      </Form>
    </>
  );
}

export default Searchbar;
