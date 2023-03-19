import React, { useState } from "react";
import Cart from "../Components/Cart"
import {Link} from "react-router-dom";

import {} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' ;



interface NavbarProps {
    price: number;
    cart: CartItem[];
    size: any;
    item?: Item[];
}

interface Item {
  id: number;
  name: string;
  image?: string;
  price: number;
  Category: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Navbar: React.FC<NavbarProps> = ({price, cart, size, item}: NavbarProps) => {
        
        const handleShowCart = () => {
          const cartButton = document.querySelector(".show-cart-button");
          if (cartButton instanceof HTMLElement && typeof cartButton.click === "function") {
            cartButton.click();
          }
        };

        // const handleShowCart = () => {
        //     const cartButton = document.querySelector(".show-cart-button");
        //     if (cartButton) {
        //         cartButton.click();
        //     }
        // };

        return(
            <header>
                 <section className="sect-one">
        <nav className="top-navbar" >
            <div className="flogo">
                Fixxo.
            </div>
            <div className="nav-links"> 
                <Link to="/">Home</Link>
                <a href="#">Categories</a>
                <Link to="/Productsview">Products</Link>
                <Link to="/Contact">Contacts</Link>
            </div>
            <div className="nav-icons-links">
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></a>           
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>             
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a>               
                
                
               {/* <button onClick={handleShowCart}
                    className="white-circles"><FontAwesomeIcon className="thebag" icon={faBagShopping} ></FontAwesomeIcon>
                </button>*/}
                 {/* <div className="Shopcartadded">{size}</div>  */}
                    <Cart cart={cart} price={price} size={0} />
                                       
            </div>
        </nav>
    </section>
            </header>
           
        )
    }


export default Navbar;