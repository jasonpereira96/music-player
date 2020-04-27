import React from 'react';
import { connect } from 'react-redux'
import { play, pause, timeUpdate, next, prev } from './../actions/actions'
// import Button from 'react-bootstrap/Button'
import div from 'react-bootstrap/Nav'
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
        let { currentTime, duration } = audio;
        this.props.onTimeUpdate(currentTime, duration);
    }
    componentDidMount() {
        let gutter = document.getElementById('gutter');
        this.gutterWidth = gutter.clientWidth;
        this.x = gutter.getBoundingClientRect().x;
    }

    render() {
        let convert = this.convert;
        let { currentTime, duration, source } = this.props;
        currentTime = convert(currentTime);
        duration = convert(duration);
        return ( //PROBABLY USING A NAVBAR HERE WOULD BE BETTER
            <div className='player'>
                <div className='info'><h5>{this.props.songName}</h5><h6>{this.props.artist}</h6></div>

                <div className='prev'><img src={rewind} className='previmg' onClick={this.props.onPrev} /> </div>
                {this.props.playing ?
                    <div className='pause'><img src={pauseImage} className='pauseimg' onClick={this.props.onPause} /> </div> :
                    <div className='play'><img src={playImage} className='playimg' onClick={this.props.onPlay} /> </div>}

                {/* <Nav.Item><Nav.Link>{this.props.playing ? (<img src={pause} className='play' />) : (<img src={play} className='play' />)} </Nav.Link></Nav.Item> */}
                <div className='next'><img src={forward} className='nextimg' onClick={this.props.onNext} /> </div>
                <div className='gutter' id='gutter'>
                    {/* <span className='done'></span> */}
                    <div className='waste'></div>
                    <div className='ball' id='ball' style={{ left: this.getLeft() }}></div>
                    <div className='left' id='left'></div>
                    <div className='waste'></div>
                </div>
                <div className='time'>{currentTime}/{duration}</div>
                <div className='audio'>
                    <audio id='audio' src={source} onTimeUpdate={this.onPlay}>
                    </audio>
                </div>
            </div>
        );
    }
    convert(num) { //this function has to be fixed
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${minutes}`;
    }
    getLeft() {
        let { currentTime, duration } = this.props;
        return (currentTime / duration) * (this.gutterWidth) + this.x;
    }
}

const mapStatetoProps = state => { //gets the full state
    return {
        playing: state.player.playing,
        duration: state.player.duration,
        currentTime: state.player.currentTime,
        songName: state.player.songName,
        artist: state.player.artist,
        source: state.player.source
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
        onNext: function () {
            dispatch(next())
        },
        onPrev: function () {
            dispatch(prev())
        },
        onTimeUpdate: function (currentTime, duration) {
            dispatch(timeUpdate(currentTime, duration))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);


