import React, { Fragment } from "react";
import landingimage from "../Assets/landingImage2.gif"
import Skills from "./Skilss"
import About from "./About";
import Contact from "./Contact";
import linkedin from "../Assets/linkedin.svg"
import github from "../Assets/github.svg"

import { Link } from "react-router-dom";
const Home = () => {

    const LinkedinUrl = 'https://www.linkedin.com/in/rosemary-k-401a0729a/';
    const GitHubUrl = 'https://github.com/Rose378'
    return(
        <Fragment>
            <div className="container text-white" style={{marginTop:"60px" , marginBottom:"50px"}}>
                <div className="row" style={{display:"flex" , alignItems:"center"}}>
                    <div className="col-md-7" style={{textAlign:"left"}}>
                        <p style={{fontFamily:"monospace"}}>User Interface UI Developer</p>
                        <h1 style={{fontSize:"100px"}}>RoseMary<br/>Katikala</h1>
                        <div className="paragraph-container">
                            <div className="verticalline"></div> {/* Vertical line */}
                             <p className="p1 mt-3">
                             Iam a UI Web Developer<br/> and remotely work from <br/>Telangana
                            </p>                      
                        </div>
            
                        <div>
                        <Link to={LinkedinUrl} target="_blank"><img src={linkedin} width={30} height={30}/></Link>
                        <Link to={GitHubUrl} target="_blank"><img src={github} width={30} height={30}/></Link>

                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <img src={landingimage} alt="landimg" style={{borderRadius:"100% 100% 100% 0" , width:"500px"}}/>
                    </div>
                </div>
               
            </div>
            <About/>
            <Skills/>
            <Contact/>
        </Fragment>

        
    )
}

export default Home