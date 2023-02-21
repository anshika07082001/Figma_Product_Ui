import React from "react";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type sliderprops = {
  crousel1: string[];
  heading: string;
};

const SliderComp = (props: sliderprops) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="width">
      <div className="crousel__content column">
        <h3 className="crousel__heading">{props.heading}</h3>
        <Slider {...settings}>
          {props.crousel1.map((item) => {
            return (
              <div className="crousel__block column">
                <img src={item} alt="" />
                <div className="like__block">
                  <FavoriteBorderIcon />
                </div>
                <div className="offer__block">
                  <label className="offer__block__content fs9">-42% OFF</label>
                </div>
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
        </Slider>
      </div>
    </section>
  );
};

export default SliderComp;
