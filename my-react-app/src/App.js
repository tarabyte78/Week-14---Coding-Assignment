import { useState } from 'react';
import Movie from './Movie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "BARBIE",
      image: "https://posters.movieposterdb.com/23_06/2023/1517268/l_barbie-movie-poster_780f2c78.jpg",
      synopsis: "Barbie suffers a crisis that leads her to question her world and her existence.",
      reviews: [
        { id: 1, author: "John D.", rating: "4 Stars", content: "Great movie!" },
        { id: 2, author: "Jane S.", rating: "5 Stars", content: "Mind-bending storyline!" }
      ],
    },
    {
      id: 2,
      title: "THE DARK KNIGHT",
      image: "https://posters.movieposterdb.com/08_05/2008/468569/l_468569_f0e2cd63.jpg",
      synopsis: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      reviews: [
        { id: 1, author: "Bruce", rating: "2 Stars", content: "The best Batman movie ever!" }
      ],
    },
    {
      id: 3,
      title: "THE MANDALORIAN",
      image: "https://posters.movieposterdb.com/22_10/2019/8111088/l_the-mandalorian-movie-poster_c9aa37f3.jpg",
      synopsis: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
      reviews: [
        { id: 1, author: "Stanly H.", rating: "4 Stars", content: "Cutest Creature Ever!" }
      ],
    }
  ]);

  const addReview = (movieId, review) => {
    setMovies(prevMovies => {
      const updatedMovies = prevMovies.map(movie => {
        if (movie.id === movieId) {
          return { ...movie, reviews: [...movie.reviews, review] };
        }
        return movie;
      });
      return updatedMovies;
    });
  };

  const rateMovie = (movieId, newRating) => {
    setMovies(prevMovies => {
      const updatedMovies = prevMovies.map(movie => {
        if (movie.id === movieId) {
          return { ...movie, rating: newRating };
        }
        return movie;
      });
      return updatedMovies;
    });
  };

  return (
    <div className="app">
      <h1>Movie Reviews</h1>
      <div className="movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            synopsis={movie.synopsis}
            image={movie.image}
            rating={movie.rating}
            reviews={movie.reviews}
            addReview={addReview} // Pass the addReview function
            rateMovie={rateMovie} // Pass the rateMovie function
          />
        ))}
      </div>
    </div>
  );
};

export default App;

