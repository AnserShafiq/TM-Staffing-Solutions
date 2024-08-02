import React from "react";
import { FaFacebook as FB} from "react-icons/fa6";
import { FaRegCopyright as Copyright} from "react-icons/fa";
import { RiInstagramFill as Insta} from "react-icons/ri";
import { ImLinkedin as LinkedIn } from "react-icons/im";
import { MdOutlineMyLocation as Location  } from "react-icons/md";
import { BiPhoneCall as Contactus} from "react-icons/bi";
import { IoMailUnreadOutline as Emailus} from "react-icons/io5";



import './styling.css';

const Footer = () =>{
    
    return(
        <section className="footer">
            <div className="footerCardsSection">
                <div className="footerCard">
                    <Contactus className="footerIcon"/>
                    <div className="contactDetails">
                    <h3>Contact Us</h3>
                    <a href='tel:+16477674000'> 647-767-4000 </a>
                    </div>
                </div>
                <div className="footerCard">
                    <Emailus className="footerIcon" />
                    <div className="contactDetails">
                    <h3>E-Mail Us</h3>
                    <a href='tel:+16477674000'> info@tmstaffing.ca </a>
                    </div>
                </div>
                <div className="footerCard">
                    <Location className="footerIcon" />
                    <div className="contactDetails">
                    <h3>Office Location</h3>
                    <a href='tel:+16477674000'> 2980 Drew Rd, Unit# 112,<br/> Mississauga, ON, L4T0A7</a>
                    </div>
                </div>
            </div>
            <div className="socialIcons">
                <a href="https://www.facebook.com/" alt='facebookBtn'><FB/></a>
                <a href="https://www.facebook.com/" alt='facebookBtn'><Insta/></a>
                <a href="https://www.facebook.com/" alt='facebookBtn'><LinkedIn/></a>
            </div>
            <div className="footerTextLine">
                <h5><Copyright className="copyrightIcon"/>2013 TM Staffing Solutions. All Right Reserved.</h5>
            </div>
        </section>
    );
}
export default Footer;  