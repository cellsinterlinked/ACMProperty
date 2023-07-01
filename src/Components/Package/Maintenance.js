import React from 'react'
import './PackageStyles.css';
import Included from './Included';
import { BsTools } from "react-icons/bs";

const Maintenance = () => {
    return(
        <Included
        wrapStyle="included_wrapper-r"
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
              Maintenance management includes coordination with tenants and
              vendors. Tenants have access through their portal to report any
              maintenance issues. ACM will then vet the request and coordinate
              with the rental owner's preferred venfors or ACM-selected vendors.
            </p>
          </>
        }
      />
    )
}

export default Maintenance