import React from "react";
import './Styles/services.css'
import './Styles/styles.css';
import ContactLine from "../Components/ContactLine";
import Placement1 from '../Images/OurServices/services-placement-1.jpg';
import Placement2 from '../Images/OurServices/services-placement-2.jpg';
import Placement3 from '../Images/OurServices/services-placement-3.jpg';
import HL from '../Images/OurServices/heavyLifting.png';
import Health from "../Images/OurServices/health&Safety.png";
import WorkSpace from "../Images/OurServices/workplace.png";
import AODA from '../Images/OurServices/AODA.png';
import DP from '../Images/OurServices/drugPolicies.png';
import HACCP from '../Images/OurServices/haccp.png';
import { NavLink } from "react-router-dom";


const OurServices = () =>{
    const displayFormButtons = (event) => {
        const card = event.currentTarget.closest('.modeCard');
        const toDisplayBtns = card.getElementsByClassName('hiddenButton');
        const toHideBtn = card.getElementsByClassName('actionCallBtn');

        for (let i = 0; i < toDisplayBtns.length; i++) {
            toDisplayBtns[i].style.display = 'flex';
        }
        
        for (let i = 0; i < toHideBtn.length; i++) {
            toHideBtn[i].style.display = 'none';
        }
    }
    return(
        <section className="pageBody">
            {/* Section 1 */}
            <div className="section1 servicesSection1">
                <div className="textSection1">
                    <h2>Consistent <span>&</span></h2>
                    <h2>Professional</h2>
                    <h2><span>Collaboration</span></h2>
                </div>
            </div>
            {/* Section 2 */}
            <div className="sectionsize servicesSection2">
                <div className="section2Body">
                    <h2>A Decade of Industry-Specific Staffing Solutions</h2>
                    <p>A proven track record of providing manpower services for over a decade. We are experts in serving various industries, from energy and utilities to marketing and sales. Our approach involves understanding the unique requirements and challenges of each sector and delivering tailored staffing solutions that drive success.<span className="toHideInMobile"> Our dedication to excellence ensures that our clients always receive the best possible service and support. </span></p>
                </div>
                <div className="section2Body2">
                    <div className="section2Body2Inner1">
                        <h2>Business Spheres We Operates</h2>
                    </div>
                    <div className="section2Body2Inner2">
                        <div className="sliderCard manufacturing">
                            <h4>Manufacturing</h4>
                            <h5>Industry</h5>
                        </div>
                        <div className="sliderCard automotive">
                        <h4>Automotive</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard food">
                            <h4>Food</h4>
                            <h5>Industry</h5>
                        </div>
                        <div className="sliderCard construction" >
                        <h4>Construction</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard packaging">
                        <h4>Packaging</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard transportation">
                        <h4>Transportation</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard warehouse">
                        <h4>Warehouse</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard pharmaceutical">
                        <h4>Pharmaceutical</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard mining">
                        <h4>Mining</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard aerospace">
                        <h4>Aerospace</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard textile">
                        <h4>Textile</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard electronics">
                        <h4>Electronics</h4>
                        <h5>Industry</h5>
                        </div>
                        <div className="sliderCard logistics">
                        <h4>Logistics</h4>
                        <h5>Industry</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Line */}
            <ContactLine />

            {/* Section 3 */}
            <div className="sectionsize servicesSection3">
                <h2>Types Of Mode We Provides</h2>
                <div className="modesDisplay">
                    <div className="modeCard">
                        <img src={Placement1} alt="temporary-placement"/>
                        <h3>Temporary Placements</h3>
                        <p>We specialize in temporary staffing solutions that provide your organization with the agility and efficiency to maintain productivity without the long-term commitment</p>
                        <button className='actionCallBtn'  onClick={displayFormButtons}>Apply now!</button>
                        <NavLink className='hiddenButton' to='/employers-application'>Looking For Candidates?</NavLink>
                        <NavLink className='hiddenButton' to='/job-seekers-application'>Looking For Job?</NavLink>
                    </div>
                    <div className="modeCard">
                        <img src={Placement2} alt="permanent-placement"/>
                        <h3>Permanent Placements</h3>
                        <p>We specialize in identifying and placing the best candidates in permanent positions that align with your company's culture and long-term objectives</p>
                        <button className='actionCallBtn'  onClick={displayFormButtons}>Apply now!</button>
                        <NavLink className='hiddenButton' to='/employers-application'>Looking For Candidates?</NavLink>
                        <NavLink className='hiddenButton' to='/job-seekers-application'>Looking For Job?</NavLink>
                    </div>
                    <div className="modeCard">
                        <img src={Placement3} alt="direct-hiring"/>
                        <h3>Direct Hiring</h3>
                        <p>We specialize in direct hiring solutions that ensure your company gains access to the best talent available, matched precisely to your organizational needs.</p>
                        <button className='actionCallBtn'  onClick={displayFormButtons}>Apply now!</button>
                        <NavLink className='hiddenButton' to='/employers-application'>Looking For Candidates?</NavLink>
                        <NavLink className='hiddenButton' to='/job-seekers-application'>Looking For Job?</NavLink>
                    </div>
                </div>

            </div>

            {/* Section 4 */}
            <div className="sectionsize servicesSection4">
                <div className="innerSection4">
                    <h2>Tailored Training and Orientation Solutions</h2>
                    <p>We believe in ensuring that our candidates are fully prepared and confident from day one of their work assignments. This intensive training equips candidates with the in-depth knowledge and skills essential for their roles.</p>
                    <h3 className="iconsListHeading">Workplace Hazardous Materials Information System: </h3>
                    <div className="innerIcons">
                        <div className="innerIconsBody">
                            <i><img src={HL} alt="heavy-lifting" className="section4IconsImg"/></i>
                            <h3>Heavy Lifting</h3>
                        </div>
                        <div className="innerIconsBody">
                        <i><img src={Health} alt="Health&Safety" className="section4IconsImg"/></i>
                            <h3>4-Step Heatlh & Safety</h3>
                        </div>
                        <div className="innerIconsBody">
                        <i><img src={WorkSpace} alt="WokrplaceHarassment" className="section4IconsImg"/></i>
                            <h3>Workplace Harassment</h3>
                        </div>
                    </div>
                    <h3 className="iconsListHeading">Good Manufacturing Practices: </h3>
                    <div className="innerIcons">
                        <div className="innerIconsBody">
                        <i><img src={AODA} alt="AODA" className="section4IconsImg"/></i>
                            <h3>AODA</h3>
                        </div>
                        <div className="innerIconsBody">
                        <i><img src={DP} alt="Drugs Policy" className="section4IconsImg"/></i>
                            <h3>Drug Policy</h3>
                        </div>
                        <div className="innerIconsBody">
                        <i><img src={HACCP} alt="HACCP" className="section4IconsImg"/></i>
                            <h3>HACCP</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;