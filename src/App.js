import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Player from './components/Player'
import CardHolderContainer from './containers/CardHolderContainer'
import SearchbarContainer from './containers/SearchbarContainer'
import ExtraSpace from './components/ExtraSpace'



function App() {
	return (
		<>
			<Navbar bg="dark">
				<SearchbarContainer />
			</Navbar>
			<CardHolderContainer></CardHolderContainer>
			<ExtraSpace></ExtraSpace>
			<Player playing={false}></Player>
		</>
	);
}

export default App;
