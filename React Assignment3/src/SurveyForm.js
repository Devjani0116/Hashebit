import React, { useState } from 'react';
import './SurveyForm.css';
import image from './image.svg';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    feedback: '',
    rating: 'Good',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="survey-form-container">
     
      <h3> <img src={image} alt="Survey" style={{ marginRight: '10px', height: '50px', width: 'auto' }}/> Survey Form</h3>
      
      
      {formSubmitted ? (
        <div className="thank-you-message">Thank you for your feedback!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <select name="rating" value={formData.rating} onChange={handleChange}>
              <option value="Good">Good</option>
              <option value="Bad">Bad</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
