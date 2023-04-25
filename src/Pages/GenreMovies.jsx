import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import MovieDisplay from '../Components/MovieDisplay';

const GenreMovies = () => {

  // API KEY
  let API_KEY = "bcc7bf272ffbf01dc4669ba84559ce14";

  let { search } = useLocation();
  let genreid = new URLSearchParams(search).get("genreid");
  let genrename = new URLSearchParams(search).get("q");

  // That Genre Based Movies
  let [genreMovies, setGenreMovies] = useState([]);
  const thatGenreMovies = async (genreid) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=${genreid}`
    );
    let data = await response.json();
    let {results} = data;
    setGenreMovies(results);
  };

  useEffect(() => {
    thatGenreMovies(genreid);
    // eslint-disable-next-line
  }, [genreid]);

  return (
    <div className='w-[1240px] max-w-[98%] mx-auto p-2'>

      {/* Heading */}
      <div className="w-[100%] flex justify-between gap-[1rem] items-center my-1 py-2">
        <h1 className="font-Roboto text-[32px] font-[900]">Genre - {genrename}</h1>
      </div>

      {/* Trending Movies */}
      <div className="flex w-[100%] flex-wrap gap-[4rem] py-4 justify-center items-center">
        {
          genreMovies.map((movie) => {
            return (
              <MovieDisplay key={movie.id} details={movie}/>
            )
          })
        }
      </div>      

    </div>
  );
}

export default GenreMovies