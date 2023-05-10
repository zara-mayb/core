import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  //state vars
  const [pokemon, setPokemon] = useState([])

  //axios get
  const axiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then( (serverResponse) => {
        console.log(serverResponse.data.results)
        setPokemon(serverResponse.data.results)
      })
      .catch( err => console.log(err) )
  }
  return (
    <div className="App">
      <h1>POKEMON API</h1>
      <button onClick={axiosPokemon}>AXIOS Pokemon</button>
      <hr />
      <div>
        {
          pokemon.map( (poke, idx) => {
            return (
              <li key={idx}>{poke.name}</li>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
