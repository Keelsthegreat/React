import React from 'react'

export default function AnimeDisplay ({ anime }){
    //function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1>{anime.Title}</h1>
          <h2>{anime.Genre}</h2>
          <img src={anime.image} alt={anime.Title} />
          <h1>{anime.Plot}</h1>
          <h2>{anime.Year}</h2>
        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Anime to Display :/</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return anime ? loaded() : loading();
  };
  
  // We must export the component to use it in other files
  