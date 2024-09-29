import React, { useContext } from "react";
import data from "../data";
import { Globalcontext } from "../../context/Globalcontext";

function Genarator() {
  const { filteredData } = useContext(Globalcontext);
  return (
    <div>
      {/* if no data */}
      {filteredData.length ? (
        filteredData.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        <div className="text-red-500 nothingFound font-medium">
          Nothing found
        </div>
      )}
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
        {filteredData
          .filter((el) => el.categories === "Mobile Genarator")
          .map((el) => (
            <div className="">
              <div className="shadow-lg ">
                <p
                  key={el.id}
                  className="text-center p-3 text-[1.1em] font-semibold"
                >
                  {el.tittle}
                </p>
                <img className="h-[250px] w-[250px]" src={el.image} />
                <p className="p-4 font-medium ">Price : {el.price}k</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Genarator;
