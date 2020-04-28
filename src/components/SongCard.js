import React from 'react';
import Card from 'react-bootstrap/Card'
import jc from './../img/jc.jpg';
import { play } from './../actions/actions'
import { connect } from 'react-redux'

function SongCard(props) {
    return (<Card style={{ width: '18rem' }} className='song-card'>
        <Card.Img variant="top" src={props.image} onClick={function () { props.onClick(props.songId) }} fluid/>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.artist}</Card.Subtitle>
            {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.</Card.Text> */}
        </Card.Body>
    </Card>);
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
    return {
        onClick: songId => dispatch(play(songId))
    }
}

export default connect(null, mapDispatchToProps)(SongCard);
