import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PreviewCard({ event }) {
  // const navigate = useNavigate();
  const [localDate, setLocalDate] = useState("");

  useEffect(() => {
    const eventDate = new Date(event.date);
    const formattedLocalDate = eventDate.toLocaleDateString();
    setLocalDate(formattedLocalDate);
  }, [event.date]);

  const handleReadMore = () => {
    console.log("The event is: ", event);
    console.log("Local date is: ", localDate);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          backgroundColor: "whitesmoke",
          color: "#F6F5F5",
          margin: "1em",
        }}
      >
        <img
          src={event.images[0]}
          alt=""
          srcset=""
          style={{ maxHeight: "100%" }}
        />{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "none",
            maxWidth: "100%",
          }}
        >
          <div
            className="col-span-3"
            style={{
              padding: 15,
              color: "black",
              alignItems: "center",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              maxHeight: "100%", // Adjust the max height based on your needs
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap", // Use nowrap to prevent line breaks
              width: "100%",
            }}
          >
            {event.summary}
          </div>
        </div>
        <div class="flex items-center "></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to={`/events/event?id=${event._id}`}
            style={{ textDecoration: "none" }}
          >
            <button
              className=" hover:bg-sky-600   cursor-pointer bg-sky-700 text-slate-100 w-40 h-8 rounded-md mt-1 flex justify-center items-center  "
              style={{
                borderRadius: "17px",
                margin: "1em 3em 1em 1em",
                display: "flex",
              }}
              onClick={handleReadMore}
            >
              <div className="flex font-light">Read more</div>
            </button>

            {/* <button
              className="cursor-pointer bg-sky-700 text-slate-100 w-40 h-8 rounded-md mt-1 flex justify-center items-center"
              style={{
                borderRadius: "17px",
                margin: "1em 3em 1em 1em",
              }}
            >
              <div className="flex font-light">Read More</div>
            </button> */}
          </Link>
        </div>
      </div>
    </>
  );
}

export default PreviewCard;
