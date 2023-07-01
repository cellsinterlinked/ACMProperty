import React from 'react'
import './PackageStyles.css';
import Included from './Included';
import { BsFillPersonVcardFill } from "react-icons/bs";

const TenantScreening = () => {
    return(
        <Included
        wrapStyle="included_wrapper-l"
        icon={
          <BsFillPersonVcardFill
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Tenant Screening"
        children={
          <>
            <p className="included-text">
              Live stress-free knowing your tenants are thoroughly vetted.
              Tenant screening involves a credit check, a background check, a
              prior eviction check, a landlord reference, income verifications,
              and employment verification.
            </p>
          </>
        }
      />
    )
}

export default TenantScreening