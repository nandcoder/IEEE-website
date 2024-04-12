import React from "react";
import Img1 from "../assets/manager.png";
function TeamCard({ name, pos }) {
  return (
    <>
      <div
        className="card  bg-base-100 shadow-xl mx-2 my-2"
        style={{ maxWidth: "40%" }}
      >
        <figure>
          <img src={Img1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-center justify-center ">
            {name}
          </h2>

          <div
            className="card-actions  flex items-center justify-center"
            style={{ fontSize: "1.5em" }}
          >
            {pos}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
