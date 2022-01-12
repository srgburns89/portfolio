import React from "react";
import Typed from "react-typed"
import Particles from "../components/Particles"

const Header = () => {
    return (
        <div className="header-wraper">
      {/* <Particles /> */}


 
            <div className="main-info">
                
                <h1>Full Stack Web Developer</h1>
                <Typed className="typed-text"
                strings={["Web Design", "Web Development", "Google ADS"]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">CONTACT ME</a>
            </div>
        </div>
    )
}

export default Header
