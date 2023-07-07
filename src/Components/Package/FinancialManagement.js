import { BsGraphUpArrow } from "react-icons/bs";
import React from 'react'
import Included from "./Included";
import './PackageStyles.css'

const FinancialManagement = () => {
    return(
        <Included
        wrapStyle="included_wrapper-r"
        icon={
          <BsGraphUpArrow
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Financial Management"
        children={
          <>
            <p className="included-text">
          Review finances with real time automated financial reporting and feel confident in your HOA budget with budget forecasting. 
            </p>
          </>
        }
      />
    )
}

export default FinancialManagement