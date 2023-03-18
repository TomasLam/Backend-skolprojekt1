import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Forms from "../Components/Forms";
import Theform from "../Components/Theform";


class Contact extends React.Component{
    render(){
    return(
            <div className="Navbar">
                <Navbar />
                <Forms />
                <Theform />
                <Footer />
            </div>
        )
    }
}

export default Contact;