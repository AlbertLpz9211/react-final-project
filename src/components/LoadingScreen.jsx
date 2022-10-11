import React from "react";
import "../styles/loading-screen.css";

const LodaingScreen = () => {
  return (
    <div className="overloaded">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LodaingScreen;
