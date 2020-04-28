import React from 'react';
import {useEffect} from 'react';
import Container from 'react-bootstrap/Container'
import SongCard from './SongCard'
import EmptyCard from './EmptyCard'
import CardDeck from 'react-bootstrap/CardDeck'
// import jc from './../img/jc.jpg';
import play from './../img/play-64.png'


function CardHolder(props) {
    let { songs } = props;
    let number = songs.length;
    let cardDecks = [];
    let count = 0;
    while (number >= 5) {
        cardDecks = cardDecks.concat(
            <CardDeck style={{ padding: 20 }}>
                <SongCard artist={songs[count + 0].artist} title={songs[count + 0].title} songId={songs[count + 0].id} image={songs[count+0].image}/>
                <SongCard artist={songs[count + 1].artist} title={songs[count + 1].title} songId={songs[count + 1].id} image={songs[count+1].image}/>
                <SongCard artist={songs[count + 2].artist} title={songs[count + 2].title} songId={songs[count + 2].id} image={songs[count+2].image}/>
                <SongCard artist={songs[count + 3].artist} title={songs[count + 3].title} songId={songs[count + 3].id} image={songs[count+3].image}/>
                <SongCard artist={songs[count + 4].artist} title={songs[count + 4].title} songId={songs[count + 4].id} image={songs[count+4].image}/>
            </CardDeck>);
        number = number - 5;
        count = count + 5;
    }
    let numberOfEmptyCards = 5 - number % 5;
    let remainingCards = [];
    for (var i = count; i < songs.length; i++) {
        remainingCards.push(<SongCard title={songs[i].title} artist={songs[i].artist} songId={songs[i].id} image={songs[i].image}/>)
    }
    for (var i = 1; i <= numberOfEmptyCards; i++) {
        remainingCards.push(<EmptyCard />);
    }
    cardDecks = cardDecks.concat(<CardDeck style={{ padding: 20 }}>{remainingCards}</CardDeck>);
    // return cardDecks;
    useEffect(() => {
        let imgs = document.getElementsByClassName('card-img-top')
        for (var i = 0; i < imgs.length; i++) {
            let image = imgs[i];
            let originalSource = image.src;
            // image.addEventListener('mouseenter', () => {
            //     image.src = play;
            // });
            // image.addEventListener('mouseleave', () => {
            //     image.src = originalSource;
            // });
        }
    });
    return (
        <Container fluid className="card-holder">
            {cardDecks}
        </Container>
    );
}

export default CardHolder;
