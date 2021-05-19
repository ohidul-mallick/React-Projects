import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/alexadevices/XCM_Manual_1232000_1224960_in_Echo_Alexa_Header_Creatives_1500x200_6baabe7c-e035-4901-b17f-d14443066a97.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
