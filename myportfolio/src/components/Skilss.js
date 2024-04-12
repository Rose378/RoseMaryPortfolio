import React, { Fragment } from "react";
import html from "../Assets/html5.png";
import css from "../Assets/css.png"
import javascript from "../Assets/javascript.png"
import angular from "../Assets/angular.png"
import react from "../Assets/react.png"
import TS from "../Assets/typescript.png"
import jQuery from "../Assets/jquery1.png"

import node from "../Assets/nodejs.png"

const Skills = () => {
    return(
        <Fragment>
        
            <div className="container text-white" style={{marginBottom:"50px"}}>
                
                <hr style={{background:"white"}} className=""/>

                <div className="row mt-5" style={{display:"flex",alignItems:"center"}}>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-12" style={{display:"flex",justifyContent:"space-between"}}>
                                <div>
                                <img src={html} width={80} height={80}/>
                                <p>HTML5</p>
                                </div>
                                <div>
                                <img src={css} width={80} height={80}/>
                                <p>CSS</p>

                                </div>
                                <div>
                                <img src={angular} width={80} height={80}/>
                                <p>Angular</p>
                                </div>
                                <div>
                                <img src={TS} width={80} height={80}/>
                                <p>TypeScript</p>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5" style={{display:"flex",justifyContent:"space-between"}}>
                                <div>
                                <img src={javascript} width={80} height={80}/>
                                <p>JavaScript</p>
                                </div>
                                <div>
                                <img src={react} width={80} height={80}/>
                                <p>ReactJS</p>
                                </div>
                                <div>
                                <img src={node} width={80} height={80}/>
                                <p>NodeJS</p>
                                </div>
                                <div>
                                <img src={jQuery} width={80} height={80}/>
                                <p>jQuery</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-5">
                    <h2 className="">My Skills</h2>

                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Skills;