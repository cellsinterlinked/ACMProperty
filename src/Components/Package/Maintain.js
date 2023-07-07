import { MdGroups } from "react-icons/md";
import React from 'react'
import Included from "./Included";
import './PackageStyles.css'

const Maintain = () => {
    return(
        <Included
        wrapStyle="included_wrapper-r"
        icon={
          <MdGroups
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Maintain Common Areas"
        children={
          <>
            <p className="included-text">
          Coordinate with vendors and maintenance to ensure common areas are well maintained, clean, and orderly. 
            </p>
          </>
        }
      />
    )
}

export default Maintain