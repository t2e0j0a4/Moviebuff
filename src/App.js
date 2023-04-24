import React from 'react'
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import Genres from "./Pages/Genres";
import State from "./Context/State";
import Navbar from "./Components/Navbar";
import GenreMovies from "./Pages/GenreMovies";
import SearchMovies from "./Pages/SearchMovies";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <State>
      <main className="app">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/genres' element={<Genres/>}/>
          <Route path='/genres/:genre' element={<GenreMovies/>}/>
          <Route path='/movie/:id' element={<Movie/>}/>
          <Route path='/search/:query' element={<SearchMovies/>} />
        </Routes>
      </main>
    </State>
  )
}

export default App