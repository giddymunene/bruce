import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cars from "./Components/Cars";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Login from "./Components/Login";
import AdminDashboard from "./Components/AdminDashboard";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Show only the page that matches the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* 404 Page */}
        <Route
          path="*"
          element={<h2 className="text-center mt-5">404 - Page Not Found</h2>}
        />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;
