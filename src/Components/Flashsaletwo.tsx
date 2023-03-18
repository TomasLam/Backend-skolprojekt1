import React from "react";

import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faStar} from '@fortawesome/free-solid-svg-icons' ;

const Flashsaletwo = () => {
    return(
        
      <section className="fsale-right">
      <div className="fsale-right-sec">
     
                    <div>
                        <a className="btn-QW" href="">
                            <span className="shopbtn-leftt"></span>
                            QUICK VIEW
                            <span className="shopbtn-rightt"></span>
                        </a>
                    </div>
         
              <div className="col">
                <div className="card">
                  <div className="img">
                      <div className="card-menu">
                              <a href="#" className="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a> 
                              <a href="#" className="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>                                                  
                              <a href="#" className="white-circle"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></a>
                      </div>
                      <a className="btn-QW" href="">
                          <span className="shopbtn-leftt"></span>
                          QUICK VIEW
                          <span className="shopbtn-rightt"></span>
                      </a>
                  </div>
                  <div className="card-body">
                    <p className="card-cate">Category</p>  
                    <h5 className="card-title">Modern Black Blouse</h5>
                    <p className="card-rate">
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </p>
                    <p className="card-pri">$29</p>
                  </div>
                </div>
              </div>
              <div className="col">
                  <div className="card">
                    <div className="img">
                        <div className="card-menu">
                              <a href="#" className="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a> 
                              <a href="#" className="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>                                                  
                              <a href="#" className="white-circle"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></a>
                        </div>
                        <a className="btn-QW" href="">
                            <span className="shopbtn-leftt"></span>
                            QUICK VIEW
                            <span className="shopbtn-rightt"></span>
                        </a>
                    </div>
                    <div className="card-body">
                      <p className="card-cate">Category</p>  
                      <h5 className="card-title">Modern Black Blouse</h5>
                      <p className="card-rate">
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </p>
                      <p className="card-pri">$29</p>
                    </div>
                  </div>
                </div>
                </div>


                <div className="fsale-boxx">
            <p className="twofor-text-up">2 FOR USD $29</p>
            <a className="btn-fsale" href="">
                <span className="shopbtn-lefttt"></span>
                <button type="button" className="flashbutton">
                  FLASH SALE
              </button>
                <span className="shopbtn-righttt"></span>
            </a>             
        </div>
                
      
     </section>

      

    )
}

export default Flashsaletwo;
