import { GiReceiveMoney } from "react-icons/gi";
import React from "react";
import Included from "./Included";
import "./PackageStyles.css";

const Accounts = () => {
  return (
    <Included
      wrapStyle="included_wrapper-r"
      icon={
        <GiReceiveMoney
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Accounts Receivable"
      children={
        <>
          <p className="included-text">
            Collection of Homeowner dues and any additional fees.
          </p>
        </>
      }
    />
  );
};

export default Accounts;
