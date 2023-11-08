import React from "react";
import Image from "../assets/stark6.jpg";
function EventCard() {
  return (
    <>
      <div
        className="grid grid-cols-4 gap-4"
        style={{
          width: "90%",
          backgroundColor: "#0A4771",
          color: "#F6F5F5",
          display: "flex",
          flexDirection: "row",
          padding: "2em",
          margin: "2em",
        }}
      >
        <div class="col-span-3 " style={{ fontFamily: "'Inter', sans-serif" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          aspernatur ea recusandae, voluptas quidem adipisci in nobis numquam
          sequi eveniet cumque tenetur ad delectus at. Aliquam fuga eius
          dignissimos autem excepturi minima perspiciatis repellendus vero
          adipisci magnam, in incidunt? Quisquam at suscipit nemo asperiores
          pariatur, reiciendis similique, aliquam enim non in accusamus officiis
          dolorem nisi cum quam dignissimos, repellendus vitae?
        </div>
        <div class="col-span-1 flex items-center ">
          <img src={Image} alt="" srcset="" style={{ margin: "auto" }} />{" "}
        </div>
      </div>
    </>
  );
}

export default EventCard;
