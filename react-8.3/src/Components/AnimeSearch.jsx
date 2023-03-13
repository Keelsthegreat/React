import React, {useState} from 'react'



function Search(){
    const [query, setQuery] = useState('');
    const [animeSearch, setAnimeSearch] = useState([]);
    
    const searchAnime = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`)
        const data = await response.json();
        setAnimeSearch(data.animeSearch);
        
      }catch (error){
        console.log(error)
      }
    };
    useEffect(() => {
      searchAnime();
    }, []);
    
    const handleSubmit = (event) => {
      event.preventDefault();
      searchAnime()
    };
    
    const handleChange = (event) => {
      setQuery(event.target.value)
    };
    
    

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {query} onChange = {handleChange}/>
            <button type = "submit">Search</button>
        </form>

            {animeSearch.map((anime) => (
              <div key = {anime.mal_id}>
                <h2>{anime.title}</h2>
                <img src = {anime.image_url} alt = {anime.title}/>
                <p>{anime.score}</p>
                <p>{anime.synopsis}</p>
              </div>  
            ))}
    </div>
  )
}

export default Search