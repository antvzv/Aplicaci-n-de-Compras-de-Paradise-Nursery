import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper to extract numeric cost from "$15" or 15
  const parseCost = (costString) => {
    if (typeof costString === 'number') return costString;
    return parseFloat(costString.replace(/[^0-9.-]+/g, '')) || 0;
  };

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + parseCost(item.cost) * item.quantity, 0).toFixed(2);
  };

  // Calculate subtotal for a specific item
  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference. Thank you for shopping with Paradise Nursery!');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart-msg">
          <p>Your cart is empty.</p>
          <button className="get-started-btn" onClick={handleContinueShopping}>
            Explore Plants
          </button>
        </div>
      ) : (
        <div>
          {cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Unit Cost: ${parseCost(item.cost).toFixed(2)}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center' }} className="continue_shopping_btn">
        <button className="get-started-btn" onClick={handleContinueShopping}>Continue Shopping</button>
        {cart.length > 0 && (
          <button className="get-started-btn checkout-btn" onClick={handleCheckoutShopping}>Checkout</button>
        )}
      </div>
    </div>
  );
};

export default CartItem;

