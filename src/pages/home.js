import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Home = () => {
  // Custom image array (Replace these URLs with your own)
  const [images, setImages] = useState([
    {
      url: "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
      title: "Custom Movie 1",
    },
    {
      url: "https://m.media-amazon.com/images/I/610CYrdV7AS.jpg",
      title: "Custom Movie 2",
    },
    {
      url: "https://hayotfilms.com/wp-content/uploads/2023/06/beauty-and-the-beast-hollywood-movies.jpg.webp",
      title: "Custom Movie 3",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Custom Movie 4",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Custom Movie 5",
    },
  ]);

  return (
    <div>
      {/* Welcome Banner */}
      <div
        className="d-flex justify-content-center align-items-center text-white text-center"
        style={{
          height: "80vh",
          backgroundImage: "url('https://t3.ftcdn.net/jpg/05/03/58/28/360_F_503582859_7SJMOrd2Xf5ujdBjrBCam7ngr9wc84vH.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{ fontSize: "3rem", textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}>
          Welcome to <span style={{ color: "#FFD700" }}>BookMyShow</span>
        </h1>
      </div>

      {/* Movie Carousel */}
      <div className="container mt-4">
        <h2
          className="text-center fw-bold text-primary"
          style={{ fontSize: "2rem", textShadow: "2px 2px 4px rgba(55, 8, 77, 0.3)" }}
        >
          Discover & Book Your Favorite Movies & Events!
        </h2>
        <p className="text-center text-muted" style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
          Enjoy a seamless ticket booking experience with exclusive deals!
        </p>

        {/* Swiper for all screens */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={true}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-80 py-4 text-center">
                <img
                  src={image.url} // ✅ Using custom image URLs
                  alt={image.title}
                  className="w-99 h-auto rounded-md object-cover"
                  style={{ maxHeight: "490px", objectFit: "cover" }}
                />
                <h3 className="mt-3 text-white">{image.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
