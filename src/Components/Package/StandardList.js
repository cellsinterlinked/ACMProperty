import React from "react";
import "./PackageStyles.css";
import RentCollections from "./RentCollections";
import OwnerTenantPortal from "./OwnerTenantPortal";
import MoveInspections from "./MoveInspections";
import FinancialReporting from "./FinancialReporting";
import LeaseRenewal from "./LeaseRenewal";
import DocumentSigning from "./DocumentSIgning";
import PreparedLease from "./PreparedLease";
import VacancyListing from "./VacancyListing";
import TenantScreening from "./TenantScreening";
import Maintenance from "./Maintenance";
import LeaseEnforcement from "./LeaseEnforcement";

const StandardList = () => {
  return (
    <div className="package_list-wrapper">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>
      <RentCollections />
      <OwnerTenantPortal />
      <MoveInspections />
      <FinancialReporting />
      <LeaseRenewal />
      <DocumentSigning />
      <PreparedLease />
      <VacancyListing />
      <TenantScreening />
      <Maintenance />
      <LeaseEnforcement />
    </div>
  );
};

export default StandardList;
