import React from "react";

import Navbar from "../Components/Navbar";
import Sectiontwo from "../Components/Sectiontwo";
import Footer from "../Components/Footer";
import Toppicks from "../Components/Toppicks";
import Flashsale from "../Components/Flashsale";
import Flashsaletwo from "../Components/Flashsaletwo";
import Flashsaletwoo from "../Components/Flashsaletwoo";
import Lastsecticons from "../Components/Lastsection";

class Home extends React.Component{
    render(){
    return(
            <div className="Navbar">
                <Navbar />
                <Sectiontwo />
                <Toppicks />
                <Flashsale />
                <Flashsaletwo />
                <Flashsaletwoo />
                <Lastsecticons />
                <Footer />
            </div>
        )
    }
}

export default Home;