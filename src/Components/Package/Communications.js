import { SlSpeech } from "react-icons/sl";
import React from 'react'
import Included from "./Included";
import './PackageStyles.css'

const Communications = () => {
    return(
        <Included
        wrapStyle="included_wrapper-l"
        icon={
          <SlSpeech
            style={{ fill: "url(#blue-gradient)" }}
            className="include-icon"
          />
        }
        title="Resident Communications"
        children={
          <>
            <p className="included-text">
          ACM Property Management, LLC becomes the point of contact for all resident concerns. 
            </p>
          </>
        }
      />
    )
}

export default Communications