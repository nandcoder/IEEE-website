import React from "react";
import Image from "../assets/krishna2.jpg";
function EventCard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          backgroundColor: "#0A4771",
          color: "#F6F5F5",
          // display: "flex",
          margin: "2em",
        }}
      >
        <div
          className="grid grid-cols-6 gap-2 "
          style={{
            backgroundColor: "#0A4771",
            color: "#F6F5F5",
            display: "flex",
            flexDirection: "row",
            padding: "2em",
            margin: "2em",
            marginBottom: "0",
            paddingBottom: "0",
          }}
        >
          <div
            className="col-span-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              alignItems: "center",
              display: "-webkit-box",
              maxHeight: "calc(1.2em * 5)", // Adjust the line height and number of lines
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal", // Use 'normal' instead of 'wrap'
              WebkitLineClamp: 5, // Specify the number of lines
              width: "100%",
            }}
          >
            {/* Your text content */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            aspernatur ea recusandae, voluptas quidem adipisci in nobis numquam
            sequi eveniet cumque tenetur ad delectus at. Aliquam fuga eius
            dignissimos autem excepturi minima perspiciatis repellendus vero
            adipisci magnam, in incidunt? Quisquam at suscipit nemo asperiores
          </div>

          <div class="col-span-2 flex items-center ">
            <img
              src={Image}
              alt=""
              srcset=""
              style={{ height: "20vh", width: "100%" }}
            />{" "}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "right" }}>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4  flex items-center"
            style={{ borderRadius: "50px", margin: "1em 3em 1em 1em" }}
          >
            Update
            <i class="fa fa-arrow-right ml-2"></i>
          </button>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4  flex items-center"
            style={{ borderRadius: "50px", margin: "1em 3em 1em 1em" }}
          >
            Delete
            <i class="fa fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default EventCard;
