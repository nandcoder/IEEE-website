import React from "react";
import Img1 from "../assets/manager.jpg";
function TeamCard({ name, pos }) {
  return (
    <>
      <div
        className="card  bg-base-100 shadow-xl mx-2 my-2 px-4 py-4"
        style={{ maxWidth: "40%" }}
      >
        <div className="mx-2 my-2">
          <img
            src={Img1}
            alt="Shoes"
            style={{ borderRadius: "100%", height: "1em", width: "12em" }}
          />
        </div>
        <div className="card-body" style={{ height: "8em" }}>
          <h2
            className="card-title flex items-center justify-center "
            style={{ textAlign: "center" }}
          >
            {name}
          </h2>

          <div
            className="card-actions  flex items-center justify-center"
            style={{ textAlign: "center" }}
          >
            {pos}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
