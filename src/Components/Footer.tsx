import React from "react";


import {} from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component{
    render() {
        return(
            <footer>
                 <section className="cpyright"> 
          <div className="brand-icons">
          <button type="button" className="fb-icons"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></button>
            <button type="button" className="ig-icon"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></button>
            <button type="button" className="twi-icon"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></button>
            <button type="button" className="gg-icon"><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></button>
            <button type="button" className="lk-icon"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></button>
        </div>

        <p className="copyrighttxt">© 2022 Fixxo. All Rights Reserved</p>
        </section>

        <hr className="hrline" />
            </footer>

            
        )
    }
}

export default Footer;