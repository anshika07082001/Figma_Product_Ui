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
    responsive: [
      {
        breakpoint: 1077,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  };

  return (
    <section className="width">
      <div className="crousel__content column">
        <h3 className="crousel__heading">{props.heading}</h3>
        <Slider {...settings}>
          {props.crousel1.map((item) => {
            return (
              <div className="crousel__block column">
                <img src={item} alt="" className="pr" />
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
