import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import CardHolder from './components/CardHolder';
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import play from './../img/play-64.png';
import forward from './../img/fast-forward-64.png';
import rewind from './../img/rewind-64.png';
import pause from './../img/pause.png';


// import Container from 'react-bootstrap/Container'



function Player(props) {
    return ( //PROBABLY USING A NAVBAR HERE WOULD BE BETTER
        <Nav bsPrefix='player' className='flex-row'>
            <Nav.Item><div><h5>Song Name</h5><h6>Artist</h6></div></Nav.Item>
            <Nav.Item><Nav.Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link></Nav.Link></Nav.Item>

            <Nav.Item><Nav.Link> <img src={rewind} className='play' /> </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><img src={play} className='play' /> </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><img src={forward} className='play' /> </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>
                <div className='gutter'>
                    <span className='done'></span>
                    <span className='ball' id='ball'></span>
                    <span className='left' id='left'></span>
                </div>
            </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><span className='time'>00:00/05:00</span></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><audio src='../../media/songs/Dragonfly.mp3'></audio></Nav.Link></Nav.Item>
        </Nav>
    );
}


export default Player;


