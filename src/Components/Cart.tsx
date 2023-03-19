import React, { useState,} from 'react';
import '../App.css';
import {} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from '@fortawesome/free-solid-svg-icons' ;

interface CartProps {
  price:number;
  cart: any;
  size?: any;
}

interface Item {
  name: string;
  price: number;
}

interface CartItemProps {
  item: Item;
  onAdd: (item: Item) => void;
  onRemove: (item: Item) => void;
  onDelete: (item: Item) => void;
  updatePrice: (newprice: number) => void;
}

interface CartContentProps {
  cartItems: Array<{ item: any; count: number }>;
  isOpen: boolean;
  handleToggle: () => void;
  updatePrice: (newprice: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, price, size = [] }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    console.log(price);
  };

  function CartItem({ item, onAdd, onRemove, onDelete }: CartItemProps) { 

    return (
      <tr>
        <td>{item?.name}</td>
        <td>{item?.price}</td>
        <td>
        <button onClick={() => onAdd(item)}>+</button>
        <span>{count}</span>
        <button onClick={() => onRemove(item)}>-</button>   
        <button onClick={() => onDelete(item)}>Delete</button>
        </td>
      </tr>
    );
  }

  function CartContent({ cartItems, isOpen, handleToggle, updatePrice }: CartContentProps) {

    const handleAddItem = (item: { name: any; price: any; }) => {
    setCount(count + 1)
    console.log(`Added item: ${item.name}`);
    updatePrice(item.price);
    };
  
    const handleRemoveItem = (item: { name: any; price: number; }) => {
          if (count > 0) {
            setCount(count - 1);
            console.log(`Removed item: ${item.name}`);
            updatePrice(-item.price);
          }
        };

      // const updateTotalPrice = (amount) => {
      //    setTotalPrice(totalPrice + amount);
      //    };
   
    return (
      <div className={`cart-content ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={handleToggle}>
          {isOpen ? 'Close cart' : 'Open cart'}
        </button>
        <div className="content">
          <h2>Cart content</h2>
          {/* <h2>Cart ({cartItems.length})</h2> */}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item: any, index: React.Key | null | undefined) => (
                <CartItem
                 key={index}
                 item={item}
                 onAdd={handleAddItem}
                 onRemove={handleRemoveItem}
                 onDelete={handleDeleteItem}
                 updatePrice={updatePrice}
                 />
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <div className="cart-total-label">Total:${totalPrice.toFixed(2)}</div>
            <div className="cart-total-amount">${totalPrice.toFixed(2)}</div>
          </div>
          <div className="cart-count">
          {/* <button onClick={handleRemoveItem}>-</button>
          <span>{count}</span>
          <button onClick={handleAddItem}>+</button> */}
          </div>
        </div>
      </div>
    );
  }

  const updatePrice = (amount: any) => {
      setTotalPrice(totalPrice + amount);
    };

    const handleDeleteItem = (item: { price: number; name: any; }) => {
        setTotalPrice(totalPrice - item.price);
        console.log(`Deleted item: ${item.name}`);
        cart.splice(cart.indexOf(item), 1);
      }
    
  return (
    <div className="cart">
      <button className="white-circles" onClick={toggleCart}>
        <FontAwesomeIcon className="thebag" icon={faBagShopping} />
      </button>
      <div className="Shopcartadded">{size}</div>
      {cartOpen && (
        <CartContent 
          cartItems={cart} 
          isOpen={cartOpen} 
          handleToggle={toggleCart} 
          updatePrice={updatePrice}
        />
      )}
    </div>
  );
}

export default Cart;


