import React from "react";
import EventCard from "../components/EventCard";
import arrow from "../assets/icons8-arrow-24.png";
function Events() {
  return (
    <>
      <div
        style={{
          width: "85vw",
          minHeight: "100vh",
          backgroundColor: "#166499",
          margin: "auto",
          marginTop: "5em",
          marginBottom: "5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#F6F5F5",
            fontSize: "3em",
            font: "Inter",
            fontWeight: "600",
            position: "relative",
            margin: "2%",
            height: "auto",
            top: "2%",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          EVENTS
        </div>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <div>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-4 flex items-center"
            style={{ borderRadius: "50px" }}
          >
            See more
            <i class="fa fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Events;
