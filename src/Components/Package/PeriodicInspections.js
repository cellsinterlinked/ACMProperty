import React from 'react'
import './PackageStyles.css';
import Included from './Included';
import { BsCalendar2MonthFill } from "react-icons/bs";

const PeriodicInspections = () => {
    return(
        <Included
        wrapStyle="included_wrapper-r"
        icon={
          <BsCalendar2MonthFill
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Periodic Inspections"
        children={
          <>
            <p className="included-text">
              A routine periodic inspection is completed every six months from
              the start of the lease. If it is warrented, a periodic inspection
              ouside of the 6-month schedule can occur.
            </p>
          </>
        }
      />
    )
}

export default PeriodicInspections