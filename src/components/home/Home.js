import React from "react";
import Tours from "../tours/Tours.js";
import Footer from "../footer/Footer.js";
import "./Home.css";

function Home(props) {
  return (
    <div className="main-container">
      <div className="tours-container">
        <Tours data={props.data} />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
