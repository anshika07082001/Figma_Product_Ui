import React from "react";
import { images } from "./Images";
import StarIcon from "@mui/icons-material/Star";

const Slider2021Comp = () => {
  return (
    <section className="width">
      <div className="crousel__content column">
        <h3 className="crousel__heading">SPRING/SUMMER 2021</h3>
        <div className="row" style={{ gap: "30px" }}>
          {images.map((item) => {
            return (
              <div className="crousel__block crousel--position column">
                <img src={item} alt="" />
                <p className="crousel--brand">BRAND/TYPE</p>
                <p className="crousel--title">Name and Characteristics</p>
                <p className="row" style={{ gap: "10px" }}>
                  <span className="crousel--price">74,95 €</span>
                  <span className="crousel--cutPrice">121,00 €</span>
                </p>
                <p>
                  <span>
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                  </span>
                  <span className="crousel--ratingpoint">(45)</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider2021Comp;
