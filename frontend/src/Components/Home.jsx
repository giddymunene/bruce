import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      {/* Header Logo */}
<div className="logo-container">
  <div className="logo-box">A</div>
</div>


      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl">
        {/* Left Side - Car Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-40" />
          
          {/* Circle Frame for Image */}
          <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden shadow-2xl border-8 border-blue-7000">
            <img
              src="/car.jpeg"
              alt="Luxury Car"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Let Your Arrival Announce Your Personality
          </h2>
          <h3 className="mt-4 text-2xl font-extrabold text-blue-800">
            HIRE A CAR FROM US TODAY!
          </h3>
          <div className="mt-6">
            <button
              onClick={() => navigate("/cars")}
              className="btn btn-primary"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
