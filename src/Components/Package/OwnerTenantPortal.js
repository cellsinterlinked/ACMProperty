import React from 'react'
import './PackageStyles.css';
import Included from './Included';
import {RiListSettingsFill} from 'react-icons/ri';

const OwnerTenantPortal = () => {
    return(
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
    )
}

export default OwnerTenantPortal;