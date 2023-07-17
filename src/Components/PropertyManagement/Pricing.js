import React from "react";
import "./Pricing.css";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing_wrapper">
      <div className="pricing-inner">
        <div className="price-column">
          <h2 className="price-percent red">10%</h2>
          <p className="price-sub-1">
            Of Monthly rent collected, including late fees
          </p>
          <p className="price-sub-2">$45 minimum fee</p>
          <h2 className="price-name red">Basic</h2>
          <div className="price-detail-text">
            <p>
              This is the ideal package for Rental Owners who want some
              assistance with the most basic components of managing properties
            </p>
          </div>
          <Link to="/basic">
            <Button styleType="price-button red-button">LEARN MORE</Button>
          </Link>
        </div>
        <div className="price-divider"></div>
        <div className="price-column">
          <h2 className="price-percent standard">14%</h2>
          <p className="price-sub-1">
            Of Monthly rent collected, including late fees
          </p>
          <p className="price-sub-2">$45 minimum fee</p>
          <h2 className="price-name standard">Premium</h2>
          <div className="price-detail-text">
            <p>
              If you want to leave the state for months on end and not have to
              worry about your portfolio, this package is for you!
            </p>
          </div>
          <Link to="/premium">
            <Button styleType="price-button standard-button">LEARN MORE</Button>
          </Link>
        </div>
        <div className="price-divider"></div>
        <div className="price-column">
          <h2 className="price-percent green">12%</h2>
          <p className="price-sub-1">
            Of Monthly rent collected, including late fees
          </p>
          <p className="price-sub-2">$45 minimum fee</p>
          <h2 className="price-name green">Standard</h2>
          <div className="price-detail-text">
            <p>
              This package will free up any Rental Owner's time from dealing
              with tenant needs
            </p>
          </div>
          <Link to="/standard">
            <Button styleType="price-button green-button">LEARN MORE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
