import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";


const Header = () => {
    return (
        <div id="home" className="header-wraper">
      


 
            <div className="main-info">
            
                
                <h1>Full Stack Web Developer</h1>
                <Typed className="typed-text"
                strings={["Web Design", "React JS", "Node.js", "SQL", "CSS", "HTML"]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                <Link to="contact" href="#" className="btn-main-offer">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Header
