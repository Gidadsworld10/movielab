import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";


const API = "http://omdbapi.com?apikey=5b256f40";


const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies("ring");
  }, []);

  return (
    <div className="app">
      <h1>MovieLab</h1>
      <div className="search">
        <input
          placeholder="Search any movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0 ?
          (<div className="container">
            {movies.map((movie, idx) => (
              <MovieCard key={idx} movie={movie} />
            ))}
          </div>) :
          (
            <div className="empty">
              <h2>Found no movies</h2>
            </div>
          )
      };


    </div>
  );
};
export default App;
