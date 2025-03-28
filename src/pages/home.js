
import React from "react";

const Home = () => {
  const sampleData = [
    { id: 1, title: "Avengers: Endgame", type: "movie" },
    { id: 2, title: "IPL Final Match", type: "event" },
    { id: 3, title: "Inception", type: "movie" },
    { id: 4, title: "Music Concert", type: "event" },
  ];
  return (
    <div>
      <div className="bg-info text-white d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
        <h1>Welcome to BookMyShow </h1>
        
      </div>

      <div className="container mt-4">
        <h2 className="text-center">Find and book your favorite movies, events, and more!</h2>
        <p className="text-center">Experience seamless ticket booking with amazing offers.</p>
      </div>
    </div>
  );
};

export default Home;
