import React from "react";
import "./Sales.css";
import Infographic from "../Components/Visuals/Infographic";
import RealEstateForm from "../Components/Forms/RealEstateForm";
import image from "../Assets/Images/real-estate-form-2021-09-02-10-58-38-utc.jpg";
import poly from '../Assets/Backgrounds/Poly1.jpg';

const Sales = () => {
  return (
    <div className="sales_wrapper">
      <div className="sales-header">
        <div className="poly-wrapper">
            <img alt="" src={poly} />

        </div>
        <div className="s-head-1">
          <p className="s-head-zazz">MANAGEMENT</p>
          <h2>Real Estate Sales</h2>
          <p>
            Whether you're buying or selling, ACM Property Management, LLC has
            the tools and knowledge available to help you navigate selling any
            real estate. Ensuring you are working with an agency you can trust
            is incredibly important. For most, a home will be the most
            significant purchase, so it is crucial to work with someone who will
            always look out for you best interests.
          </p>
          <p>
            At ACM Property Management, their clients com first, and they work
            diligently to meet the needs and goals of every client.
          </p>
        </div>

        <div className="s-head-2">
          <div className="s-head-image">
            <img alt="" src={image} />
          </div>
        </div>
      </div>

      <di className="realestate-content">

      <RealEstateForm />

      </di>

      <Infographic />
    </div>
  );
};

export default Sales;
