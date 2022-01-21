import React from "react";
import Avatar from "../avatar.png";

const AboutMe = () => {
    return (
        <div className="container  about-me mt-5">
            <h2 className="about-heading" style={{textAlign: "center"}}>About Me</h2>
            <div className="about-container">
            <div className="row">
                <div className="col-lg-6 col-xm-12 mt-5" >
                    <div className="photo-wrap mb-5">
                    <img className="profile-pic" src={Avatar} alt="SEAN Burns"/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12 mt-5" >
                    
                    <p>I'm Sean, a full stack web developer located in San Diego, CA, and my talent is building things.
Throughout my professional life I've built relationships with clients, business plans, marketing campaigns, and online presences. Nowadays, I prefer to spend my time building functional, aesthetic websites and applications with code.
I specialize in developing full stack JavaScript applications with React/NextJS, ExpressJS, and PostgreSQL, and I have a strange but real obsession with writing clean CSS focused on full-responsiveness. Outside of the editor, I'm a goal-oriented team player with an unquenchable thirst for self-improvement who genuinely enjoys going above and beyond.</p>

            </div>
            </div>

            </div>
        </div>
    )
}

export default AboutMe
