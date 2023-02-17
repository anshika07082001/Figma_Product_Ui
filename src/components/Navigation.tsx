import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Navigation = () => {
  return (
    <>
      <div className="navContainer">
        <section>
          <div className="navContainer__comment">
            <label>20% Off! Code: SPRING21 - Terms apply*</label>
          </div>
        </section>
        <section>
          <div className="row navbar">
            <div className="row">
              <img src="Subtract.png" alt="" />
              <div className="column navbar__logo">
                <span className="fW">Spencer&Williams</span>
                <label>FASHION</label>
              </div>
            </div>
            <div className="row aligncenter">
              <span>
                <HeadsetMicIcon fontSize="small" />
                <label>Support</label>
              </span>
              <span>
                <PinDropIcon fontSize="small" />
                <label>Find a Store</label>
              </span>
            </div>
            <div className="row">
              <FavoriteBorderIcon fontSize="small" />
              <PersonIcon fontSize="small" />
              <ShoppingBagOutlinedIcon fontSize="small" />
              {/* <i className="fa fa-heart"></i> */}
              {/* <i className='fas fa-user-alt'></i> */}
              {/* <i className="fa fa-shopping-bag"></i> */}
            </div>
          </div>
          <div className="row navbar__options width">
            <p>
              <label className="fW">WOMEN</label>&nbsp;&nbsp;&nbsp;
              <label>MEN</label>&nbsp;&nbsp;&nbsp;
              <label>KIDS</label>
            </p>
          </div>
          <hr className="width" />
        </section>
        <section></section>
      </div>
    </>
  );
};

export default Navigation;
