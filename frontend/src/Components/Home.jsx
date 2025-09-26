import React from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "./CarCard"; 
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const carData = [
    {
      image: "/images/car1.jpg",
      title: "Mercedes S-Class",
      description: "A luxury sedan with unmatched comfort and performance."
    },
    {
      image: "/images/car2.jpg",
      title: "Range Rover Sport",
      description: "Powerful SUV for both city drives and off-road adventures."
    },
    {
      image: "/images/car3.jpg",
      title: "BMW M5",
      description: "High-performance sports sedan with a bold design."
    },
    {
      image: "/images/car4.jpg",
      title: "Audi Q7",
      description: "A premium SUV combining technology, comfort, and power."
    },
    {
      image: "/images/car5.jpg",
      title: "Porsche 911",
      description: "Iconic sports car with thrilling performance and style."
    }
  ];

  return (
    <div className="home-container">
      <div className="cards-row">
        {carData.map((car, index) => (
          <CarCard
            key={index}
            image={car.image}
            title={car.title}
            description={car.description}
          />
        ))}
      </div>

      <div className="home-text">
        <h2>Let Your Arrival Announce Your Personality</h2>
        <h3>HIRE A CAR FROM US TODAY!</h3>
        <button
          className="book-btn"
          onClick={() => navigate("/cars")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
