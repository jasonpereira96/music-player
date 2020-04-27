import React from 'react';
import { connect } from 'react-redux'
import { play, pause, PLAY, PAUSE, timeUpdate } from './../actions/actions'
// import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import playImage from './../img/play-64.png';
import forward from './../img/fast-forward-64.png';
import rewind from './../img/rewind-64.png';
import pauseImage from './../img/pause-64.png';
// import audioFile from '../media/songs/Bright.mp3'


// import Container from 'react-bootstrap/Container'



class Player extends React.Component {

    constructor(props) {
        super(props);
        this.onPlay = this.onPlay.bind(this);
    }
    onPlay(e) {
        e.persist();
        console.log(e);
        let audio = e.target;
        let {currentTime, duration} = audio;        
        this.props.onTimeUpdate(currentTime, duration);
    }

    render() {
        let convert = this.convert;
        let {currentTime, duration, source} = this.props;                
        currentTime = convert(currentTime);
        duration = convert(duration);
        return ( //PROBABLY USING A NAVBAR HERE WOULD BE BETTER
            <Nav bsPrefix='player' className='flex-row'>
                <Nav.Item><div><h5>{this.props.songName}</h5><h6>{this.props.artist}</h6></div></Nav.Item>
                <Nav.Item><Nav.Link></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link></Nav.Link></Nav.Item>

                <Nav.Item><Nav.Link> <img src={rewind} className='play' /> </Nav.Link></Nav.Item>
                {this.props.playing ?
                    <Nav.Item><Nav.Link><img src={pauseImage} className='play' onClick={this.props.onPause} /> </Nav.Link></Nav.Item> :
                    <Nav.Item><Nav.Link><img src={playImage} className='play' onClick={this.props.onPlay} /> </Nav.Link></Nav.Item>}

                {/* <Nav.Item><Nav.Link>{this.props.playing ? (<img src={pause} className='play' />) : (<img src={play} className='play' />)} </Nav.Link></Nav.Item> */}
                <Nav.Item><Nav.Link><img src={forward} className='play' /> </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>
                    <div className='gutter'>
                        <span className='done'></span>
                        <span className='ball' id='ball'style={{left: this.getLeft()}}></span>
                        <span className='left' id='left'></span>
                    </div>
                </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link><span className='time'>{currentTime}/{duration}</span></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>
                    <audio id='audio' src={source} onTimeUpdate={this.onPlay}>
                    </audio>
                </Nav.Link></Nav.Item>
            </Nav>
        );
    }
    convert(num) { //this function has to be fixed
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return hours + ":" + minutes;
    }
    getLeft() {
        let {currentTime, duration} = this.props;
        return (currentTime / duration) * 300;
    }
}

const mapStatetoProps = state => { //gets the full state
    return {
        playing: state.player.playing,
        duration: state.player.duration,
        currentTime: state.player.currentTime,
        songName: state.player.songName,
        artist: state.player.artist,
        source:  state.player.source
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onPlay: function () {
            dispatch(play())
        },
        onPause: function () {
            dispatch(pause())
        },
        onTimeUpdate: function(currentTime, duration) {
            dispatch(timeUpdate(currentTime, duration))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);


