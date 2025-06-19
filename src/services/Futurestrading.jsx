import { motion } from "framer-motion";
import React from "react";
// import MetaTags from "../../utils/MetaTags";
import jaiMaxBkp from "../assets/Images/jmaxbackgroundlogo.svg";


const FuturesTrading = () => {
  const pageTitle =
    "margin | margin trading";
  const pageDescription =
    "Meta description : margin trading";


  return (
    <div>
      {/* <MetaTags title={pageTitle} description={pageDescription} /> */}

      <div className="overview container comingSoon">
        <div className="text-center py-5">
          <img src={jaiMaxBkp} className="img-fluid"/>
          <h1 className="pt-3 m-0">Coming Soon</h1>
        </div>
     
      </div>
 
    </div>
  );
};

export default FuturesTrading;
