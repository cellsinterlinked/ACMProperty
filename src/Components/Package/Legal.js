import { HiScale } from "react-icons/hi2";
import React from 'react'
import Included from "./Included";
import './PackageStyles.css'

const Legal = () => {
    return(
        <Included
        wrapStyle="included_wrapper-r"
        icon={
          <HiScale
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Legal Compliance"
        children={
          <>
            <p className="included-text">
          Rest easy knowing your HOA is operating within the Indiana State Code. 
            </p>
          </>
        }
      />
    )
}

export default Legal;