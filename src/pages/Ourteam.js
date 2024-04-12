import React from "react";
import TeamCard from "../components/TeamCard";
const Ourteam = () => {
  return (
    <>
      <div style={{ width: "100dvw", margin: "auto" }}>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "750",
          }}
        >
          OUR TEAM
        </div>
        <div className="flex items-center justify-center flex-wrap ">
          {" "}
          <TeamCard name="Nishant Kumar" pos="Chairperson" />
          <TeamCard name="Mantosh Kumar" pos="Vice - Chairperson" />
          <TeamCard name="Rajesh Kumar" pos="Treasurer" />
          <TeamCard name="Md Sazzad" pos="Secretary" />
          <TeamCard name="Kumaresh Pal" pos="Webmaster" />
          <TeamCard name="Abhinav Kumar" pos="Volunteer" />
          <TeamCard name="Himanshu" pos="Volunteer" />
        </div>
      </div>
    </>
  );
};

export default Ourteam;
