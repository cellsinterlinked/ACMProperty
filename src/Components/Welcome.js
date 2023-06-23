import React from "react";
import "./Welcome.css";
import welcomeImage from '../Assets/Images/entrepreneur-smiling-during-business-video-call-2021-08-30-14-12-15-utc.JPG';

const Welcome = () => {
  return (
    <div className="welcome_wrapper">
      <div className="welcome_text">
        <div className="welcome_image-holder">
          <img alt="" src={welcomeImage}/>
        </div>
        <div>
        <h2>Welcome to ACM Property Management, LLC</h2>
        <p>
          ACM Property Management is a full-service property management company
          serving Southern Indiana. They pride themselves on their ability to
          adapt to their client's needs, their moral integrity, and their drive
          to become the go-to property management firm in Southern Indiana.
          "Continuous Improvement" isn't simpy an uplifting poster on an office
          wall for them; it is the motto they operate by. The desire to
          continuously improve as professionals, individials, and property
          managers drives them to take a "Lean" approach to their services. This
          approach allows them to efficiently streamline the day-to-day work,
          resulting in excellent services to their clients.
        </p>

        </div>
      </div>




    </div>
  );
};

export default Welcome;
