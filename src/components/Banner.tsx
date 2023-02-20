import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Banner = () => {
  return (
    <section className="width">
      <div className="banner">
        <div className="banner__bottom">
          <div className="banner__inner column">
            <label className="banner--content">It’s all about you</label>
            <label className="banner--para">
              Try now, pay later. We want that you’re really confident and happy
              with your purchase - you have 30 days before we charge you! Learn
              more about our policy.
            </label>
            <div className="banner__arrowIcon">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <div className="banner__top"></div>
      </div>
    </section>
  );
};

export default Banner;
