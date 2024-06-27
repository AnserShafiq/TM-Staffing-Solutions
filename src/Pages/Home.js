import React from "react";
import './Styles/styles.css';

import HomeImg1 from '../Images/Home/home-img-1.jpg'
import Icon1 from '../Images/Icons/hiring-process.svg';
import Icon2 from '../Images/Icons/personalized-jobs.svg';
import Icon3 from '../Images/Icons/customized-recruitment.svg';


const HomePage = () =>{

    return(
        <section className="pageBody">
            {/* Home Section 1 */}
            <div className="section1 homeSection1">
                <div className="contentHomeSection1">
                    <h3 className="section1Heading">
                        We <span>empower</span> your team recruitment
                    </h3>
                    <div className="section1Btns">
                        <a href='wwww.google.com' alt='button' id="btn1"> Looking For A Job</a>
                        <a href='wwww.google.com' alt='button' id="btn2"> Looking To Hire</a>
                    </div>
                </div>
                <div className="imageHomeSection1">
                    <img src={HomeImg1} alt="HomeImageOne"/>
                </div>
            </div>
            {/* Home Section 2 */}
            <div className="sectionsize homeSection2">
                <div className="innerHomeSection2">
                <h2 className="headingHomeSection2">Redefining the standards of <br/>talent acquisition</h2>
                <p>
                TM Staffing Solutions leverages professional expertise to enable employers to recruit efficiently. We assist our clients in swiftly identifying top-tier talent and ensuring the best fit for their business needs through advanced search and selection methodologies. Our candidates are of exceptional quality. We confidently guarantee that we can source and deliver the finest talent available in today's market.                    
                </p>
                </div>
            </div>
            {/* Home Section 3 */}
            <div>
                <div className=" sectionsize homeSection3">
                    <div className="contentHomeSection3">
                        <h3>Specialized Talent Acquisition Professionals
                        </h3>
                        <p>Our Specialized Talent Acquisition Professionals excel in delivering tailored recruitment services to meet your unique organizational needs. With deep industry knowledge and advanced recruitment techniques, we identify and secure top-tier talent, ensuring the right fit for your roles.</p>
                    </div>
                    
                    <div className="imageHomeSection3 ">
                        <div  className="image image1"/>
                    </div>
                </div>

                <div className="sectionsize homeSection3 forMobileView">
                <div className="imageHomeSection3 ">
                        <div  className="image image2"/>
                    </div>
                    <div className="contentHomeSection3">
                        <h3>Customized Staffing Solutions with Professional Integrity
                        </h3>
                        <p>Our clients benefit from our unique combination of extensive resources, years of experience, and in-depth local expertise, all delivered in a professional and ethical manner. No matter what your staffing needs are, we will create a tailored solution to fit your requirements perfectly.
                        </p>
                    </div>
                </div>
                
                <div className="sectionsize homeSection3">
                    <div className="contentHomeSection3">
                        <h3>Industry-Leading Talent Sourcing
                        </h3>
                        <p>We utilize our comprehensive industry database and expansive network to source highly qualified professionals. Our dedicated team of subject matter experts meticulously identifies and selects the best candidates, ensuring they align with key industry requirements and standards. 
                        </p>
                    </div>
                    <div className="imageHomeSection3 ">
                        <div  className="image image3"/>
                    </div>
                </div>
            </div>

            {/* Home Section 4 */}
            <div className="sectionsize homeSection4">
                <div className="innerCard">
                    <img src={Icon1} alt='try' id='icon1'/>
                    <h4>Efficient Hiring <br/>Process</h4>
                    <h5>Streamlined recruitment process with quick turnaround times.
                    </h5>
                </div>
                <div className="innerCard">
                    <img src={Icon2} alt='try' id='icon1'/>
                    <h4>Personalized Job <br/>Matching</h4>
                    <h5>Tailored job recommendations based on individual skills and career aspirations.
                    </h5>
                </div>
                <div className="innerCard">
                    <img src={Icon3} alt='try' id='icon1'/>
                    <h4>Customizable Recruitment <br/>Strategies</h4>
                    <h5>Tailored hiring strategies to align with the company's specific goals and culture.
                    </h5>
                </div>
            </div>

            {/* Home Section 5 */}
            <div className="sectionsize homeSection5" >
                <div className="innerHomeSection2">
                <h2>24/7 Assistance for Your Hiring <br/>and Job Search Needs
                </h2>
                <p>If you have any questions or need guidance, please reach out. Whether you're an employer seeking to fill a position or a candidate searching for your next opportunity, we're here to support you.</p>
                <a href='/about-us' className="btnDownHome">Get In Touch</a>
            </div>
            </div>
        </section>
    );
}

export default HomePage;