import React from "react";
import { LuClipboardList as ToLink} from "react-icons/lu";
import './styling.css';
import { NavLink } from "react-router-dom";

const ContactLine =() =>{
    return(
        <div className="sectionsize contactLine">
                <div className="textFlex">
                    <h2 className="toLink"><ToLink /></h2>
                    <div className="textLine">
                        <h3>Let's Get Linked</h3>
                        <h5>Our experts can assist you with unique solutions to overcome your needs uniquely</h5>
                    </div>
                    
                </div>
                <div className="btnsFlex">
                    <NavLink to='/employers-application' className="empBtn">For Employers</NavLink>
                    <NavLink to='/job-seekers-application' className="jsBtn">For Job Seekers</NavLink>
                </div>
            </div>
    )
}
export default ContactLine;