import React from "react";
import Header from "../components/Header";
import Steps from "../components/Steps";
import BgSlider from "../components/BgSlider";
import Testimonails from "../components/Testimonails";
import Upload from "../components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonails />
      <Upload />
    </div>
  );
};

export default Home;
