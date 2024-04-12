import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import contactme from "../Assets/contactme.gif"
import roselogo from "../Assets/roselogo1.jpeg"

const Navbar = () =>{
    return(
        <Fragment>
            <div className="" style={{background: "linear-gradient(to top, rgb(38 24 47) 0%, rgb(64 29 53) 100%)" , borderRadius:"50px",margin:"15px"
}}>
            <div className="row d-flex align-items-center">
                <div className="col-md-3">
                    <img src={roselogo} alt="logo" width="100" height="80" style={{borderRadius:"50%"}}/>
                </div>
                <div className="col-md-6 offset-3 mt-3">
                <nav className="navbar nav d-block ">
                    <ul className="">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contactme'><img src={contactme} alt="contact_me" className="contactimg"/></Link></li>
                    </ul>
                </nav>
                </div>
             
            </div>

            </div>

        </Fragment>
    )
}

export default Navbar