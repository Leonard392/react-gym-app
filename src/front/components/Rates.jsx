import React from "react";
import persona1 from "../images/persona1.jpg";
import persona2 from "../images/persona2.jpg";
import persona3 from "../images/persona3.webp";

export default function Rates() {
  return (
    <div id="rates">
      <h1>Rates</h1>
      <div className="rates">
        <div className="card">
          <img src={persona1} alt="person" className="card-img" />
          <h2 className="card-name">John Doe</h2>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="card-description">
            asdasd sad asd as das d asd as d a das d asdd a as das d asd asd
            dsadsadsadasd as dasdasdasdasdasdas asdasdasdasdasdasdasd
          </p>
        </div>
        <div className="card">
          <img src={persona2} alt="person" className="card-img" />
          <h2 className="card-name">Jane Doe</h2>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="card-description">
            asdasd sad asd as das d asd as d a das d asdd a as das d asd asd
            dsadsadsadasd as dasdasdasdasdasdas asdasdasdasdasdasdasd
          </p>
        </div>
        <div className="card">
          <img src={persona3} alt="person" className="card-img" />
          <h2 className="card-name">Mark Doe</h2>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <p className="card-description">
            asdasd sad asd as das d asd as d a das d asdd a as das d asd asd
            dsadsadsadasd as dasdasdasdasdasdas asdasdasdasdasdasdasd
          </p>
        </div>
      </div>
    </div>
  );
}
