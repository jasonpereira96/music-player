import React from 'react';
// import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function Searchbar(props) {
  return (
    <>
      <Form inline>
        <Form.Control type="text" placeholder="Search" className=" mr-sm-2" onChange={props.onChange}/>
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
}

export default Searchbar;
