// Import necessary libraries and components
import React from 'react';
import AddReviewForm from './AddReviewForm'; // Import AddReviewForm component

// Define the Movie component which receives various props
const Movie = ({ id, title, image, synopsis, rating, reviews, addReview, rateMovie }) => {
  // Function to handle adding a review
  const handleAddReview = (review) => {
    addReview(id, review); // Call addReview with the movie ID and review
  };

  // Function to handle rating a movie
  const handleRateMovie = () => {
    const newRating = "5 Stars";
    rateMovie(id, newRating); // Call rateMovie with the movie ID and new rating
  };

  // Render the Movie component UI
  return (
    <div className="movie">
      <h2>{title}</h2> {/* Display movie title */}
      <p>{synopsis}</p> {/* Display movie synopsis */}
      <img src={image} alt={title} /> {/* Display movie image */}
      
      <div className="reviews">
        <h3>Reviews:</h3>
        {reviews.map(review => (
          <div key={review.id}>
            <p><strong>{review.author}</strong>: {review.content} ({review.rating})</p>
          </div>
        ))}
      </div>
      
      <div className='addReview'>Add A Review:</div>
      <AddReviewForm addReview={handleAddReview} /> {/* Include AddReviewForm and pass handleAddReview */}
    </div>
  );
};

// Export the Movie component as the default export
export default Movie;
