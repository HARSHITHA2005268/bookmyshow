import React from "react";

const MultiImageCarousel = () => {
  const imageStyle = {
    width: "270px", 
    height: "350px", 
    objectFit: "cover",
    borderRadius: "20px",
  };

  const movies = [
    { title: "Bloody Daddy", image: "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg" },
    { title: "Pathaan", image: "https://static.digit.in/OTT/v2/images/pathaan-719531.jpg" },
    { title: "Kraven", image: "https://static01.nyt.com/images/2023/07/28/business/28strike-movies/28strike-movies-articleLarge.jpg?quality=75&auto=webp&disable=upscale" },
    { title: "Bhasad", image: "https://i.ytimg.com/vi/-pvt6tQsOqQ/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBZEmZDQ5V6NAUHqvlUShb8qJftMA" },
    { title: "Jigra", image: "https://english.cdn.zeenews.com/sites/default/files/2024/06/28/1427283-jigra.png" },
    { title: "Singham Again", image: "https://cinemasmachar.com/wp-content/uploads/2024/10/Singham-Again-1024x683.jpg" },
    { title: "Pushpa 2", image: "https://m.media-amazon.com/images/M/MV5BZjllNTdiM2QtYjQ0Ni00ZGM1LWFlYmUtNWY0YjMzYWIxOTYxXkEyXkFqcGc@._V1_.jpg" },
    { title: "Salaar", image: "https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_.jpg" },
    { title: "Animal", image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Animal_%282023_film%29_poster.jpg/220px-Animal_%282023_film%29_poster.jpg" },
    { title: "Jawan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-K6nK52oTrKAz4dLU9UyoL2MVFydZ0R-fHQ&s" },
    { title: "KGF Chapter 2", image: "https://m.media-amazon.com/images/S/pv-target-images/ef222e4c367082c8f94315fbf5b62d350547c5e2589a97f12d5414979c64a9fc.jpg" },
    { title: "RRR", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLURdi6kekYtHq1xx0AqGH9T0bOEgDSufp7g&s" },
  ];

  // Function to split movies into groups of 12 (for 3 rows per slide)
  const chunkMovies = (arr, chunkSize) => {
    return arr.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  const groupedMovies = chunkMovies(movies, 12); // Group movies in sets of 12

  return (
    <div id="movieCarousel" className="carousel slide bg-dark text-white p-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        {groupedMovies.map((group, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="container">
              {/* Loop to create 3 rows */}
              {[0, 1, 2].map((row) => (
                <div className="row justify-content-center mt-3" key={row}>
                  {group.slice(row * 4, row * 4 + 4).map((movie, idx) => (
                    <div key={idx} className="col-md-3 d-flex flex-column align-items-center">
                      <img src={movie.image} style={imageStyle} alt={movie.title} />
                      <h6 className="mt-2 text-center text-white">{movie.title}</h6>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
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
