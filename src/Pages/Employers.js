import React from "react";
import './Styles/employers.css';
import './Styles/styles.css';
import ElementOne from '../Images/Employers/emp-element-one.png';
import ElementTwo from '../Images/Employers/emp-element-two.png';
import ElementThree from '../Images/Employers/emp-element-three.png';

const Employers = () =>{
    return(
        <section className="pageBody">
            {/* Section 1 */}
            <div className="section1 section1Employers">
                <h2 className="forDesktopOnly">High-Value Services &<br/> <span>Long-Term Benefits </span><br/>at Affordable Costs</h2>
                <h2 className="forMobileOnly">High-Value Services And <span>Long-Term Benefits </span>at Affordable Costs</h2>
            </div>
            {/* Section 2 */}
            <div className="sectionsize section2Employers empBgOne">
                <div className="sectionContent">
                    <h3 className="elementSectionHead">Strategic Cost Management</h3>
                    <p className="elementSectionDesc">Strategic cost management initiatives are essential for optimizing your operations, enhancing efficiency, and delivering substantial time and cost savings. These initiatives focus on streamlining processes through a combination of innovative approaches and best practices.</p>
                    <a href="/employers" alt='employers-form' className="formCallBtn">Let's Connect </a>
                </div>
                <img src={ElementOne} className="empElement" alt="element-one"/>
            </div>
            {/* Section 3 */}
            <div className="sectionsize section2Employers empBgTwo">
                <img src={ElementTwo} className="empElement" alt="element-two"/>
                <div className="sectionContent">
                    <h3 className="elementSectionHead leftAlign">Comprehensive Support Services</h3>
                    <p className="elementSectionDesc leftAlign">Our team provides ongoing and personalized support, designed to cater to your specific requirements, guaranteeing consistent help and guidance whenever you need it.</p>
                    <a href="/employers" alt='employers-form' className="formCallBtn leftAlign">Let's Connect </a>
                </div>
            </div>
            {/* Section 4 */}
            <div className="sectionsize section2Employers empBgThree">
                <div className="sectionContent">
                    <h3 className="elementSectionHead">In-Depth & Extensive Training Curriculum</h3>
                    <p className="elementSectionDesc">Our in-depth and extensive training curriculum is meticulously crafted to ensure that candidates are fully prepared. We equip individuals with the knowledge, skills, and confidence required to meet and exceed job expectations, paving the way for their professional success.</p>
                    <a href="/employers" alt='employers-form' className="formCallBtn">Let's Connect </a>
                </div>
                <img src={ElementThree} className="empElement" alt="element-three"/>
            </div>
            {/* Section 5 */}
            <div className="sectionsize section5Employers">
                <div className="centeredContent">
                    <h5>Looking for the perfect options?</h5>
                    <h2>From Us, You Can Get</h2>
                    {/* Line 1 */}
                    <div className="industryBlocks">
                        <div className="industryCard manufacturing" onClick={()=>{
                        window.location.href = 'https://www.google.com'
                        }}>
                            <h3 className="cardIndustryName">Manufacturing</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard automotive">
                            <h3 className="cardIndustryName">Automotive</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard food">
                            <h3 className="cardIndustryName">Food</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard construction">
                            <h3 className="cardIndustryName">Construction</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard packaging forDesktopOnly">
                            <h3 className="cardIndustryName">Packaging</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>

                    </div>
                    {/* Line 2 */}
                    <div className="industryBlocks">
                    <div className="industryCard packaging forMobileOnly">
                            <h3 className="cardIndustryName">Packaging</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard transportation">
                            <h3 className="cardIndustryName">Transportation</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard warehouse">
                            <h3 className="cardIndustryName">Warehouse</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard pharmaceutical">
                            <h3 className="cardIndustryName">Pharmaceutical</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard mining forDesktopOnly">
                            <h3 className="cardIndustryName">Mining</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                    </div>
                    {/* Line 3 */}
                    <div className="industryBlocks">
                        {/* Manufacturing */}
                        <div className="industryCard mining forMobileOnly">
                            <h3 className="cardIndustryName">Mining</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard aerospace">
                            <h3 className="cardIndustryName">Aerospace</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard textile">
                            <h3 className="cardIndustryName">Textile</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                        <div className="industryCard electronics">
                            <h3 className="cardIndustryName">Electronics</h3>
                            <h3 className="cardIndustryWord">Industry</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 6 */}
            <div className="sectionsize section6Employers">
                <div className="cardsContent">
                    <h3 className="cardHeading">Seeking Exceptional Talent to Propel Your Business Forward?</h3>
                    <h3 className="cardTagline">
                    Join Forces With Us to Attract Premier Talent and Unlock Growth and Success Potential.
                    </h3>
                    <a href="/" alt='formCallBtn2' className="cardButton">To Apply For Services</a>
                </div>
            </div>
        </section>
    );
}

export default Employers;