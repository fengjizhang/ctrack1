import React, { useState } from 'react';

const CustomPanel = () => {

  const [objectSelected, changeSelection] = useState("ISS");

  return (
    <div className="FirstOption">

      <p>Value Selected: {objectSelected}</p>
      <select defaultValue={"ISS"}>
        <option value="none" onClick={() => {changeSelection("none")}}>Choose object</option>
        <option value="ISS"  onClick={() => {changeSelection("ISS")}} >International Space Station</option>
        <option value="Airplanes" >Airplanes</option>
        <option value="Ships" >Ships</option>
        <option value="Others" >Others...N/A</option>
      </select>





    </div>
  );
}

export default CustomPanel;
