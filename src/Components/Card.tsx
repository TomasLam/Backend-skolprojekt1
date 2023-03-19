import React, { useState,} from 'react';

import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faStar} from '@fortawesome/free-solid-svg-icons' ;

interface Props {
  item: {
    Category: string;
    name: string;
    price: number;
  };
  handleClick: (item: any) => void;
}

const Card = ({item, handleClick}: Props) => {
  
    return (
      
        <div className="col">
        <div className="card">
          <div className="img">
              <div className="card-menu">
                    <a href="#" className="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a> 
                    <a href="#" className="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>                                                           
                    <button 
                      onClick={() => handleClick(item)}
                      className="white-circles"><FontAwesomeIcon className="thebag" icon={faBagShopping}></FontAwesomeIcon>
                    </button>
              </div>
              <a className="btn-QW" href="">
                  <span className="shopbtn-leftt"></span>
                  QUICK VIEW
                  <span className="shopbtn-rightt"></span>
              </a>
          </div>
          <div className="card-body">
            <p key={item.Category} className="card-cate">{item.Category}</p>  
            <h5  key={item.name} className="card-title">{item.name}</h5>
            <p className="card-rate">
             <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
             <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
             <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
             <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
             <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </p>
            <p key={item.price} className="card-pri">{item.price}</p>
            
          </div>
        </div>
      </div>
      
    )
}

export default Card