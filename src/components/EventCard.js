import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  // const navigate = useNavigate();
  const [localDate, setLocalDate] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const eventDate = new Date(event.date);
    const formattedLocalDate = eventDate.toLocaleDateString();
    setLocalDate(formattedLocalDate);
  }, [event.date]);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleReadMore = () => {
    console.log("The event is: ", event);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "95%",
          backgroundColor: "#0A4771",
          color: "#F6F5F5",
          margin: "1em",
        }}
      >
        <div
          className={`flex ${isSmallScreen ? "flex-wrap" : ""} `}
          style={{
            backgroundColor: "#0A4771",
            color: "#F6F5F5",
            display: "flex",
            flexDirection: "row",
            padding: "1em",
            margin: "1em",
            marginBottom: "0",
            paddingBottom: "0",
            justifyContent: "space-between",
            maxHeight: "fit-content",
            maxWidth: "100%",
          }}
        >
          <div class="flex items-center mx-auto " style={{ minWidth: "30%" }}>
            <img
              src={event.images[0]}
              alt=""
              srcset=""
              style={{ margin: "auto", maxHeight: "15em" }}
            />{" "}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "none",
              padding: isSmallScreen ? "none" : "2em",
            }}
          >
            <div>
              {" "}
              <h2 style={{ fontSize: "20px" }}>{event.title}</h2>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                maxHeight: "40dvh",
                overflow: "hidden",
                width: "100%",
                fontSize: "16px",
              }}
            >
              <span
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxHeight: "100%",
                }}
                dangerouslySetInnerHTML={{ __html: event.body }}
              />
            </div>
            <div style={{ fontSize: "16px" }}>
              <div style={{ paddingTop: "5px", fontSize: "16px" }}>
                Author: {event.author}{" "}
              </div>
              <div style={{ fontSize: "16px" }}>Date: {localDate} </div>
              {/* <div>Date: {event.date} </div> */}

              {/* <div>{event.location} </div> */}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <Link
            to={`/events/event?id=${event._id}`}
            style={{ textDecoration: "none" }}
          >
            <button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4  flex items-center"
              style={{ borderRadius: "50px", margin: "1em 1em 1em 1em" }}
              onClick={handleReadMore}
            >
              Read more
              <i class="fa fa-arrow-right ml-2"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EventCard;
