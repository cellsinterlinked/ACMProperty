import React from "react";
import "./PackageStyles.css";
import Included from "./Included";
import { BsHouseDashFill } from "react-icons/bs";

const VacancyListing = () => {
  return (
    <Included
      wrapStyle="included_wrapper-r"
      icon={
        <BsHouseDashFill
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Vacancy Listing"
      children={
        <>
          <p className="included-text">
            Vacancy listings are syndicated to severn external listing websites,
            such as apartments.com, Zillow, and more! Other marketing tactics
            such as social media, yard signs, and Craigslist.com are also
            utilized to fill vacancy listings.
          </p>
        </>
      }
    />
  );
};

export default VacancyListing;
