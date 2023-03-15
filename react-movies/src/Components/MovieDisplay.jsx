import Form from "./Form";
// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
// You can also destructure your props directly from the parameter list
export default function  MovieDisplay ({ movie }){
    //function to return loaded JSX

    
    const loaded = () => {
      return (
        <>
      
          <h1>{movie.Title}</h1>
          <img className="pic" src= {movie.Poster} />
          <h2>Year Released: {movie.Year}</h2>
          <h2>Synopsis: {movie.Plot}</h2>
          <h2>Rating: {movie.imdbRating}</h2>
        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  };
  
  // We must export the component to use it in other files
  