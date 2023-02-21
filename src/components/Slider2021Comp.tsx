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
                <p className="crousel--brand fs9">BRAND/TYPE</p>
                <p className="crousel--title fs12">Name and Characteristics</p>
                <p className="row align" style={{ gap: "10px" }}>
                  <span className="crousel--price fs14">74,95 €</span>
                  <span className="crousel--cutPrice fs12">121,00 €</span>
                </p>
                <p className="row align">
                  <span>
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                    <StarIcon className="star__fontsize" />
                  </span>
                  <span className="crousel--ratingpoint fs9">(45)</span>
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
