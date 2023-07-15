import React from 'react'
import { BsChevronDown } from "react-icons/bs";
import './navButton.css';
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';

const NavButton  = ({children, destination, expand, sub}) => {
    return(
        <Link to={destination} className="nav-button">
            {children}
            {expand && <BsChevronDown className="nav_chevron-down" />}
            {sub && <SubMenu info={sub} />}
        </Link>
    )
}

export default NavButton;