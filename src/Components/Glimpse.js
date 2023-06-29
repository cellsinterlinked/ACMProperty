import React from 'react'
import './Glimpse.css'
import {BsHousesFill} from 'react-icons/bs';
import {MdAutoMode} from 'react-icons/md';
import {IoPersonRemove} from 'react-icons/io5';
import { LuUtilityPole} from 'react-icons/lu';
import {AiFillBook} from 'react-icons/ai';
import {IoIosPaper} from 'react-icons/io';
import {AiFillTool} from 'react-icons/ai';
import {GiPayMoney} from 'react-icons/gi';
import {FaRegEye} from 'react-icons/fa';
import {IoPersonAdd} from 'react-icons/io5';
import {GiPortal} from 'react-icons/gi';








const list = [
    {title: 'HAO Management Servies', icon: <BsHousesFill className="glimpse-icon"/>}, 
    {title: 'Automated Financials', icon: <MdAutoMode className="glimpse-icon"/>}, 
    {title: 'Evictions', icon: <IoPersonRemove className="glimpse-icon"/>}, 
    {title: 'Utility Coordination', icon: <LuUtilityPole className="glimpse-icon"/>}, 
    {title: 'Legal Compliance', icon: <AiFillBook className="glimpse-icon"/>}, 
    {title: 'Tenant Screening', icon: <IoIosPaper className="glimpse-icon"/>}, 
    {title: 'Maintenance Management', icon: <AiFillTool className="glimpse-icon"/>}, 
    {title: 'Rent Collections', icon: <GiPayMoney className="glimpse-icon"/>}, 
    {title: 'Inspections', icon: <FaRegEye className="glimpse-icon"/>}, 
    {title: 'Vacancy Filling', icon: <IoPersonAdd className="glimpse-icon"/>}, 
    {title: 'Portal Access', icon: <GiPortal className="glimpse-icon"/>}
]

const Glimpse = () => {
    return(
        <div className="glimpse-wrapper">
            <div className="glimpse-content">
                <div className="banner">
                <h2>A Glimpse Into Our Management Services...</h2>
                <div className="banner-end"></div>
                <div className="banner-start-top"></div>
                <div className="banner-start-bottom"></div>
                </div>

                <div className="glimpse-list">
                    {list.map((item, index) => 

                    <div className="glimpse_box" key="index">
                        <div className="glimpse-inner">
                        <div className="glimpse-icon-wrapper">
                            {item.icon}
                        </div>
                        <h2>{item.title}</h2>
                        </div>
                    </div>
                    
                    )}

                </div>


            </div>

 

        </div>
    )
}

export default Glimpse