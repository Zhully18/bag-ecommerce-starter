import React, { useContext, useState } from 'react';

//import Context
import { ShopContext } from '../ShopContext/ShopContext';

//import product css
import './ProductList.css';
import { IoMdCloseCircle } from 'react-icons/io';

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext);

  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // state for the selected product

  const toggleModal = (product = null) => {
    setModal(!modal);
    setSelectedProduct(product); // set the clicked product as the selected product
  };

  return (
    <div>
      <div className="product-list">
        <h2>Our Bag Collections</h2>
        <div className="product-grid">
          {products.map((product) => {
            // destructure product
            const { id, image, title, price } = product;
            return (
              <div className="product-card" key={id}>
                <img 
                  src={image} 
                  alt="product-img" 
                  className="product-image" 
                  onClick={() => toggleModal(product)} // pass the product when clicked
                />
                <div className="product-info">
                  <h4>{title}</h4>
                  <p>${price}</p>
                </div>
                <button 
                  onClick={() => addToCart(product, id)} 
                  className="add-to-cart">
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {modal && selectedProduct && (
        <div className="portfolio_modal">
          <div className="portfolio_modal-content">
            <IoMdCloseCircle className="modal_close" onClick={toggleModal} />
            <div className="modal_content">
            <img src={selectedProduct.image} alt={selectedProduct.title} className="modal_img" />
            <h3 className="modal_title">{selectedProduct.title}</h3>
            <h2 className='modal_price'>$ {selectedProduct.price} </h2>
            <button className='buy_now' > Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
