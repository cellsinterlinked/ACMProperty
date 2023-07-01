import React from "react";
import Included from "./Included";
import "./PackageStyles.css";
import { FaFileContract } from "react-icons/fa";

const LeaseRenewal = () => {
  return (
    <Included
      wrapStyle="included_wrapper-l"
      icon={
        <FaFileContract
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Lease Renewal"
      children={
        <>
          <p className="included-text">
            Tenants will be afforded the flexibility of a streamlined e-leasing
            process, from the renewal offer to lease signing.
          </p>
        </>
      }
    />
  );
};

export default LeaseRenewal;
