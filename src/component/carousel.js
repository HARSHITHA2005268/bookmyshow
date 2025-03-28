import React from "react";

const MultiImageCarousel = () => {
  const imageStyle = {
    width: "500px", // Set a fixed width
    height: "500px", // Set a fixed height
    objectFit: "cover", // Ensures images fit properly without distortion
    borderRadius: "15px", // Optional: Rounds corners for better design
  };

  const movies = [
    {
      title: "Bloody Daddy",
      image: "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
    },
    {
      title: "Pathaan",
      image: "https://static.digit.in/OTT/v2/images/pathaan-719531.jpg",
    },
    {
      title: "Oppenheimer",
      image: "https://static01.nyt.com/images/2023/07/28/business/28strike-movies/28strike-movies-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },
  ];

  return (
    <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Carousel Items */}
        <div className="carousel-item active">
          <div className="row justify-content-center">
            {movies.map((movie, index) => (
              <div key={index} className="col-md-4 d-flex flex-column align-items-center">
                <img src={movie.image} style={imageStyle} alt={movie.title} />
                <h5 className="mt-2 text-center">{movie.title}</h5> {/* Movie Title */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MultiImageCarousel;
