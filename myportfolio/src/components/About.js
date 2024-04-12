import React, { Fragment, useState } from "react";
import readmore from "../Assets/arrow.gif"
const About = () => {


    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
      };

    return(
        <Fragment>
            <div className="container mt-5">
            <hr style={{background:"white"}} className=""/>
            <div className="row text-white d-flex align-items-center">
                <div className="col-md-3">
                    <h3>About ME</h3>
                </div>
                <div className="col-md-8 offset-1 " style={{ display: 'inline-block' }}>
                        <p className="text-left mt-3">
                                        Hello, my name is RoseMary, and I am a UI developer. With 2 years of experience in web development, I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React and Angular. <br/><br/>I am passionate about creating intuitive user interfaces that provide an exceptional user experience. I pay great attention to detail, ensuring that the websites or applications I develop are responsive, visually appealing, and accessible across different devices and browsers.<br/><br/>
                                        Moving to the back end, I am proficient in server-side languages like  Node.js and Express.js.</p>
                        {!isCollapsed  && 
                        (<p className="text-left">
                                       I have little experience working with databases such as MySQL and MongoDB, and I can design efficient database schemas ans store the data in my collections.I am familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.<br/><br/>Additionally, I have expertise in version control systems like Git, and I’m comfortable working in collaborative environments using Agile methodologies. I enjoy staying up to date with the latest trends and technologies in the web development world, as it allows me to continually improve my skills and deliver cutting-edge solutions.<br/><br/>Throughout my career, I have had the opportunity to work on various projects. I thrive in dynamic environments where I can tackle challenges, collaborate with cross-functional teams, and deliver high-quality solutions that meet both user requirements and business objectives.I am excited to be part of a team where I can contribute my UI development skills and help create innovative and impactful applications. Thank you for considering me, and I look forward to discussing how I can contribute to your organisation.
            </p>)}        
            <p onClick={toggleCollapse} style={{ float:"right" , cursor:"pointer"}}>
        {isCollapsed ? 
        <div style={{display:"flex" , alignItems:"center"}}>
            <img src={readmore} width={50} height={30}/>
            Read More...

        </div>
       : 'Read Less'}
        </p>   
                
                </div>
     
            </div>
      

                 
            </div>
        </Fragment>
    )
}

export default About