// Import necessary libraries from React
import React, { useState } from 'react';

// Define the AddReviewForm component which takes addReview as a prop
const AddReviewForm = ({ addReview }) => {
  // Initialize local state for the form data using the useState hook
  const [formData, setFormData] = useState({
    author: '',
    rating: '',
    content: ''
  });

  // Function to handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Update the corresponding field in the formData state
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newReview = {
      id: Date.now(), // Generate a unique ID using the current timestamp
      author: formData.author,
      rating: formData.rating,
      content: formData.content
    };
    addReview(newReview); // Call the addReview function passed as a prop
    // Reset the form fields
    setFormData({
      author: '',
      rating: '',
      content: ''
    });
  };

  // Render the form component
  return (
    <form className="add-review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="author"
        placeholder="Review Author"
        value={formData.author}
        onChange={handleChange}
        required // Make the field required
      />
      <input
        type="text"
        name="rating"
        placeholder="Rating (e.g., 4 Stars)"
        value={formData.rating}
        onChange={handleChange}
        required // Make the field required
      />
      <textarea
        name="content"
        placeholder="Review Content"
        value={formData.content}
        onChange={handleChange}
        required // Make the field required
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

// Export the AddReviewForm component as the default export
export default AddReviewForm;
