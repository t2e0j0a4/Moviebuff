import React from 'react'
import MovieDisplay from '../Components/MovieDisplay';
import {useLocation} from "react-router-dom";

const SearchMovies = () => {

  let {search} = useLocation();
  let searchQuery = new URLSearchParams(search).get("q");

  let [searchResults, setSearchResults] = React.useState([]);

  // API KEY
  let API_KEY = "bcc7bf272ffbf01dc4669ba84559ce14";

  const handleSearchResults = async (query) => {
    if (query) {
      let searchResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      let searchData = await searchResponse.json();
      let { results } = searchData;
      setSearchResults(results);
    }
  }

  React.useEffect(() => {
    handleSearchResults(searchQuery);
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <div className='w-[1240px] max-w-[98%] mx-auto p-2'>

      {/* Heading */}
      <div className="w-[100%] flex justify-between gap-[1rem] items-center my-1 py-2">
        <h1 className="font-Roboto text-[32px] font-[900]">Search Results</h1>
      </div>

      {/* Search Movie List */}
      <div className="flex w-[100%] flex-wrap gap-[4rem] py-4 justify-center items-center">
        {
          searchResults.map((movie) => {
            return (
              <MovieDisplay key={movie.id} details={movie}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default SearchMovies