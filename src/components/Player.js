import React from 'react';
import {connect} from 'react-redux'
import {play, pause, PLAY, PAUSE} from './../actions/actions' 
// import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import playImage from './../img/play-64.png';
import forward from './../img/fast-forward-64.png';
import rewind from './../img/rewind-64.png';
import pauseImage from './../img/pause-64.png';
import audioFile from '../media/songs/Bright.mp3'


// import Container from 'react-bootstrap/Container'



function Player(props) {
    return ( //PROBABLY USING A NAVBAR HERE WOULD BE BETTER
        <Nav bsPrefix='player' className='flex-row'>
            <Nav.Item><div><h5>Song Name</h5><h6>Artist</h6></div></Nav.Item>
            <Nav.Item><Nav.Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link></Nav.Link></Nav.Item>

            <Nav.Item><Nav.Link> <img src={rewind} className='play' /> </Nav.Link></Nav.Item>
            {props.playing ?
                <Nav.Item><Nav.Link><img src={pauseImage} className='play' onClick={props.onPause}/> </Nav.Link></Nav.Item>:
                <Nav.Item><Nav.Link><img src={playImage} className='play' onClick={props.onPlay}/> </Nav.Link></Nav.Item>}

            {/* <Nav.Item><Nav.Link>{props.playing ? (<img src={pause} className='play' />) : (<img src={play} className='play' />)} </Nav.Link></Nav.Item> */}
            <Nav.Item><Nav.Link><img src={forward} className='play' /> </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>
                <div className='gutter'>
                    <span className='done'></span>
                    <span className='ball' id='ball'></span>
                    <span className='left' id='left'></span>
                </div>
            </Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link><span className='time'>00:00/05:00</span></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>
                <audio id='audio' src={audioFile}>
                </audio>
            </Nav.Link></Nav.Item>
        </Nav>
    );
}

const mapStatetoProps = state => { //gets the full state
    return {
        playing: state.player.playing
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onPlay: function() {
            dispatch(play())
        },
        onPause: function() {
            dispatch(pause())
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);


