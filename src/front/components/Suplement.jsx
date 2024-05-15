import React from "react";
import suplementimport from "../images/suplemento.png";
import { Link } from "react-router-dom";

export default function Suplement() {
  return (
    <div className="suplement-section">
      <div className="left-suplement">
        <div className="suplement-description">
          <h1>Our Suplements</h1>
          <p>
            asdsadasdasdasd asd asdas dasd as dasd as dasda das das asdas asd
            asd asd asd as das d asd as das dasd asd as ad asd asd ad a sdasdas
            das dasdasd asd as d asd asd asd asd asdas asdsadasdasdasd.
          </p>
          <Link to="/">
            <button>See More!</button>
          </Link>
        </div>
      </div>
      <div className="right-suplement">
        <img src={suplementimport} alt="suplement" className="suplement-img" />
      </div>
    </div>
  );
}
