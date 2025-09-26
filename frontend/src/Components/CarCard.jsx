import React from "react";
import "./CarCard.css"; // for the flip animation

const CarCard = ({ image, title, description }) => {
  return (
    <div className="car-card">
      <div className="car-card-inner">
        {/* Front - Car Image */}
        <div className="car-card-front">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-xl"
          />
          <h3 className="mt-3 text-xl font-bold text-gray-800">{title}</h3>
        </div>

        {/* Back - Car Description */}
        <div className="car-card-back flex flex-col items-center justify-center p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
