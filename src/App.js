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
import CardHolderContainer from './containers/CardHolderContainer'
import SearchbarContainer from './containers/SearchbarContainer'
// import Container from 'react-bootstrap/Container'



function App() {
  let songs = new Array(14).fill({
    title: 'Moon River',
    subtitle: 'In My Room'
  })
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
       <SearchbarContainer/>
      </Navbar>
      <CardHolderContainer></CardHolderContainer>
      <Player playing={false}></Player>
    </>
  );
}

export default App;
