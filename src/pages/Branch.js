import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import BranchCard from "../components/BranchCard";
function Branch() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://ieee-1vzv.onrender.com/api/events"
        );
        //console.log("All crimes are => ", response.data.result);
        setEvent(response.data.events);
        console.log("Successfully fetched ", response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          textAlign: "center",
          margin: "1em 1em",
        }}
      >
        Admin Dashboard
      </div>
      <div
        style={{
          width: "85vw",
          minHeight: "100vh",
          backgroundColor: "#166499",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          paddingTop: "2em",
          marginBottom: "4em",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div class="flex relative">
            <input
              type="text"
              class="border rounded-l-lg p-2 flex-shrink-0"
              style={{
                borderRadius: "50px",
                margin: "1em 3em 1em 1em",
                height: "2em",
              }}
            />
            <button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4  flex items-center"
              style={{ borderRadius: "50px", margin: "1em 3em 1em 1em" }}
            >
              Search
            </button>
          </div>
          <button
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4  flex items-center"
            style={{ borderRadius: "50px", margin: "1em 3em 1em 1em" }}
          >
            Create
            <i class="fa fa-plus-circle ml-2"></i>
          </button>
        </div>
        {event.map((event, index) => (
          <BranchCard key={index} event={event} />
        ))}

      </div>
    </>
  );
}

export default Branch;
