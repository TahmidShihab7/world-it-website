import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);
  const { cart } = props;
  let total = 0;
  let name = "";
  for (const developer of cart) {
    total = total + developer.salary;
    name = name + " " + developer.name;
  }
  return (
    <div className="cart-info">
      <h1>Cart Info</h1>
      <h2>Total Hired: {props.cart.length}</h2>
      <h3>{name}</h3>
      <h3>Total Cost: ${total}</h3>
    </div>
  );
};

export default Cart;
