import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  const API_URL = 'https://playground.mockoon.com/movies';
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const addMovie = async (movie) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchMovies();
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const updateMovie = async (movie) => {
    try {
      const response = await fetch(`${API_URL}/${movie.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchMovies();
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      fetchMovies();
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClearSelection = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm 
        addMovie={addMovie} 
        updateMovie={updateMovie} 
        selectedMovie={selectedMovie} 
        clearSelection={handleClearSelection}
      />
      <MovieList 
        movies={movies} 
        deleteMovie={deleteMovie} 
        selectMovie={handleSelectMovie}
      />
    </div>
  );
}

export default App;
