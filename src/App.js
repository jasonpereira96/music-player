import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CardHolder from './components/CardHolder';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Player from './components/Player'
// import Container from 'react-bootstrap/Container'



function App() {
  return (
    <>
      <Navbar bg="dark">
        {/* <Navbar.Brand href="#home">
          <Nav className="mr-auto">
            <Nav.Link className='white' href="#home">Home</Nav.Link>
            <Nav.Link className='white' href="#features">Features</Nav.Link>
            <Nav.Link className='white' href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Brand> */}
        <Form inline>
          <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Search</Button>
        </Form>
      </Navbar>
      <CardHolder></CardHolder>
      
      <h1>Hi</h1>

      <Player></Player>

    </>
  );
}

export default App;
