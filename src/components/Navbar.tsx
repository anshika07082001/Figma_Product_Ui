import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";

const Navbar = () => {
  return (
    <>
      <div className="header__block">
        {/* header heading */}
        <section className="header__heading fs12 align width">
          <label>20% Off! Code: SPRING21 - Terms apply*</label>
        </section>
        {/* header top */}
        <section className="header__top width">
          <div className="header__top__inner">
            <div className="row navbar__logo align">
              <div className="row">
                <img
                  src="Subtract.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <div className="column logo__content">
                  <span className="fW">Spencer&Williams</span>
                  <label>FASHION</label>
                </div>
              </div>
              <div className="header__top__icons align row">
                <div className="row icons__left">
                  <div className="icons--align align row">
                    <HeadsetMicIcon fontSize="small" />
                    <label className="fs12">Support</label>
                  </div>
                  <div className="icons--align row">
                    <PinDropIcon fontSize="small" />
                    <label className="fs12">Find a Store</label>
                  </div>
                </div>
                <div className="row icons--align">
                  <FavoriteBorderIcon fontSize="small" />
                  <PersonIcon fontSize="small" />
                  <ShoppingBagOutlinedIcon fontSize="small" />
                </div>
              </div>
            </div>
            <div className="row navbar__options">
              <label className="fW fs14">WOMEN</label>
              <label className="fs14">MEN</label>
              <label className="fs14">KIDS</label>
            </div>
            <hr />
            <div className="row search__options align ">
              <div className="row search__headings">
                <label className="fs12">SALE</label>
                <label className="fs12">NEW IN</label>
                <label className="fs12">CLOTHING</label>
                <label className="fs12">SHOES</label>
                <label className="fs12">ACCESSORIES</label>
                <label className="fs12">BRANDS</label>
              </div>
              <div className="search">
                <div className="row search__icons align">
                  <SearchOutlinedIcon fontSize="small" />
                  <input
                    placeholder="Search Products, Articles"
                    className="search__input fs12"
                  />
                  <KeyboardVoiceOutlinedIcon fontSize="small" />
                  <label>|</label>
                  <CenterFocusWeakOutlinedIcon fontSize="small" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* header bottom */}
        <section className="header__bottom width">
          <div className="banner__img pr">
            <h1 className="banner__content">NEW</h1>
            <h1 className="banner__content banner--collection">COLLECTION</h1>
            <h6 className="banner__content banner--2021">SPRING/SUMMER2021</h6>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
