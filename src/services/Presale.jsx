import { motion } from "framer-motion";
import React from "react";
// import MetaTags from "../../utils/MetaTags";
import jaiMaxBkp from "../assets/Images/presale.svg";
import IcoTimeline from "../assets/Images/icotimeline.svg";


const PreSale = () => {
  const pageTitle =
    "margin | margin trading";
  const pageDescription =
    "Meta description : margin trading";


  return (
    <div>
      {/* <MetaTags title={pageTitle} description={pageDescription} /> */}

      <div className="preSale container py-5">
      <h3 className="text-white mb-4">
      ICO Timeline{" "}
              </h3>

              <div className="row">
                <div className="col-md-6">
                <img
                  src={IcoTimeline}
                  alt="pre"
                  className="img-fluid p-3"
                 
                />
                </div>
                <div className="col-md-6 my-auto">
                <img
                  src={jaiMaxBkp}
                  alt="pre"
                  className="img-fluid p-5 mt-5 mt-lg-0 mt-md-0"
                 
                />
                </div>
              </div>
     
      </div>
 
    </div>
  );
};

export default PreSale;
