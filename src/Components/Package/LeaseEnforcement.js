import React from 'react'
import './PackageStyles.css';
import Included from './Included';
import { GiPoliceOfficerHead } from "react-icons/gi";

const LeaseEnforcement = () => {
    return(
        <Included
        wrapStyle="included_wrapper-l"
        icon={
          <GiPoliceOfficerHead
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Lease Enforcement"
        children={
          <>
            <p className="included-text">
              Lease enforcement includes issuing lease violations or notices for
              breach of contract
            </p>
          </>
        }
      />
    )
}

export default LeaseEnforcement