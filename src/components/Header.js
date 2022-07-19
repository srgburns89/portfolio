import React from "react";
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wraper">
      


 
            <div className="main-info">
            
                
                <h1>Full Stack Web Developer</h1>
                <Typed className="typed-text"
                strings={["Web Design", "React JS", "Node.js", "SQL", "CSS", "HTML"]}
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
