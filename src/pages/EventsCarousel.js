import React from "react";

const EventsCarousel = () => {
  const events = [
    {
      title: "Music Festival 2025",
      date: "April 20, 2025",
      image: "https://www.edmfestivalinsider.com/wp-content/uploads/2023/06/music-festival.jpg",
    },
    {
      title: "Food Carnival",
      date: "May 5, 2025",
      image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/food-festival-in-india.jpg",
    },
    {
      title: "Tech Conference",
      date: "June 15, 2025",
      image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_956796320_403451.jpg",
    },
  ];

  return React.createElement(
    "div",
    { id: "eventsCarousel", className: "carousel slide", "data-bs-ride": "carousel" },
    React.createElement(
      "div",
      { className: "carousel-inner" },
      events.map((event, index) =>
        React.createElement(
          "div",
          { key: index, className: `carousel-item ${index === 0 ? "active" : ""}` },
          React.createElement(
            "div",
            { className: "d-flex flex-column align-items-center" },
            React.createElement("img", {
              src: event.image,
              className: "d-block w-50 rounded",
              alt: event.title,
            }),
            React.createElement("h4", { className: "mt-3 text-center" }, event.title),
            React.createElement("p", { className: "text-muted" }, event.date)
          )
        )
      )
    ),

    // Previous Button
    React.createElement(
      "button",
      { className: "carousel-control-prev", type: "button", "data-bs-target": "#eventsCarousel", "data-bs-slide": "prev" },
      React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
      React.createElement("span", { className: "visually-hidden" }, "Previous")
    ),

    // Next Button
    React.createElement(
      "button",
      { className: "carousel-control-next", type: "button", "data-bs-target": "#eventsCarousel", "data-bs-slide": "next" },
      React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
      React.createElement("span", { className: "visually-hidden" }, "Next")
    )
  );
};

export default EventsCarousel;
