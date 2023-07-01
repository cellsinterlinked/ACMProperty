import React from 'react'
import './PackageStyles.css'
import Included from './Included'
import { RiMoneyDollarBoxFill } from "react-icons/ri";

const RentCollections = () => {
    return(
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
    )
}


export default RentCollections

