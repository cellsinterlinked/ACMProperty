import { RiSecurePaymentLine } from "react-icons/ri";
import React from 'react'
import Included from "./Included";
import './PackageStyles.css'

const AccountsPayable = () => {
    return(
        <Included
        wrapStyle="included_wrapper-l"
        icon={
          <RiSecurePaymentLine
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Accounts Payable"
        children={
          <>
            <p className="included-text">
          Eliminate the stress of bill payment, and rest easy knowing that your bills are paid on time, every time. 
            </p>
          </>
        }
      />
    )
}

export default AccountsPayable