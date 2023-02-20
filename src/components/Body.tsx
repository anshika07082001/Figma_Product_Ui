import React from "react";
import SliderComp from "./SliderComp";
import { crousel1 } from "./Images";
import Slider2021Comp from "./Slider2021Comp";
import Banner from "./Banner";

const Body = () => {
  return (
    <>
      <SliderComp crousel1={crousel1} heading="TRENDING NOW" />
      <Slider2021Comp />
      <SliderComp crousel1={crousel1} heading="RECOMMENDED FOR YOU" />
      <Banner />
      <SliderComp crousel1={crousel1} heading="NEW IN... ACCESORIES" />
    </>
  );
};

export default Body;
