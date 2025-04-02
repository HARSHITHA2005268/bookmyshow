import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.js";
import Footer from "./component/footer.js";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Movies from "./pages/movies.js";
import EventsCarousel from "./pages/EventsCarousel.js"; // Ensure this path is correct

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<EventsCarousel />} /> {/* Make sure the path matches */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
