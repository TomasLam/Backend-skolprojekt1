import React, {useState ,useEffect} from "react";
import Navbar from "../Components/Navbar";
import Sectiontwo from "../Components/Sectiontwo";
import Footer from "../Components/Footer";
import Toppicks from "../Components/Toppicks";
import Flashsale from "../Components/Flashsale";
import Flashsaletwo from "../Components/Flashsaletwo";
import Flashsaletwoo from "../Components/Flashsaletwoo";
import Lastsecticons from "../Components/Lastsection";
import Cart from "../Components/Cart";

interface Item {
    Category: string;
    name: string;
    price: number;
    id: number;
    quantity: number;
  }

const Home = () => {
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
            // setItem(item);
        }
        
        useEffect(() => {
    
            console.log(price);
          },[price]);


    return(
            <div className="Navbar">

                <Navbar size={count} price={price} item={item} cart={cart} />                    
                <Sectiontwo handleClick={handleClick} cart={[]} price={0}  /> 
                <Toppicks />
                <Flashsale />
                <Flashsaletwo />
                <Flashsaletwoo />
                <Lastsecticons />
                <Footer />
                <Cart cart={cart} price={price} size={count} />
                
            </div>
        )
    }


export default Home;