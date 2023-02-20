import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="container width">
      {/* header section */}
      <header>
        <Navbar />
      </header>
      {/* body section */}
      <main>
        <Body />
      </main>
      {/* footer section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
