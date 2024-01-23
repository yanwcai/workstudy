import * as React from 'react';
import '../App.css';
import "./HeroSection.css";
import bg_image from "../images/SFU_convocation.jpeg";

const HeroSection = ({ title, description }) => {
  return (
    <div className="hero-container" style={{backgroundImage: `url(${bg_image})`}}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  );
};

export default HeroSection;
