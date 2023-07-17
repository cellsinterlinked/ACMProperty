import { IoDocumentTextSharp } from "react-icons/io5";
import React from "react";
import Included from "./Included";
import "./PackageStyles.css";

const Vendor = () => {
  return (
    <Included
      wrapStyle="included_wrapper-r"
      icon={
        <IoDocumentTextSharp
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Vendor Contract Management"
      children={
        <>
          <p className="included-text">
            Management of existing and future vendor contracts, examples of this
            include pool maintenance, landscaping companies, and trash services.
          </p>
        </>
      }
    />
  );
};

export default Vendor;
