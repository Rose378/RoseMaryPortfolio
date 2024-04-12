import React, { Fragment } from "react";

const Contact = () => {
    return(
        <Fragment>
            <div className="container mt-5">
            <hr style={{background:"white"}} className=""/>
            <div className="card col-md-6 offset-3">
                <div className="card-header">
                <h3 className="mt-5">Contact Mee</h3>

                </div> 
                <div className="card-body">
                <form className="mt-5 text-left align-center">
                <div class="form-group" className="" style={{display:"grid"}}>
                    <label for="name">FullName</label>
                    <input type="text" class="form-control" className="ipfields" id="name" placeholder="FullName"/>
             </div>
                <div class="form-group" className="mt-5" style={{display:"grid"}}>
                    <label for="email">Email address</label>
                     <input type="email" class="form-control" id="email" className="ipfields" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                 </div>
                 <div class="form-group" className="mt-5" style={{display:"grid"}}>
                    <label for="textarea">Message</label>
                     <textarea type="email" class="form-control" id="textarea" rows={5} className="" aria-describedby="emailHelp" placeholder=""/>
                 </div>
            
                  
                </form>
                    <button type="submit" className="btn btn-success mt-5">Submit</button>
                </div>
            </div>
            

            </div>
        </Fragment>
    )
}

export default Contact