import { HiBan } from "react-icons/hi";
import React from 'react'
import Included from "./Included";
import './PackageStyles.css'

const Violations = () => {
    return(
        <Included
        wrapStyle="included_wrapper-l"
        icon={
          <HiBan
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Violations"
        children={
          <>
            <p className="included-text">
          Issuing and resolving violations in accordance with HOA govorning documents and bylaws. 
            </p>
          </>
        }
      />
    )
}

export default Violations