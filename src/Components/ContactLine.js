import React from "react";
import { LuClipboardList as ToLink} from "react-icons/lu";
import './styling.css';

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
                    <a href='/about-us' className="empBtn">For Employers</a>
                    <a href='/about-us' className="jsBtn">For Job Seekers</a>
                </div>
            </div>
    )
}
export default ContactLine;