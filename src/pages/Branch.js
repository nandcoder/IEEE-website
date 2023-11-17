import React from "react";
import BranchCard from "../components/BranchCard";
function Branch() {
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
        <BranchCard />
        <BranchCard />
        <BranchCard />
        <BranchCard />
      </div>
    </>
  );
}

export default Branch;
