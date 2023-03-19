import React  from "react";

import Card from "../Components/Card"
import list from "../data/data"
import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;

interface SectiontwoProps {
    handleClick: (item: any) => void;
    cart: any[];
    price: number;
  }

  interface Item {
    id: number;
    name: string;
    image: string;
    price: number;
    Category: string;
  }
  
  interface CartItem extends Item {
    quantity: number;
  }

  const Sectiontwo: React.FC<SectiontwoProps> = ({ handleClick, cart, price}) => { 
    return(
        <div>
        <section className="sect-two">
        <div className="posing-girl">
            <img src="bilder/topside-girl.png" alt="posing girl"/>
        </div>

        <div className="sale-text">
            <p className="sale-off"><span className="sale-up">Sale Up</span> 
            To 50% Off</p>
            
            <p className="online-shop-text">Online shopping free home delivery over $100</p>
            <a className="shopnow-btn" href="#">
                <span className="shopbtn-left"></span>
                SHOP NOW
                <span className="shopbtn-right"></span>
            </a>
        </div>

        <div className="posing-male">
            <img src="bilder/topside-male.png" alt="posing-male"/>
        </div>
       </section>   

       <section className="featured-prod">
        <div className="container">

          {list.map ((item) => (
            <div key={item.id} className="row row-cols-1 row-cols-md-4 g-4">
              <Card handleClick={handleClick} item={item}/>
            </div>
            ))}
            </div>
                           
       </section>

        </div>
        )
    }


export default Sectiontwo;