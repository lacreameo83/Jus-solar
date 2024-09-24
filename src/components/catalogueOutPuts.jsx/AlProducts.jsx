import React, { useState } from "react";
import data from "../data";
import { Button } from "@mui/material";
import Inverter from "./Inverter";

function AlProducts() {
  return (
    <div className="grid grid-cols-2  h-fit gap-5 sm:grid-cols-4">
      <div className="shadow-lg w-[20vw] h-[50vh] relative group">
        <div>
          {data
            .filter((el) => el.id === 5)
            .map((el) => (
              <div>
                <h2 className="py-3 text-center font-medium text-[18px]">
                  Inverter
                </h2>

                <img className="h-[250px]" src={el.image} />
              </div>
            ))}
        </div>

        <div className="absolute ml-2  font-medium bottom-2  opacity-0 group-hover:opacity-100  transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
      {/* 2 */}
      <div className="shadow-lg w-[20vw] h-[50vh] relative group">
        {data
          .filter((el) => el.id === 10)
          .map((el) => (
            <div>
              <h2 className="py-3 text-center font-medium text-[18px]">MTTP</h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
      {/* 3 */}
      <div className="shadow-lg w-[20vw] h-[50vh] relative group">
        {data
          .filter((el) => el.id === 14)
          .map((el) => (
            <div>
              <h2 className="py-3 text-center font-medium text-[18px]">
                CCTV Solar Camera
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
      {/* 4 */}
      <div className="shadow-lg w-[20vw] h-[50vh] relative group">
        {data
          .filter((el) => el.id === 18)
          .map((el) => (
            <div>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Solar Powered Fan
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2  font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
      {/* 5 */}
      <div className="shadow-lg h-[50vh] w-[20vw] relative group">
        {data
          .filter((el) => el.id === 22)
          .map((el) => (
            <div>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Mobile Genaratior
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
      {/* 6 */}
      <div className="shadow-lg h-[50vh] w-[20vw] relative group">
        {data
          .filter((el) => el.id === 25)
          .map((el) => (
            <div>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Batterie
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
      <div className="shadow-lg h-[50vh] w-[20vw] relative group">
        {data
          .filter((el) => el.id === 20)
          .map((el) => (
            <div>
              <h2 className="py-3 text-center font-medium text-[18px]">
                Solar Sreet Light
              </h2>

              <img className="h-[250px]" src={el.image} />
            </div>
          ))}
        <div className="absolute ml-2   font-medium bottom-2  opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Button variant="contained" color="success">
            View products
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AlProducts;
