import React from 'react';
import { connect } from 'react-redux'
import { play, pause, timeUpdate, next, prev, volumeChange } from './../actions/actions'
import playImage from './../img/play-64.png';
import forward from './../img/fast-forward-64.png';
import rewind from './../img/rewind-64.png';
import pauseImage from './../img/pause-64.png';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.onPlay = this.onPlay.bind(this);
        this.onVolumeChange = this.onVolumeChange.bind(this);
    }
    onPlay(e) {
        e.persist();
        console.log(e);
        let audio = e.target;
        let { currentTime, duration } = audio;
        this.props.onTimeUpdate(currentTime, duration);
    }
    onVolumeChange(event) {
        let value = event.nativeEvent.target.value;
        this.props.onVolumeChange(value);
    }
    componentDidMount() {
        let gutter = document.getElementById('gutter');
        this.gutterWidth = gutter.clientWidth;
        this.x = gutter.getBoundingClientRect().x;
    }

    render() {
        let formatTime = this.formatTime;
        let { currentTime, duration, source } = this.props;
        currentTime = formatTime(currentTime);
        duration = formatTime(duration);
        return ( 
            <div className='player'>
                <div className='info'><h5>{this.props.songName}</h5><h6>{this.props.artist}</h6></div>

                <div className='prev'><img src={rewind} className='previmg' onClick={this.props.onPrev} /> </div>
                {this.props.playing ?
                    <div className='pause'><img src={pauseImage} className='pauseimg' onClick={this.props.onPause} /> </div> :
                    <div className='play'><img src={playImage} className='playimg' onClick={this.props.onPlay} /> </div>}

                <div className='next'><img src={forward} className='nextimg' onClick={this.props.onNext} /> </div>
                <div className='gutter' id='gutter'>
                    <div className='waste'></div>
                    <div className='ball' id='ball' style={{ left: this.getLeft() }}></div>
                    <div className='left' id='left'></div>
                    <div className='waste'></div>
                </div>
                <div className='time'>{currentTime}/{duration}</div>
                <div className='time'><input type='range' value={this.props.volume*100} id='volume' onChange={this.onVolumeChange} min='0' max='100'/></div>

                <div className='audio'>
                    <audio id='audio' src={source} onTimeUpdate={this.onPlay} volume={this.props.volume} volume={1}>
                    </audio>
                </div>
            </div>
        );
    }
    formatTime(seconds) {
        var hours = Math.floor(seconds / 60);
        var minutes = seconds % 60;
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
        source: state.player.source,
        volume: state.player.volume
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
        },
        onVolumeChange: function (value) {
            dispatch(volumeChange(parseInt(value)))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Player);


