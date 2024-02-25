import React from "react";
import { GoArrowSwitch } from "react-icons/go";

const From_to = () => {
  return (
    <>
    
    <div className="div-from_to">
        <div className="div-from">
            <span>From</span>
      <select className="select-from">
        <option>C</option>
        <option>B</option>
        <option>A</option>
        <option>D</option>
      </select>
      </div>

      <button><GoArrowSwitch /></button>

      <div className="div-to">
      <span>To</span>

      <select id="select-to">
        <option>C</option>
        <option>B</option>
        <option>A</option>
        <option>D</option>
      </select>
      </div>
    </div>

    <div className="div-converter">
        <span>100 USD</span>
        <span>=</span>
        <span>1000 NGN</span>

    </div>
    </>
   
  );
};

export default From_to;
