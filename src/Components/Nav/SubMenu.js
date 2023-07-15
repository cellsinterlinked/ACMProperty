import React from "react";
import "./SubMenu.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SubCategory = ({ icon, title, destination }) => {
  return (
    <Link to={destination} className="sub-category">
      {icon}
      {title}
      <div>
        <BsArrowRight className="nav-arrow" onClick={() => console.log(title, destination)} />
      </div>
    </Link>
  );
};

const SubMenu = ({ info }) => {
    
  return (
    <ul className="sub-menu">
      
      <div>
        <div className="arrow-up"></div>
      </div>

      {info.map((item, index) => <SubCategory icon={item.icon} title={item.title} key={index} destination={item.destination} /> )}
    </ul>
  );
};

export default SubMenu;
