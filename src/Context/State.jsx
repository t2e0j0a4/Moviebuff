import React , {useState} from "react";
import Context from "./Context";

const State = (props) => {

    // API KEY
    let API_KEY = "bcc7bf272ffbf01dc4669ba84559ce14";

    // Home Page Filteration
    let [filter, setFilter] = useState('day');
    const changeFilter = (e) => {
        setFilter(e.target.value);
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

    React.useEffect(() => {
        fetchTrendSearch(filter);
        // eslint-disable-next-line
    }, [filter]);

    return (
      <Context.Provider value={{ filter, changeFilter, trendingResults }}>
        {props.children}
      </Context.Provider>
    );
}

export default State;