import React from "react";
import Carousel from "../component/carousel.js"; // Correct import path

const Movies = () => {
  return (
    <div>
      <h2 className="text-center my-3">Watch Recent Movies</h2>
      <Carousel />
    </div>
  );
};

export default Movies;
