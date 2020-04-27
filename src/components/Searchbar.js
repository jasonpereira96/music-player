import React from 'react';
// import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function Searchbar(props) {
  return (
    <>
      <Form inline>
        <Form.Control type="text" placeholder="Search"  onChange={props.onChange} id='search'/>
        {/* <Button type="submit">Search</Button> */}
      </Form>
    </>
  );
}

export default Searchbar;
