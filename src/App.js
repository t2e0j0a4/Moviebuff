import React from 'react'
import Home from "./Pages/Home";
import Genres from "./Pages/Genres";
import State from "./Context/State";
import Navbar from "./Components/Navbar";
import GenreMovies from "./Pages/GenreMovies";
import SearchMovies from "./Pages/SearchMovies";
import { Route, Routes } from 'react-router-dom';
import Movie from './Pages/Movie';

const App = () => {
  return (
    <State>
      <main className="max-w-[100%] min-h-[100vh] bg-white">
        <Navbar/>
        <div className="w-[100%] bg-white">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/genres' element={<Genres/>}/>
            <Route path='/genre' element={<GenreMovies/>}/>
            <Route path='/search' element={<SearchMovies/>}/>
            <Route path='/movie/:movieid' element={<Movie/>}/>
          </Routes>
        </div>
      </main>
    </State>
  )
}

export default App