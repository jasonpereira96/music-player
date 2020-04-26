import React from 'react';
import Container from 'react-bootstrap/Container'
import Card from './Card'
import CardDeck from 'react-bootstrap/CardDeck'
import jc from './../img/jc.jpg';


function CardHolder(props) {
        
    let emptyCard = (<Card className='empty-card' style={{ width: '18rem' }} border='light'>
        <Card.Body>
        <Card.Title></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        </Card.Body>
    </Card>);
    function getCardDecks(number) {
        let cardDecks = [];
        while (number >= 5) {
            cardDecks = cardDecks.concat(<CardDeck>{[card, card, card, card, card]}</CardDeck>);
            number = number - 5;
        }
        cardDecks = cardDecks.concat(<CardDeck>{new Array(number).fill(emptyCard)}</CardDeck>);
        return cardDecks;
    }
    return (
        <Container fluid className="card-holder">
            <CardDeck style={{padding: 20}}>
                {[card, card,card,card,card]}
            </CardDeck>
            <CardDeck style={{padding: 20}}>
                {[card, card,card,card,card]}
            </CardDeck>
            <CardDeck style={{padding: 20}}>
                {[card, emptyCard,emptyCard,emptyCard,emptyCard]}
            </CardDeck>
        </Container>
    );
}

export default CardHolder;
