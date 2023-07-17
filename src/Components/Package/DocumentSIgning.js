import { RiComputerLine } from "react-icons/ri";
import React from "react";
import Included from "./Included";
import "./PackageStyles.css";

const DocumentSigning = () => {
  return (
    <Included
      wrapStyle="included_wrapper-r"
      icon={
        <RiComputerLine
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="E-Document Signing"
      children={
        <>
          <p className="included-text">
            You no longer need to meet in person to sign any documents.
            Everything is automated and quickly done from your computer, phone
            or tablet.
          </p>
        </>
      }
    />
  );
};

export default DocumentSigning;
