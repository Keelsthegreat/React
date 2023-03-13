import {useState, useEffect} from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import Form from "./Components/Form";
import AnimeData from './Components/AnimeData';

export default function App() {
  //variable with your apiKey
  const apiKey = "";

  //State to hold movie data
  const [anime, setAnime] = useState();

  //Function to getMovies
  const getAnime = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `'https://api.jikan.moe/v3/top/anime/1/bypopularity'`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setAnime(data);
  };

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="App">
      <Form animesearch={getAnime} />
      <AnimeData/>
    </div>
  );
}
