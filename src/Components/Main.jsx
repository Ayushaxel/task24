import React from "react";

import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDIv";



const Main = () => {

  return (
    <div className="main">

    <div className="left">
      <LeftDiv />
    </div>

    <div className="right">
    <RightDiv/>
    </div>

     
    </div>
  );
};

export default Main;