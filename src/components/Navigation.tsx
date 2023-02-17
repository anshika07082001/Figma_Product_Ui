import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';

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
        <section>
            <div className="width row search">
                <div className="row">
                    <label>SALE</label>&nbsp;&nbsp;
                    <label>NEW IN</label>&nbsp;&nbsp;
                    <label>CLOTHING</label>&nbsp;&nbsp;
                    <label>SHOES</label>&nbsp;&nbsp;
                    <label>ACCESSORIES</label>&nbsp;&nbsp;
                    <label>BRANDS</label>
                </div>
                <div className="search__input">
                    <div className="row">
                        <SearchOutlinedIcon/>
                        <input/>
                        <KeyboardVoiceOutlinedIcon/>
                        <CenterFocusWeakOutlinedIcon/>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Navigation;
