import React from "react";
import "./PackageStyles.css";
import Accounts from "./Accounts";
import Violations from "./Violations";
import Vendor from "./Vendor";
import Portal from "./Portal";
import Legal from "./Legal";
import MaintenanceManagement from "./MaintenanceManagement";
import Maintain from "./Maintain";
import Communications from "./Communications";
import FinancialManagement from "./FinancialManagement";
import AccountsPayable from "./AccountsPayable";
const HOAList = () => {
  return (
    <div className="package_list-wrapper">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>
      <Accounts />
      <Violations />
      <Vendor />
      <Portal />
      <Legal />
      <MaintenanceManagement />
      <Maintain />
      <Communications />
      <FinancialManagement />
      <AccountsPayable />
    </div>
  );
};

export default HOAList;
