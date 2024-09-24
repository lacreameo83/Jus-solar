import React from "react";
import SimpleSlider from "../components/homesection/Home";
import HomeProducts from "../components/homesection/HomeProducts";
import UsesOfSolarPanel from "../components/homesection/UsesOfSolarPanel";

function HomePage() {
  return (
    <div>
      <SimpleSlider />
      <HomeProducts />

      <div className="hidden  lg:block">
        <UsesOfSolarPanel />
      </div>
    </div>
  );
}

export default HomePage;
