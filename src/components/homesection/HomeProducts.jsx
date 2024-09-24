import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { duration } from "@mui/material";
import ServiceTemplate from "../../templates/ServiceTemplate";

function HomeProducts() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="h-[101vh] sm:h-[50vh] "
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-delay="300"
    >
      <p className="text-[#FFC000] text-center my-5 text-[15px]">
        Our Services
      </p>
      <h2 className="font-900 text-[25px] stroke-black stroke-[20px] mb-12 text-center">
        Sustainable Energy
      </h2>

      <div className="block sm:flex justify-around">
        <ServiceTemplate
          img="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/8551443/1.jpg?3740"
          title="Solar Genarator"
          uses="Yes, most solar generators today are designed with portability in mind. That’s because lithium-ion batteries are lighter and smaller than traditional deep-cycle batteries. More so, they come with handles with which you can carry the generator around with ease. However, solar generators can weigh up to 10 pounds, and they get heavier as the capacity increases"
        />
        <ServiceTemplate
          img="https://arka360.com/ros/content/images/2023/05/pasted-image-0--11---1--compressed.jpg"
          title="Solar Installation"
          uses="to connect several devices to build a solar power system generating energy from the sun. The sun's light energy is then converted into electricity, which is used for domestic and industrial activities. Solar power has a relatively simple operating principle"
        />
        <ServiceTemplate
          img="https://5.imimg.com/data5/YX/JH/MY-6617772/solar-panel-maintenance-service-250x250.jpg"
          title="Solar Maintenance"
          uses="As a proactive measure, panel management ensures that all of your patients are current on their basic preventive care such as screenings and immunizations. Your clinical staff can identify and reach out to patients who may not have an upcoming appointment to ensure they are receiving the care they need"
        />
      </div>
    </div>
  );
}

export default HomeProducts;
