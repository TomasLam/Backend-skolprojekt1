import React from "react";
import Card from "./Card";
import list from "../data/data";
import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;

const Productssite = (props: { handleClick: any; item: any; }) => {
  const { handleClick } = props;

  return (
    <section className="featured-prod">
      <div className="container">    
        {list.map(item => (                  
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <Card handleClick={handleClick} item={item} />
          </div>
        ))}
      </div>                              
    </section>
  )
}

export default Productssite;