import React from 'react'
import './PackageStyles.css'
import Included from './Included'
import { BsEnvelopePaper } from "react-icons/bs";

const PreparedLease = () => {
    return(
    
        <Included
        wrapStyle="included_wrapper-l"
        icon={
          <BsEnvelopePaper
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Prepared Lease"
        children={
          <>
            <p className="included-text">
              A comprehensive, attorney-reviewed lease that oulines clear
              responsibilities throughout the tenancy for both parties.
            </p>
          </>
        }
      />
    )
}

export default PreparedLease