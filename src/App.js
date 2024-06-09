
import './App.css';
import './Pokecard.css';
import Pokedex from "./Pokedex"
import Pokegame from "./Pokegame"
import React, { useRef, useState } from 'react';
import pokemonTheme from './Original Pokemon Theme Singer Jason Paige In Studio Full Pokemon Theme Song.mp3';

function App() {
  const handleImageClick = (e) => {

    if (isPlaying) {
      audioRef.current.pause();

    } else {
      audioRef.current.play();

    }
    e.preventDefault();
    setIsPlaying(!isPlaying);

  }
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const imageUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96e411d5-21aa-48c9-aaff-096b8a5544a9/dadhznk-3a51975c-49a0-4049-97e9-1eee7e8517d9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2ZTQxMWQ1LTIxYWEtNDhjOS1hYWZmLTA5NmI4YTU1NDRhOVwvZGFkaHpuay0zYTUxOTc1Yy00OWEwLTQwNDktOTdlOS0xZWVlN2U4NTE3ZDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NizuVJen5_F9OHkcAhjyT5h1I_SY5DByVDWRB0l9BX0';



  return (
    <div className="App">
      <h1>Pokemon Go Card Game</h1>
      <img src={imageUrl} className='pokeBall' onClick={handleImageClick}></img>
      <audio ref={audioRef} src={pokemonTheme} />
      <Pokegame />
    </div >

  );

}

export default App;
