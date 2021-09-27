import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Developer from "../Developer/Developer";
import "./Developers.css";
const Developers = () => {
  //declare stare for show developers
  const [developers, setDevelopers] = useState([]);
  //declare state for show cart info
  const [cart, setCart] = useState([]);
  //api called
  useEffect(() => {
    fetch("./fakeDB.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  const handleAddToCart = (developer) => {
    const newCart = [...cart, developer];
    setCart(newCart);
  };

  return (
    //developers sec
    <div className="developers-container">
      <div className="developer-container">
        {developers.map((developer) => (
          <Developer
            developer={developer}
            key={developer._id}
            handleAddToCart={handleAddToCart}
          ></Developer>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Developers;
