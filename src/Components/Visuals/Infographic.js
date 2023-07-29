import React from "react";
import InfographicSection from "./InfographicSection";
import "./Infographic.css";

const Infographic = () => {
  return (
    <div className="infographic">
      <InfographicSection
        num="1"
        text1="Determine your needs and preferences for the property. Research
            the real estate market in the area you're interested in and set a
            budget for the purchase."
        title1="RESEARCH AND BUDGET"
        title2="HIRE A REAL ESTATE AGENT"
        text2="      Consider hiring a real estate agent who can help you determine a
            competitive listing price, market your property, and negotiate
            with potential buyers."
      />
      <InfographicSection
        num="2"
        title1="GET PRE-APPROVED"
        text1="   If you need a mortgage to buy the property, it's essential to get
      pre-approved by a lender. This will give you a clear understanding
      of how much you can afford."
        title2="PROPERTY PREPERATION"
        text2="          Get your property ready for sale by making necessary repairs,
      decluttering, and staging it to appeal to potential buyers."
      />
      <InfographicSection
        num="3"
        title1="ENGAGE A REAL ESTATE AGENT"
        text1="Consider hiring a licensed real estate agent who
can help you find suitable properties, negotiate on your behalf, and navigate the
process."
        title2="PROPERTY VALUATION"
        text2="Your real estate agent will assess the market and recent
sales to help you determine the appropriate listing price."
      />
      <InfographicSection
        num="4"
        title1="PROPERTY SEARCH"
        text1="Start looking for properties that meet your criteria. Attend open
houses, browse online listings, and take note of potential options."
        title2="MARKETING"
        text2="Your agent will market your property through various channels,
including online listings, advertisements, and open houses."
      />
      <InfographicSection
        num="5"
        title1="PROPERTY INSPECTION"
        text1="Once you find a property you like, schedule a professional
inspection to identify any hidden issues or potential problems."
        title2="RECEIVE OFFERS"
        text2="When a potential buyer makes an offer, your agent will present
it to you for consideration. You can choose to accept, reject, or counter the offer."
      />
      <InfographicSection
        num="6"
        title1="MAKE AN OFFER"
        text1="Offer: Submit an offer to the seller through your real estate agent. The
offer should include the price you&#39;re willing to pay, any contingencies (such as
home inspection and financing), and a proposed timeline."
        title2="NEGOTIATION"
        text2="Your agent will negotiate with the buyer on your behalf to reach a
mutually acceptable agreement."
      />
      <InfographicSection
        num="7"
        title1="NEGOTIATION"
        text1="Be prepared for possible counteroffers from the seller. Negotiate
until both parties reach an agreement."
        title2="ACCEPING AN OFFER"
        text2="Once you and the buyer agree on the terms, you&#39;ll sign the
purchase agreement, and the buyer may provide an earnest money deposit."
      />
      <InfographicSection
        num="8"
        title1="SIGN THE PURCHASE AGREEMENT"
        text1="Once the offer is accepted, you and the seller
will sign a legally binding purchase agreement."
        title2="PROPERTY INSPECTION AND APPRAISAL"
        text2="The buyer will likely conduct a home
inspection and appraisal to ensure the property&#39;s condition and value."
      />
      <InfographicSection
        num="9"
        title1="SECURE FINANCING"
        text1="Work with your lender to finalize the mortgage and secure
the necessary funds for the purchase."
        title2="CLOSING"
        text2="On the closing date, you&#39;ll sign the necessary paperwork, and
ownership will transfer to the buyer. You&#39;ll receive the proceeds from the sale,
minus any outstanding debts and fees."
      />
      <InfographicSection num="10" title1="CLOSING" text1="On the closing date, you&#39;ll sign the final paperwork, pay the closing
costs, and officially take ownership of the property." title2="" text2="" />
    </div>
  );
};

export default Infographic;
