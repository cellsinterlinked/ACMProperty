import React from "react";
import "./PackageStyles.css";
import Included from "./Included";
import { RiListSettingsFill } from "react-icons/ri";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

const PremiumList = () => {
  return (
    <div className="package_list-wrapper">
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7a6ded" offset="0%" />
          <stop stopColor="#591885" offset="100%" />
        </linearGradient>
      </svg>
      <Included
        wrapStyle="included_wrapper-l"
        icon={
          <RiMoneyDollarBoxFill
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Rent Collections"
        children={
          <p className="included-text">
            ACM Property Management, LLC collects rental income. Tenants can pay
            their rent online through their portal with a credit/debit card,
            bannk transfer, in-store cash payments (Walmart, Walgreens, CVS,
            Casey's, and more), or by mail.
          </p>
        }
      />
      <Included
        wrapStyle="included_wrapper-r"
        icon={
          <RiListSettingsFill
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Owner and Tenant Portals"
        children={
          <>
            <p className="included-text">
              Both tenants and rental owners can access top-of-the-line software
              through their portals.
            </p>
            <p>
              Tenants can make maintenance requests, pay rent, view any
              announcements, view any documents, subscribe to rent reporting,
              and purchase renter's insurance, in addition to always having
              access to their payment history.
            </p>
            <p>
              Rental owners will have full access to everything about their
              properties, such as financial reporting, the rental owner ledger,
              documents, requests, and several reporting features.
            </p>
          </>
        }
      />
      <Included
        wrapStyle="included_wrapper-l"
        icon={
          <HiMagnifyingGlassCircle
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Move-In & Move-Out Inspections"
        children={
          <>
            <p className="included-text">
              Detailed move-in and move-out inspections are completed to capture
              the property's condition before and after tenant occumancy.
              Inspections thoroughly examine every aspect of the home, ranging
              from the exterior siding to the baseboards in bedrooms. You can
              expect to find pertinent comments, the condition , and photos with
              each report.
            </p>
          </>
        }
      />
    </div>
  );
};

export default PremiumList;
