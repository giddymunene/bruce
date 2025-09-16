import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <nav className="custom-navbar">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="/" className="brand">
          🚗 CarHub
        </a>

        {/* Links */}
        <ul className="nav-links d-none d-md-flex">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/cars">Cars</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/register">Register</Link></li>
  <li><Link to="/login">Login</Link></li>
  <li><Link to="/admin">Admin</Link></li>

</ul>

        {/* Search */}
        <form className="search-bar d-none d-md-flex" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search cars..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        
        <button
          className="menu-toggle d-md-none"
          data-bs-toggle="collapse"
          data-bs-target="#mobileMenu"
        >
        </button>
      </div>

     
    </nav>
  );
};

export default Navbar;
