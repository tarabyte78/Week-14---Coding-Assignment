import React from 'react';
import AddReviewForm from './AddReviewForm'; // Import AddReviewForm

const Movie = ({ id, title, image, synopsis, rating, reviews, addReview, rateMovie }) => {
  const handleAddReview = (review) => {
    addReview(id, review); // Pass movie ID and review
  };

  const handleRateMovie = () => {
    const newRating = "5 Stars";
    rateMovie(id, newRating);
  };

  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>{synopsis}</p>
      <img src={image} alt={title} />
      <div className="reviews">
        <h3>Reviews:</h3>
        {reviews.map(review => (
          <div key={review.id}>
            <p><strong>{review.author}</strong>: {review.content} ({review.rating})</p>
          </div>
        ))}
      </div>
      <div className='addReview'>Add A Review:</div>
      <AddReviewForm addReview={handleAddReview} /> {/* Include AddReviewForm */}
    </div>
  );
};

export default Movie;

