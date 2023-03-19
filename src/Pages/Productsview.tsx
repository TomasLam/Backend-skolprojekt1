import React, {useState, useEffect} from "react";

import Cart from "../Components/Cart";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Productssite from "../Components/Productssite";

interface Item {
    Category: string;
    name: string;
    price: number;
    id: number;
    quantity: number;
  }

const Productsview = () => {
    const [price , setPrice] = useState(0);
    //const [show, setShow] = useState(true);
    const [cart, setCart] = useState<Item[]>([]);
    const [count, setCount] = useState<number>(0);
    const [item, setItem] = useState([]);


    const handleClick = (item: Item) => { 
        cart.push(item); 
        setCount(cart.length)
        setPrice(item.price + price)
        console.log(item)
        console.log(cart.length)
        console.log(price)
        //  setItem(item);
    }
    
    useEffect(() => {
        
        console.log(price);
      },[price]);

    
    return(
            <div className="Navbar">
                <Navbar size={count} price={price} item={item} cart={cart}/>
                <Productssite handleClick={handleClick} item={item}/>
                <Footer />
                <Cart cart={cart} price={price} size={count} />
            </div>
        )
    }


export default Productsview;