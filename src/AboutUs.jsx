import React from 'react';
import './AboutUs.css';

function AboutUs({ onGetStarted }) {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-heading">Welcome To Paradise Nursery</h1>
        <p className="about-us-tagline">Where Green Meets Serenity</p>
        <p className="about-us-description">
          At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more peaceful lifestyle. From air-purifying plants to aromatic and medicinal herbs, we have something for every plant enthusiast.
        </p>
        <p className="about-us-description">
          Our team of experts ensures that each plant is nurtured with care, ready to thrive in your home or office. Join us in our journey to create greener, fresher, and more serene spaces.
        </p>
        <div className="about-us-button-container">
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

