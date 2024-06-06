import React, { useState } from 'react';

const AddReviewForm = ({ addReview }) => {
  const [formData, setFormData] = useState({
    author: '',
    rating: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: Date.now(),
      author: formData.author,
      rating: formData.rating,
      content: formData.content
    };
    addReview(newReview); // Directly call addReview
    setFormData({
      author: '',
      rating: '',
      content: ''
    });
  };

  return (
    <form className="add-review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Review Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="rating"
        placeholder="Rating (e.g., 4 Stars)"
        value={formData.rating}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Review Content"
        value={formData.content}
        onChange={handleChange}
        required
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddReviewForm;

