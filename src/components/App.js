import '../styles/App.css';
import Header from './Header';
import Pokedex from './Pokedex';
import Footer from './Footer';
import Filters from './Filters';

function App() {

	return (
		<div className="App">
			<Header />
			<Filters />
			<Pokedex />
			<Footer />
		</div>
	);
}

export default App;
