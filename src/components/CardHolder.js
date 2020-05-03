import React from 'react';
import Container from 'react-bootstrap/Container'
import SongCard from './SongCard'
import EmptyCard from './EmptyCard'
import CardDeck from 'react-bootstrap/CardDeck'
import fetchSongs from './../utils/fetchSongs'

class CardHolder extends React.Component {
    
    componentDidMount() {
        fetchSongs().then(songs => {
            this.props.songsFetched(songs);
        });
    }
    
    render() {
        let { songs } = this.props;
        let number = songs.length;
        let cardDecks = [];
        let count = 0;
        while (number >= 5) {
            cardDecks = cardDecks.concat(
                <CardDeck style={{ padding: 20 }} key='4'>
                    <SongCard artist={songs[count + 0].artist} title={songs[count + 0].title} songId={songs[count + 0].id} image={songs[count + 0].image} />
                    <SongCard artist={songs[count + 1].artist} title={songs[count + 1].title} songId={songs[count + 1].id} image={songs[count + 1].image} />
                    <SongCard artist={songs[count + 2].artist} title={songs[count + 2].title} songId={songs[count + 2].id} image={songs[count + 2].image} />
                    <SongCard artist={songs[count + 3].artist} title={songs[count + 3].title} songId={songs[count + 3].id} image={songs[count + 3].image} />
                    <SongCard artist={songs[count + 4].artist} title={songs[count + 4].title} songId={songs[count + 4].id} image={songs[count + 4].image} />
                </CardDeck>);
            number = number - 5;
            count = count + 5;
        }
        let numberOfEmptyCards = 5 - number % 5;
        let remainingCards = [];
        for (var i = count; i < songs.length; i++) {
            remainingCards.push(<SongCard key={songs[i].id} title={songs[i].title} artist={songs[i].artist} songId={songs[i].id} image={songs[i].image} />)
        }
        for (var i = 1; i <= numberOfEmptyCards; i++) {
            remainingCards.push(<EmptyCard />);
        }
        cardDecks = cardDecks.concat(<CardDeck style={{ padding: 20 }} key='5'>{remainingCards}</CardDeck>);
        return (
            <Container fluid className="card-holder">
                {cardDecks}
            </Container>
        );
    }
}

export default CardHolder;
