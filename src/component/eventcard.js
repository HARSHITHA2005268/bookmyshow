import React from "react";

const EventCard = ({ image, title, date, location }) => {
  return (
    <div className="card shadow-lg p-3 mb-4 bg-white rounded" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>Date:</strong> {date}</p>
        <p className="card-text"><strong>Location:</strong> {location}</p>
        <a href="#" className="btn btn-primary">Book Now</a>
      </div>
    </div>
  );
};

export default Eventcard;
