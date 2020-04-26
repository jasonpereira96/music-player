import React from 'react';
import Container from 'react-bootstrap/Container'
import SongCard from './Card'
import EmptyCard from './EmptyCard'
import CardDeck from 'react-bootstrap/CardDeck'
// import jc from './../img/jc.jpg';


function CardHolder(props) {
    let { songs } = props;
    let number = songs.length;
    let cardDecks = [];
    let count = 0;
    while (number >= 5) {
        cardDecks = cardDecks.concat(
            <CardDeck style={{ padding: 20 }}>
                <SongCard subtitle={songs[count+0].subtitle} title={songs[count+0].title}/>
                <SongCard subtitle={songs[count+1].subtitle} title={songs[count+1].title}/>
                <SongCard subtitle={songs[count+2].subtitle} title={songs[count+2].title}/>
                <SongCard subtitle={songs[count+3].subtitle} title={songs[count+3].title}/>
                <SongCard subtitle={songs[count+4].subtitle} title={songs[count+4].title}/>
            </CardDeck>);
        number = number - 5;
        count = count + 5;
    }
    let numberOfEmptyCards = 5 - number % 5;
    let remainingCards = [];
    for (var i = count ; i<songs.length;i++) {
        remainingCards.push(<SongCard title={songs[i].title} subtitle={songs[i].subtitle}/>)
    }
    for (var i = 1;i<=numberOfEmptyCards;i++) {
        remainingCards.push(<EmptyCard/>);
    }
    cardDecks = cardDecks.concat(<CardDeck style={{ padding: 20 }}>{remainingCards}</CardDeck>);
    // return cardDecks;
    return (
        <Container fluid className="card-holder">
            {cardDecks}
        </Container>
    );
}

export default CardHolder;
