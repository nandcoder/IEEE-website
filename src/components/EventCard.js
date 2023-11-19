import React from "react";
import Image from "../assets/krishna2.jpg";
function EventCard({ event }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          backgroundColor: "#0A4771",
          color: "#F6F5F5",
          margin: "2em",
        }}
      >



        
        <div
          className="grid grid-cols-4 gap-2"
          style={{
            backgroundColor: "#0A4771",
            color: "#F6F5F5",
            display: "flex",
            flexDirection: "row",
            padding: "2em",
            margin: "2em",
            marginBottom: "0",
            paddingBottom: "0",
            justifyContent: "space-between",
            maxHeight: "15em",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "none",
              maxWidth: "80%",
            }}
          >
            <div>
              {" "}
              <h2>{event.title}</h2>
            </div>
            <div
              className="col-span-3"
              style={{
                alignItems: "center",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                maxHeight: "100%", // Adjust the max height based on your needs
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "wrap", // Use nowrap to prevent line breaks
                width: "80%",
              }}
            >
              <span dangerouslySetInnerHTML={{ __html: event.body }} />
            </div>
            <div>
              <div style={{ paddingTop: "5px" }}>Author: {event.author} </div>
              <div>Date: {event.date} </div>
            </div>
          </div>
          <div class="col-span-1 flex items-center ">
            <img
              src={event.images[0]}
              alt=""
              srcset=""
              style={{ margin: "auto", maxHeight: "150px" }}
            />{" "}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4  flex items-center"
            style={{ borderRadius: "50px", margin: "1em 3em 1em 1em" }}
          >
            Read more
            <i class="fa fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
