import React from "react";
import "./css/Features.css";
const Features = () => {
  return (
    <div className="p-6" id="contactus">
      <div className="p-2 section">
        <button className="text-sky-700 text-lg font-bold py-1 px-4 border-solid border-2 border-blue-700 rounded-3xl mb-4">
          FEATURED
        </button>
        <div className="flex bg-slate-100 p-4 border-solid border-2 border-slate-200 rounded-3xl">
          <div className="font-semibold text-justify text-lg p-2">
            inaugration of IEEE system council at DJLHC on teacher's. IEEE
            Electron device society was setup under the systems...
          </div>
          <img
            src="images/bulb1.png"
            alt="bulb1"
            className="max-h-40 min-w-fit"
          />
        </div>
      </div>
      <div className="md:m-32 midMargin"></div>
      <div className="p-2 section">
        <button className="text-sky-700 text-lg font-bold py-1 px-4 border-solid border-2 border-blue-700 rounded-3xl md:mb-4 sm:mb-2">
          VOLUNTEER WITH US
        </button>
        <div className="font-semibold text-justify text-lg  p-2" >
          Just shoot an email to{" "}
          <a href="mailto:ieee.nitjsr@gmail.com" className="text-sky-800">
            ieee.nitjsr@gmail.com
          </a>{" "}
          or message us in{" "}
          <a href="https://linkedin.com/" className="text-sky-800">
            Linkedin
          </a>{" "}
          and we will get back to you ASAP{" "}
        </div>
      </div>
    </div>
  );
};

export default Features;
