import { useEffect, useState } from 'react'
import Card from './components/Card.jsx'
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState('')
  const pokeApi = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/bibarel')
    .then((response)=> response.json())
    .then((pokemonData)=>{
      console.log(pokemonData)
      setPokemon(pokemonData)
    })
  }
  const emojis = {
    electric: '⚡',
    water: '💧',
    grass: '🍃',
    rock: '⛰',
    ghost: '👻',
    dragon: '🐉',
    fairy: '🧚‍♀️',
    normal: '⚫',
    fire: '🔥',
    flying: '💨',
    Default: '❓'
  }
  useEffect(()=>{
    pokeApi()
  },[])
  return (
    <div className="App">
      {pokemon !== ''
      
        ?<Card
          cp = {pokemon.base_experience}
          imgSrc = {pokemon.sprites.other.home.front_default}
          imgAlt = {pokemon.name}
          pokemonName = {pokemon.name}
          pokemonType = {pokemon.types.map(pokemonType =>{
            return(emojis[pokemonType.type.name])
          })}
        />
      : pokeApi()}
    </div>
  );
}

export default App;
