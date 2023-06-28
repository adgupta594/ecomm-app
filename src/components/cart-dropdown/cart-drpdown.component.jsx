import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-drpdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
