// Features.jsx
import React from 'react';
import { FaShippingFast, FaRegStar, FaRegCheckCircle } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  return (
    <div className="features">
      <h2>Why Choose Our Brand</h2>
      <p className="description">
        Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Further be chapter at visited married in it pressed.
      </p>

      <div className="cards-container">
        {/* Best Quality Card */}
        <div className="card">
          <FaRegStar className="icon" />
          <h3>Best Quality</h3>
          <p>100% Genuine Product</p>
        </div>

        {/* Free Shipping Card */}
        <div className="card">
          <FaShippingFast className="icon" />
          <h3>Free Shipping</h3>
          <p>100% Free Shipping Product</p>
        </div>

        {/* Warranty Card */}
        <div className="card">
          <FaRegCheckCircle className="icon" />
          <h3>Warranty</h3>
          <p>100% Return Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
