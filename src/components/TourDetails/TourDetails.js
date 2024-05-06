import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import './TourDetails.css';
const data= require('../../data/db.json');

function TourDetails() {
  let {id} = useParams();
  const [tour, setTour] = useState(null);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const foundTour = data.find(tour => tour.id === id);
    setTour(foundTour);
  }, [id]);

  return (
    <>
      {tour && (
        <div key={tour.id}>
          <h2 className="tour-name">{tour.name}</h2>
          <img className="tour-image" src={tour.image} alt={tour.name} />
          <p className="tour-price">Price: {tour.price}</p> 
          <div>
            {readMore ? (
              <>
                <p>{tour.info}</p>
                <button className="show-button" onClick={() => setReadMore(false)}>Show less</button>
              </>
            ) : (
              <>
                <p>{tour.info.substring(0, 200)}</p>
                <button className="show-button" onClick={() => setReadMore(true)}>Show more</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TourDetails;
