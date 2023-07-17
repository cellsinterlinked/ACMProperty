import React from 'react'
import './ResourceBox.css'

const ResourceBox = ({children, title, image}) => {
    return(
        <div className="resource-wrapper">
          <div className="resource-shadow">
            <div className="resource-box">
              <div className="resource-box-top">
                <h2>{title}</h2>
                <div className="head-divider-sm"></div>
                {children}
              </div>
              <div className="resource-box-bottom">
                <div className="resource-image">
                  <img alt="" src={image} />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ResourceBox