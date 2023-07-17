import React from "react";
import "./PackageStyles.css";
import Included from "./Included";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

const MoveInspections = () => {
  return (
    <Included
      wrapStyle="included_wrapper-l"
      icon={
        <HiMagnifyingGlassCircle
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Move-In & Move-Out Inspections"
      children={
        <>
          <p className="included-text">
            Detailed move-in and move-out inspections are completed to capture
            the property's condition before and after tenant occumancy.
            Inspections thoroughly examine every aspect of the home, ranging
            from the exterior siding to the baseboards in bedrooms. You can
            expect to find pertinent comments, the condition , and photos with
            each report.
          </p>
        </>
      }
    />
  );
};

export default MoveInspections;
