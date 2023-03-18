import React from "react";

import {Link} from "react-router-dom";

import {} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCodeCompare, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' ;

class Navbar extends React.Component{
    render() {
        return(
            <header>
                 <section className="sect-one">
        <nav className="top-navbar">
            <div className="flogo">
                Fixxo.
            </div>
            <div className="nav-links"> 
                <Link to="/">Home</Link>
                <a href="#">Categories</a>
                <a href="#">products</a>
                <Link to="/Contact">Contacts</Link>
            </div>
            <div className="nav-icons-links">
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></a>           
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon></a>             
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></a>               
                <a href="#" className="white-circle"><FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon></a> 
            </div>
        </nav>
    </section>
            </header>
        )
    }
}

export default Navbar;