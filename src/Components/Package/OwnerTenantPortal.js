import React from "react";
import "./PackageStyles.css";
import Included from "./Included";
import { RiListSettingsFill } from "react-icons/ri";

const OwnerTenantPortal = () => {
  return (
    <Included
      wrapStyle="included_wrapper-r"
      icon={
        <RiListSettingsFill
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Owner/Tenant Portals"
      children={
        <>
          <p className="included-text">
            {/* Tenants and rental owners can access feature-rich software through
            their portals. */}
          </p>
          <p>
            Tenants can conveniently make maintenance requests, pay rent, view
            announcements and documents, subscribe to rent reporting, purchase
            renter's insurance, and access payment history.
          </p>
          <p>
            Rental owners enjoy comprehensive property management features
            including financial reporting, rental owner ledger, document
            management, request tracking, and various reporting capabilities.
          </p>
        </>
      }
    />
  );
};

export default OwnerTenantPortal;
