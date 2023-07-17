import React from "react";
import "./Glimpse.css";
import { BsHousesFill } from "react-icons/bs";
import { MdAutoMode } from "react-icons/md";
import { IoPersonRemove } from "react-icons/io5";
import { LuUtilityPole } from "react-icons/lu";
import { AiFillBook } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { AiFillTool } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { GiPortal } from "react-icons/gi";
import hoa from "../Assets/Images/urban-neighborhood-2022-11-15-12-42-24-utc.jpg";
import automated from "../Assets/Images/automated.jpg";
import evictions from "../Assets/Images/eviction.jpg";
import utility from "../Assets/Images/utililty.jpg";
import legal from "../Assets/Images/legal.jpg";
import screening from "../Assets/Images/screening.jpg";
import maintenance from "../Assets/Images/maintenance.jpg";
import collections from "../Assets/Images/collections.jpg";
import inspections from "../Assets/Images/inspector.jpg";
import vacancy from "../Assets/Images/vacancy.jpg";
import portal from "../Assets/Images/portal.JPG";

const list = [
  {
    title: "HAO Management Services",
    icon: <BsHousesFill className="glimpse-icon" />,
    image: hoa,
  },
  {
    title: "Automated Financials",
    icon: <MdAutoMode className="glimpse-icon" />,
    image: automated,
  },
  {
    title: "Evictions",
    icon: <IoPersonRemove className="glimpse-icon" />,
    image: evictions,
  },
  {
    title: "Utility Coordination",
    icon: <LuUtilityPole className="glimpse-icon" />,
    image: utility,
  },
  {
    title: "Legal Compliance",
    icon: <AiFillBook className="glimpse-icon" />,
    image: legal,
  },
  {
    title: "Tenant Screening",
    icon: <IoIosPaper className="glimpse-icon" />,
    image: screening,
  },
  {
    title: "Maintenance Management",
    icon: <AiFillTool className="glimpse-icon" />,
    image: maintenance,
  },
  {
    title: "Rent Collections",
    icon: <GiPayMoney className="glimpse-icon" />,
    image: collections,
  },
  {
    title: "Inspections",
    icon: <FaRegEye className="glimpse-icon" />,
    image: inspections,
  },
  {
    title: "Vacancy Filling",
    icon: <IoPersonAdd className="glimpse-icon" />,
    image: vacancy,
  },
  {
    title: "Portal Access",
    icon: <GiPortal className="glimpse-icon" />,
    image: portal,
  },
];

const Glimpse = () => {
  return (
    <div className="glimpse-wrapper">
      <div className="glimpse-content">
        {/* <div className="banner">
          <h2>A Glimpse Into Our Management Services...</h2>
          <div className="banner-end"></div>
          <div className="banner-start-top"></div>
          <div className="banner-start-bottom"></div>
        </div> */}

        <div className="head-ban-wrapper">
          <h2>A Glimpse Into Our Management Services...</h2>
          <div className="head-ban-div"></div>
          <p>
            Our company uses the top technology and expert staff to help you
            manage everything that goes into your properties or home owner's
            association
          </p>
        </div>

        <div className="glimpse-list">
          {list.map((item, index) => (
            <div className="glimpse_box" key="index">
              <img alt="" src={item.image} />
              <div className="glimpse-inner">
                <div className="glimpse-icon-wrapper">{item.icon}</div>
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glimpse;
