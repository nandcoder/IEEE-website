import React from "react";
import logo from "../resources/logo.png";
import ieeeLogo from "../resources/ieee_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="head-wrapper">
        <img src={logo} alt="Logo" className="logo" />
        <div className="heading">
          <div className="text-2xl font-bold">
            IEEE Student Branch NIT Jamshedpur
          </div>
          <div style={{ marginTop: "-2%" }} className="text-lg font-medium">
            The professional home for the engineering <br></br> and technology
            community at NIT Jamshedpur
          </div>
        </div>
        <img src={ieeeLogo} alt="IEEE Logo" className="ieee-logo" />
      </div>
      <div className="container buttons">
        <button>
          <u style={{ textUnderlinePosition: "under" }}>About</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: "under" }}>Events</u>
        </button>
        <button>
          <u
            style={{ textUnderlinePosition: "under" }}
            onClick={() => {
              navigate("/branch");
            }}
          >
            Branch Chapters
          </u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: "under" }}>Resources</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: "under" }}>Membership</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: "under" }}>Contact Us</u>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Navbar;