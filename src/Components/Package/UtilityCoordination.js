import React from "react";
import "./PackageStyles.css";
import Included from "./Included";
import { RiWaterFlashLine } from "react-icons/ri";

const UtilityCoordination = () => {
  return (
    <Included
      wrapStyle="included_wrapper-l"
      icon={
        <RiWaterFlashLine
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Utility Coordination"
      children={
        <>
          <p className="included-text">
            Vendor and utility bills are sent directly to ACM Property
            Management, where they are recorded digitally. Expenses are
            allocated per property, and bills are paid with rental income or a
            reserve accound.
          </p>
        </>
      }
    />
  );
};

export default UtilityCoordination;
