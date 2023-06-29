import React, {useState} from "react";
import "./LandingVideo.css";
import BgVideo from "../../Assets/Video/video1.mp4";
import NavBar from "../Nav/Navbar";

function LandingVideo() {

const [opacity, setOpacity] = useState(0.5)

window.addEventListener('scroll', dimBg)

function dimBg () {
  setOpacity(0.5 + (window.scrollY * .00015) )
  console.log(window.scrollY, opacity)
      
}





  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop class="video-bg" />
      <div className="bg-overlay" style={{opacity: opacity }}></div>
     {/* <NavBar /> */}
      <div className="home-text">
        <h1>Meet The Experts</h1>
        <div className="lineContainer">
        <div className="leftLine"></div>
        <div className="lineCircle"></div>
        <div className="rightLine"></div>

        </div>
        <p>Your Southern Indiana Property Managers</p>
      </div>

    </div>
  );
}

export default LandingVideo;
