import { RiComputerLine } from "react-icons/ri";
import React from "react";
import Included from "./Included";
import "./PackageStyles.css";

const Portal = () => {
  return (
    <Included
      wrapStyle="included_wrapper-l"
      icon={
        <RiComputerLine
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Resident/ Board Member Portals"
      children={
        <>
          <p className="included-text">
            Residents and board members will have access to top-of-the-line
            property management software solutions. Residents can make requests,
            payments, view the resident directory, participate in community
            discussion boards, and view pertinent documents. Board members will
            have access to automated financial reporting, violations, and so
            much more.
          </p>
        </>
      }
    />
  );
};

export default Portal;
