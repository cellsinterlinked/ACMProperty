import React from "react";
import "./Survey.css";

const Survey = () => {
  return (
    <div className="survey_wrapper">
        <div className="form-container">
      <iframe
        title="Survey"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd7xWBaRO7-Iz0eJ4wF_AUicA6qF0Km-qWuHhbu4PnsKGnSVA/viewform?embedded=true"
        // width="700"
        // height="20"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{ width: "100%", height: "100%", marginTop: "20rem" }}
      >
        Loading…
      </iframe>

        </div>
    </div>
  );
};

export default Survey;
