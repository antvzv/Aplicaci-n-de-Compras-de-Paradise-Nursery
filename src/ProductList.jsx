import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12"
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg",
          description: "Removes mold spores and purifies indoor air.",
          cost: "$18"
        },
        {
          name: "Boston Fern",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity and purifies air naturally.",
          cost: "$14"
        },
        {
          name: "Rubber Plant",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to grow and excellent toxin remover.",
          cost: "$20"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-vera-3283083_1280.jpg",
          description: "Purifies air and offers soothing gel for skin.",
          cost: "$10"
        }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop",
          description: "Calming scent, used in aromatherapy and relaxation.",
          cost: "$20"
        },
        {
          name: "Jasmine",
          image: "https://images.unsplash.com/photo-1592729800070-7b2efef242ce?q=80&w=1000&auto=format&fit=crop",
          description: "Sweet fragrance, promotes relaxation and good sleep.",
          cost: "$18"
        },
        {
          name: "Rosemary",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating aroma, great for culinary and herbal use.",
          cost: "$15"
        },
        {
          name: "Mint",
          image: "https://cdn.pixabay.com/photo/2016/01/02/02/03/mint-1117567_1280.jpg",
          description: "Refreshing scent, perfect for teas and cocktails.",
          cost: "$10"
        },
        {
          name: "Lemon Balm",
          image: "https://cdn.pixabay.com/photo/2015/07/02/20/37/lemon-balm-829548_1280.jpg",
          description: "Citrusy scent, relieves stress and boosts mood.",
          cost: "$12"
        },
        {
          name: "Hyacinth",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110722_1280.jpg",
          description: "Rich floral scent, beautiful spring blooms.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Echinacea",
          image: "https://cdn.pixabay.com/photo/2014/12/05/14/02/echinacea-557997_1280.jpg",
          description: "Boosts immune system and helps fight colds.",
          cost: "$16"
        },
        {
          name: "Peppermint",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description: "Helps with digestion and relieves headaches.",
          cost: "$13"
        },
        {
          name: "Ginseng",
          image: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1000&auto=format&fit=crop",
          description: "Known for boosting energy and vitality.",
          cost: "$25"
        },
        {
          name: "Chamomile",
          image: "https://cdn.pixabay.com/photo/2016/08/19/10/06/chamomile-1604928_1280.jpg",
          description: "Soothes anxiety and aids peaceful sleep.",
          cost: "$15"
        },
        {
          name: "Calendula",
          image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/marigold-4340058_1280.jpg",
          description: "Heals skin irritations and minor wounds.",
          cost: "$12"
        },
        {
          name: "Thyme",
          image: "https://cdn.pixabay.com/photo/2016/05/20/19/22/thyme-1405786_1280.jpg",
          description: "Contains antibacterial and antimicrobial properties.",
          cost: "$11"
        }
      ]
    }
  ];

  // Calculate total quantity of items in cart
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e?.preventDefault();
    setShowCart(false);
  };

  const isItemInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div>
      <div className="navbar">
        <div className="tag">
          <div className="luxury" onClick={onHomeClick} style={{ cursor: 'pointer' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/628/628324.png" alt="logo" className="logo-img" />
            <div>
              <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
              <i style={{ color: '#d8f3dc', fontSize: '0.85rem' }}>Where Green Meets Serenity</i>
            </div>
          </div>
        </div>

        <div className="nav-links">
          <div>
            <a href="#" onClick={handlePlantsClick} className="nav-link">
              Plants
            </a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} className="cart-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="42" width="42">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="80" cy="216" r="12"></circle>
                <circle cx="184" cy="216" r="12"></circle>
                <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#fafafa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
              </svg>
              {calculateTotalQuantity() > 0 && (
                <span className="cart-badge">{calculateTotalQuantity()}</span>
              )}
            </a>
          </div>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="plant_heading">{categoryObj.category}</h2>
              <div className="plant_list">
                {categoryObj.plants.map((plant, plantIndex) => {
                  const inCart = isItemInCart(plant.name);
                  return (
                    <div className="product-card" key={plantIndex}>
                      <img className="product-image" src={plant.image} alt={plant.name} />
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-price">{plant.cost}</div>
                      <button
                        className={`product-button ${inCart ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={inCart}
                      >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;

