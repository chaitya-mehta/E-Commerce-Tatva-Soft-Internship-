import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => addToCart('Item 1')}>Add to Cart</button>
      <button onClick={() => addToCart('Item 2')}>Add to Cart</button>
      {/* Add more buttons for other items */}
    </div>
  );
};

export default Cart;
