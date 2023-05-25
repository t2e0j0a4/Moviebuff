import React , {useEffect, useState} from "react";
import Context from "./Context";
import { useNavigate } from "react-router-dom";

const State = (props) => {

    let navigate = useNavigate();

    // API KEY
    let API_KEY = "bcc7bf272ffbf01dc4669ba84559ce14";

    // Home Page Filteration
    let [filter, setFilter] = useState('day');
    const changeFilter = (type) => {
        setFilter(type);
    }
    
    // Trending Searhes for Home page
    let [trendingResults, setTrendingResults] = useState([]);
    const fetchTrendSearch = async (filter) => {
        let trendSearchAPI = `https://api.themoviedb.org/3/trending/movie/${filter}?api_key=${API_KEY}`;
        let response = await fetch(trendSearchAPI);
        let data = await response.json();
        let {results} = data;
        setTrendingResults(results);
    }

    useEffect(() => {
        fetchTrendSearch(filter);
        // eslint-disable-next-line
    }, [filter]);

    // Searching Movies
    let [searchInput, setSearchInput] = useState('');
    const handleSearchInput = (e) => {
      setSearchInput(e.target.value)
    }
    
    // Navigate to search results page.
    const handleSearchClick = () => {
      if (searchInput) {
        navigate(`/search?q=${searchInput}`);
        setSearchInput('');
      }
    }

    // Different Genres
    let [theGenres, setTheGenres] = useState([]);
    const allGenres = async () => {
      let genresResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
      let genreData = await genresResponse.json();
      let {genres} = genreData;
      setTheGenres(genres);
    }

    useEffect(() => {
      allGenres();
      // eslint-disable-next-line
    }, []);


    return (
      <Context.Provider value={{ filter, changeFilter, trendingResults, searchInput, handleSearchInput, handleSearchClick, theGenres }}>
        {props.children}
      </Context.Provider>
    );
}

export default State;