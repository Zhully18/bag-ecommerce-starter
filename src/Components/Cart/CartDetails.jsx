import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Import icons
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
// Import cart context
import { ShopContext } from '../ShopContext/ShopContext';

const CartDetails = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);

  // Destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="cart-item">
      <div className="product-details">
        {/* Image */}
          <img src={image} alt={title} />
        <div className="product_info">
          {/* Title */}
          <h3><Link to={`/product/${id}`}>{title}</Link></h3>
          {/* Remove Icon */}
          <div className="cart_item_remove" onClick={() => removeFromCart(id)}>
          <FiTrash2 /> Remove
          </div>
        </div>
      </div>
      
      <div className="quantity">
        <button onClick={() => decreaseAmount(id)}>
          <IoMdRemove />
        </button>
        <span>{amount}</span>
        <button onClick={() => increaseAmount(id)}>
          <IoMdAdd />
        </button>
      </div>
      {/* Item Price */}
      <div className="price"> 
        $ {price} 
      </div>
      {/* Total Price */}
      <div className="total">
      {`$ ${parseFloat(price * amount).toFixed(2)}`}
      </div>

      
    </div>
  );
};

export default CartDetails;
