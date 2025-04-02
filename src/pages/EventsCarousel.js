import React, { useState } from "react";
import EventCard from "../component/EventCard.js"; 

const EventPage = () => {
  const eventData = [
    {
      id: 1,
      title: "IPL Final Match",
      description: "The biggest cricket event of the year! Watch the IPL final live.",
      date: "2025-05-30",
      location: "Mumbai Stadium",
      price: "Rs.500",
      availability: "Available",
      image: "https://exchange4media.gumlet.io/news-photo/139188-IPL.jpg",
    },
    {
      id: 2,
      title: "Music Concert",
      description: "Join us for an electrifying music concert featuring top artists.",
      date: "2025-06-15",
      location: "New York Arena",
      price: "Rs.700",
      availability: "Limited Seats",
      image: "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=",
    },
    {
      id: 3,
      title: "Stand-Up Comedy Show",
      description: "Get ready for a night full of laughter with our top comedians.",
      date: "2025-07-20",
      location: "Los Angeles Theater",
      price: "Rs.450",
      availability: "Sold Out",
      image: "https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/65bfc39221930260292a030b_ComedyClub.jpg",
    },
  ];

  const [visibleEvents, setVisibleEvents] = useState(3);

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="bg-dark text-white d-flex flex-column justify-content-center align-items-center"
        style={{ height: "50vh", backgroundImage: "url(https://3.imimg.com/data3/CK/HV/MY-10570443/corporate-events.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "darken" }}
      >
        <h1
  className="display-4 fw-bold"
  style={{
    color: "#FFC107", // Deep purple color
    fontFamily: "'Poppins', sans-serif", // Custom Google font
    textShadow: "2px 2px 5px rgba(15, 206, 190, 0.3)", // Light shadow for depth
  }}
>
  Upcoming Events
</h1>

        <p className="lead">Find, Book, and Experience Amazing Events!</p>
      </div>

      {/* Event Listings */}
      <div className="container mt-5">
      <h2 className="text-center" style={{ color:  "#00008B", textShadow: "0 0 8px rgba(32, 134, 202, 0.8)" }}>
  Find and Book Your Favorite Events
</h2>



        <p className="text-center">Explore exciting events happening near you.</p>

        <div className="row">
          {eventData.slice(0, visibleEvents).map((event) => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card shadow-lg border-0" style={{ transition: "0.3s" }}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="card-img-top"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Price:</strong> {event.price}</p>
                  <p><strong>Availability:</strong> <span className={event.availability === "Sold Out" ? "text-danger" : "text-success"}>{event.availability}</span></p>
                  <button className="btn btn-primary" disabled={event.availability === "Sold Out"}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleEvents < eventData.length && (
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary" onClick={() => setVisibleEvents(visibleEvents + 3)}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;