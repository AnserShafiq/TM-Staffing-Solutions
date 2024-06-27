import React from "react";
import './Styles/services.css'
import './Styles/styles.css';
import ContactLine from "../Components/ContactLine";
import HL from '../Images/OurServices/heavyLifting.png';
import Health from "../Images/OurServices/health&Safety.png";
import WorkSpace from "../Images/OurServices/workplace.png";
import AODA from '../Images/OurServices/AODA.png';
import DP from '../Images/OurServices/drugPolicies.png';
import HACCP from '../Images/OurServices/haccp.png';


const OurServices = () =>{
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
                        <img src='https://img.freepik.com/free-photo/medium-shot-woman-measuring_23-2148815579.jpg?t=st=1718914508~exp=1718918108~hmac=5ea8d0a31ebed3b9e522c8ec4809af5484cd7598263d0f1f06e8bb97c5186b25&w=740' alt="temporary-placement"/>
                        <h3>Temporary Placements</h3>
                        <p>We specialize in temporary staffing solutions that provide your organization with the agility and efficiency to maintain productivity without the long-term commitment</p>
                        <a href='/about-us'>Apply now!</a>
                    </div>
                    <div className="modeCard">
                        <img src='https://img.freepik.com/free-photo/businessman-working-with-laptop-office_23-2148017076.jpg?t=st=1718916624~exp=1718920224~hmac=18d34fab90b50ffd11ad090ab2d2d12d93b34f28584999c48dfcaaea259a1b91&w=740' alt="permanent-placement"/>
                        <h3>Permanent Placements</h3>
                        <p>We specialize in identifying and placing the best candidates in permanent positions that align with your company's culture and long-term objectives</p>
                        <a href='/about-us'>Apply now!</a>
                    </div>
                    <div className="modeCard">
                        <img src='https://img.freepik.com/free-photo/thoughtful-business-woman-with-laptop-table_23-2148071526.jpg?t=st=1718981620~exp=1718985220~hmac=225119acfbe44f02ac42f76ef841cc2e1d3d6bdbb33b24bd062b19fec65cf9ac&w=740' alt="direct-hiring"/>
                        <h3>Direct Hiring</h3>
                        <p>We specialize in direct hiring solutions that ensure your company gains access to the best talent available, matched precisely to your organizational needs.</p>
                        <a href='/about-us'>Apply now!</a>
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