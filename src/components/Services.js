import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faCode, faEdit, faFileCode, faTools } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="tools" className="services mt-5">
        
                
            <div className="container ">
           
            <div className="tech-container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mt-5">
                        <div className="box">
                            <div className="codeicon"><FontAwesomeIcon className="icons" icon={faFileCode} size="2x" /></div>
                            <h3>Languages</h3>
                            <li>Javascript</li>
                            <li>CSS3</li>
                            <li>HTML5</li>
                            <li>SQL</li>

                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mt-5">
                        <div className="box">
                        <div className="codeicon"><FontAwesomeIcon className="icons" icon={faAlignJustify} size="2x" /></div>

                        <h3>Libraries</h3>
                            <li>ReactJS</li>
                            <li>Node/ExpressJS</li>
                            <li>PostgresSQL</li>
                            
                        </div>
                    </div>

                    
                    <div className="col-md-3 col-sm-6 mt-5">
                        <div className="box">
                        <div className="codeicon"><FontAwesomeIcon className="icons" icon={faTools} size="2x" /></div>

                        <h3>Build/Test</h3>
                            <li>Git</li>
                            <li>Netlify</li>
                            <li>Heroku</li>
                            <li>Jest</li>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mt-5">
                        <div className="box">
                        <div className="codeicon"><FontAwesomeIcon className="icons" icon={faEdit} size="2x" /></div>

                            <h3>Design Tools</h3>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Premiere</li>

                        </div>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default Services
