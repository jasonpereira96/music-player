import React from 'react';
import Card from 'react-bootstrap/Card'
import { play } from './../actions/actions'
import { connect } from 'react-redux'

function SongCard(props) {
    return (<Card style={{ width: '18rem' }} className='song-card' onClick={function () { props.onClick(props.songId) }}>
        <Card.Img variant="top" src={props.image} fluid='true'/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.artist}</Card.Subtitle>
        </Card.Body>
    </Card>);
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: songId => dispatch(play(songId))
    }
}

export default connect(null, mapDispatchToProps)(SongCard);
