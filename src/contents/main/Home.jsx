import React, { Component } from "react";
import AnimatedWrapper from "./../AnimateWrapper";

import HomeVisual from "./HomeVisual";
import HomeContent from "./HomeContent";

class HomeComponent extends Component
{
    render(){
        return(
            <div className="main">
                <HomeVisual />
                <HomeContent />
            </div>
        )
    }
}

const Home = AnimatedWrapper( HomeComponent );
export default Home;