import Router from './routes/Router'
import { PokemonCard } from './components/PokemonCard/PokemonCard2'


function App() {
  return (
    <div className="App">
      <Router/>
      <PokemonCard />
    </div>
  );
}

export default App;
