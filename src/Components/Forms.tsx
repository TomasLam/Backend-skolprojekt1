import React from 'react';
import {} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons' ;

const Forms = () => {
    return(
            <section className="formsite">

        <div className="contact-icon">
            <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> 
            <p className="contact-text">Contacts</p>
        </div>

        <div className="maps">
            <img src="bilder/map2.svg" alt="map" /> 
        </div> 

            </section>
    )
}

export default Forms

