import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from './Card'


function EmptyCard(props) {
    return (<Card className='empty-card' style={{ width: '18rem' }} border='light'>
        <Card.Body>
            <Card.Title></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        </Card.Body>
    </Card>);
}

export default EmptyCard;
