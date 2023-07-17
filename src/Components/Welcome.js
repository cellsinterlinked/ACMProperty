import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome_wrapper">
      <div className="welcome_text">
        <div>
          <h2>
            <strong className="text-accent-purple_title">W</strong>elcome to ACM
            Property Management, LLC
          </h2>
          <div className="head-divider"></div>
          <p>
            ACM Property Management is a full-service property management
            company serving Southern Indiana. They pride themselves on their
            ability to adapt to their client's needs, their moral integrity, and
            their drive to become the go-to property management firm in Southern
            Indiana. "Continuous Improvement" isn't simpy an uplifting poster on
            an office wall for them; it is the motto they operate by. The desire
            to continuously improve as professionals, individials, and property
            managers drives them to take a "Lean" approach to their services.
            This approach allows them to efficiently streamline the day-to-day
            work, resulting in excellent services to their clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
