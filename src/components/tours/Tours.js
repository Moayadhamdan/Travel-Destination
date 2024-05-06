import React from "react";
import { Link } from "react-router-dom";
import Tour from "./tour/Tour";
import "./Tours.css";

function Tours(props) {
  return (
    <>
      {props.data.map((tour) => {
        return (
          <div key={tour.id}>
            <Link to={`/city/${tour.id}`}>
              <Tour name={tour.name} image={tour.image} />
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Tours;
