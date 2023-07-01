import React from "react";
import "./PackageStyles.css";
import Included from "./Included";
import { GiBangingGavel } from "react-icons/gi";

const EvictionProcess = () => {
  return (
    <Included
      wrapStyle="included_wrapper-r"
      icon={
        <GiBangingGavel
          style={{ fill: "url(#blue-gradient)" }}
          className="include-icon"
        />
      }
      title="Eviction Process"
      children={
        <>
          <p className="included-text">
            With ACM Property Management as your representing agent, you will no
            longer need to be present at eviction hearings*. ACM Property
            Management's legal compliance is air tight, from providing the
            notice and filing the eviction to attending the eviction hearing.
          </p>
          <p>*Varies based on juristiction</p>
        </>
      }
    />
  );
};

export default EvictionProcess;
