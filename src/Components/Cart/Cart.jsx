import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveToCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>PLEASE ADD Some products</p>;
  } else {
    message = (
      <div>
        Boroloxs
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "red"}>
        Order Summary: {cart.length}
      </h2>
      <p className={`bold ${cart.length === 3 ? "orange" : "purple"}`}>
        Something
      </p>
      {cart.length > 2 ? (
        <span className="purple">Aro Kino</span>
      ) : (
        <span>fokira</span>
      )}

      {message}

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveToCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Double Bonuzzza!!</p>}
      {cart.length === 3 || <h3>TINta to hoilo na</h3>}
    </div>
  );
};

export default Cart;

/*
 *Conditional Rendering
 *1. use if else set aa variable that will contain an element, components what ever you want to add
 *2 ternary : condition ? 'for true' : "flase"
 *3. Logical && : (if the condition is true then next thing  will be displayed)
 4.  Logical || (if the condition  is flase then next will be displayed) 
 
 */

/*
*CONDITIONAL CSS CLASS
* use ternary
2.ternary inside template  string 
*/
