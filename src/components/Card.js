import React from 'react';
import Card from 'react-bootstrap/Card'
import jc from './../img/jc.jpg';


function Card(props) {
    return (<Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={jc} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
            {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.</Card.Text> */}
        </Card.Body>
    </Card>);
}

export default Card;
