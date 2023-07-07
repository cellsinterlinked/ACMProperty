import { BsTools } from "react-icons/bs";
import React from "react";
import Included from "./Included";
import "./PackageStyles.css";

const MaintenanceManagement = () => {
  return (
    <Included
      wrapStyle="included_wrapper-l"
      icon={
        <BsTools
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Maintenance Management"
      children={
        <>
          <p className="included-text">
            Maintenance management includes coordination with residents, board
            members, and vendors. Residents and Board members can report any
            maintenance issues through their portal. ACM will then vet the
            request and coordinate with the preferred vendors or ACM-selected
            vendors.
          </p>
        </>
      }
    />
  );
};

export default MaintenanceManagement;
