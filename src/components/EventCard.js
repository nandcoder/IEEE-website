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
          margin: "2em",
        }}
      >
        <div
          className="grid grid-cols-4 gap-4"
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
            class="col-span-3 "
            style={{
              fontFamily: "'Inter', sans-serif",
              alignItems: "center",
              display: "flex",
              maxHeight: "100px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            aspernatur ea recusandae, voluptas quidem adipisci in nobis numquam
            sequi eveniet cumque tenetur ad delectus at. Aliquam fuga eius
            dignissimos autem excepturi minima perspiciatis repellendus vero
            adipisci magnam, in incidunt? Quisquam at suscipit nemo asperiores
            pariatur, reiciendis similique, aliquam enim non in accusamus
            officiis dolorem nisi cum quam dignissimos, repellendus vitae?
          </div>
          <div class="col-span-1 flex items-center ">
            <img src={Image} alt="" srcset="" style={{ margin: "auto" }} />{" "}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 my-4 flex items-center"
            style={{ borderRadius: "50px", margin: "4em" }}
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
