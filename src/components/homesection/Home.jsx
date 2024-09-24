import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="h-[80vh] bg-slate-600 sliderOutput-1">
          <div className="h-[80vh] flex flex-col justify-center items-center gap-3 ">
            <h2 className="text-[25px] HomeRenewed sm:text-[50px]">
              Renewable Solar Solution
            </h2>
            <Link to="/catalogue">
              <Button variant="contained" style={{ background: "#FFC000" }}>
                shop Now
              </Button>
            </Link>

            <Button variant="contained">
              <a href="https://wa.me/2349032351284">
                <WhatsAppIcon />
              </a>
            </Button>
          </div>
          {/* second slider */}
        </div>
        <div className="h-[80vh] bg-slate-600 sliderOutput-2">
          <div className="h-[80vh] flex flex-col justify-center items-center gap-3 ">
            <h2 className="text-[20px] HomeRenewed sm:text-[50px] ">
              Renewable Solar Solution
            </h2>
            <Link to="/catalogue">
              <Button variant="contained" style={{ background: "#FFC000" }}>
                shop Now
              </Button>
            </Link>

            <Button variant="contained">
              <a href="https://wa.me/2349032351284">
                <WhatsAppIcon />
              </a>
            </Button>
           
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
