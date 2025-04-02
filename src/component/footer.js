import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              BookMyShow is your go-to platform for discovering and booking the latest movies, events, and concerts. Experience seamless ticket booking with special offers and discounts.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/movies" className="text-white">Movies</Link>
              </li>
              <li>
                <Link to="/events" className="text-white">Events</Link>
              </li>
              <li>
                <Link to="/login" className="text-white">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-white">Register</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  width="40"
                  height="40"
                />
              </a>
              <a
                href="https://x.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
>
<img
    src="https://e7.pngegg.com/pngimages/219/609/png-clipart-twitter-logo-sky-symbol-beak-aqua-twitter-engineering-united-states-thumbnail.png"
    alt="Twitter"
    width="40"
    height="40"
  />
</a>

              <a
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2025 BookMyShow. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
