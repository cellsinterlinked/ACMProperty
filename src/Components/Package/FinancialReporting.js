import React from 'react'
import './PackageStyles.css';
import Included from './Included';
import {BsGraphUpArrow} from 'react-icons/bs'

const FinancialReporting = () => {
    return(
        <Included
        wrapStyle="included_wrapper-r"
        icon={
          <BsGraphUpArrow
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Financial Reporting"
        children={
          <>
            <p className="included-text">
              Rental Owners will have 24/7 direct access to all financial
              reporting through their portal with wide array of reporting
              options.
            </p>
          </>
        }
      />
    )
}


export default FinancialReporting