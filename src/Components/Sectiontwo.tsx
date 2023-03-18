import React from "react";

import {} from '@fortawesome/fontawesome-svg-core';
import {} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faStar} from '@fortawesome/free-solid-svg-icons' ;

class Sectiontwo extends React.Component{
    render(){
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
            <div className="row row-cols-1 row-cols-md-4 g-4">
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
                      <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
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
                        <p className="card-pri">$35.00</p>
                      </div>
                    </div>
                  </div>  
                  </div>   
                  </div>                   
       </section>

        </div>
        )
    }
}

export default Sectiontwo;