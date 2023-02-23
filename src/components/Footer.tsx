import React from "react";

const Footer = () => {
  const arr = ["FOOTER1", "FOOTER2", "FOOTER3", "FOOTER4", "FOOTER5"];
  return (
    <>
      {/* footer top */}
      <section className="footer__top">
        <div className=" footer__top__inner">
          {arr.map((item) => {
            return (
              <div className="column footer__columns">
                <label className="footer__contHeading">{item}</label>
                <label className="footer__content">Item</label>
                <label className="footer__content">Item</label>
                <label className="footer__content">Item</label>
              </div>
            );
          })}
        </div>
      </section>
      {/* footer bottom */}
      <section>
        <div className="footer__bottom">
          <div className="footer__img">
            <img src="foot.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
