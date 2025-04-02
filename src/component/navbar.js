import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Home Button instead of "Home page" text */}
        <Link to="/" className="btn btn-outline-light me-3">Home</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/movies">Movies</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex mx-3">
            <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

