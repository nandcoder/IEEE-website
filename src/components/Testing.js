import React from "react";
import chair from "../assets/chair.jpg";
import vicechair from "../assets/vicechair.jpg";
import secretary from "../assets/secretary.jpg";
import webmaster from "../assets/webmaster.jpg";
import treasurer from "../assets/treasurer.jpg";
const practice = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div class="col-sm-6 col-lg-3 my-auto">
        <div class="box shadow-sm p-4">
          <div class="image-wrapper mb-3">
            <img class="img-fluid" src={chair} alt="..." />
          </div>
          <div class="box-desc">
            <h5>Nishant Kumar</h5>
            <p> Chairman</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 my-auto">
        <div class="box shadow-sm p-4">
          <div class="image-wrapper mb-3">
            <img class="img-fluid" src={vicechair} alt="..." />
          </div>
          <div class="box-desc">
            <h5> Mantosh Kumar</h5>
            <p>Vice Chairman </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 my-auto">
        <div class="box shadow-sm p-4">
          <div class="image-wrapper mb-3">
            <img class="img-fluid" src={treasurer} alt="..." />
          </div>
          <div class="box-desc">
            <h5>Rajesh Kumar</h5>
            <p> Treasurer</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 my-auto">
        <div class="box shadow-sm p-4">
          <div class="image-wrapper mb-3">
            <img class="img-fluid" src={secretary} alt="..." />
          </div>
          <div class="box-desc">
            <h5>Md Sazzad</h5>
            <p> Secretary </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3 my-auto">
        <div class="box shadow-sm p-4">
          <div class="image-wrapper mb-3">
            <img class="img-fluid" src={webmaster} alt="..." />
          </div>
          <div class="box-desc">
            <h5> Kumresh Pal</h5>
            <p> Webmaster </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default practice;
