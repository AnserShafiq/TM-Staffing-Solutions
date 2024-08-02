import React from "react";
import './Styles/job-seekers.css';
import './Styles/styles.css';
import { FaArrowRightLong as Right} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const JobSeekers = () =>{
    return(
        <section className="pageBody">
            {/* Section 1 */}
            <div className="section1 section1JS">
                <h2 className="forDesktopOnly">Providing Professional <span>Growth, & Empowering</span>Your Path to Success</h2>
                <h2 className="forMobileOnly">Providing Professional <span>Growth, & Empowering</span>Your Path to Success</h2>
            </div>
            {/* Section 2 */}
            <div className="sectionsize section2JS">
                <div className="section2Content">
                    <h5 className="contentSubHeading">Benefits offered to facilitate success</h5>
                    <h2 className="contentHeading forDesktopOnly">Pathways Personalized to Align with Your Individual Strengths & Goals</h2>
                    <h2 className="contentHeading forMobileOnly">Tailored pathways to match your strengths & goals</h2>
                    <p className="contentDesc">We understand that each individual has unique talents and career aspirations. Our personalized career pathways are meticulously designed to align with your strengths and professional objectives. We offer tailored guidance and support to help you navigate your career journey effectively.</p>
                </div>
            </div>
            {/* Section 3 */}
            <div className=" sectionsize section3JS section3BgOne">
                <div className="sectionInnerContentLeft">
                    <h3 className="sidedContentHeading">Personalized Job Matching</h3>
                    <p className="sidedContentDesc">We offers tailored job matching services to ensure you are connected with opportunities that align with your skills, experience, and career aspirations. We take the time to understand your unique strengths and goals, providing you with job recommendations that are the perfect fit for your professional journey.</p>
                    <a href='/job-seekers' alt='JS-Button-For-Application' className="jsAppButton">To Get Enrolled</a>
                </div>
            </div>
            <div className=" sectionsize section3JS section3BgTwo">
                <div className="sectionInnerContent">
                    <h3 className="sidedContentHeading">Career Development Support</h3>
                    <p className="sidedContentDesc">Our comprehensive career development support includes resume building, interview coaching, and skill enhancement workshops. We are committed to helping you present your best self to potential employers and advance your career. With our guidance, you'll be well-prepared to navigate the job market and achieve your career objectives.</p>
                    <NavLink to='/job-seekers' alt='JS-Button-For-Application' className="jsAppButton">To Get Enrolled</NavLink>
                </div>
            </div>
            <div className=" sectionsize section3JS section3BgThree">
                <div className="sectionInnerContentLeft">
                    <h3 className="sidedContentHeading">Access to Exclusive Opportunities</h3>
                    <p className="sidedContentDesc">You gain access to a wide range of exclusive job opportunities that are not publicly advertised. Our extensive network of industry connections allows us to connect you with top-tier employers seeking qualified professionals like you. This gives you a competitive edge in finding the perfect job that matches your ambitions.</p>
                    <NavLink to='/job-seekers-application' alt='JS-Button-For-Application' className="jsAppButton">To Get Enrolled</NavLink>
                </div>
            </div>
            {/* Section 4 */}
            <div className="sectionsize section4JS">
                <h2 className="section4Heading">Our Implementation Process</h2>
                <div className="IP-Steps">
                    <div className="stepBody">
                        <h3 className="stepName">Step 1</h3>
                        <h3 className="stepTitle">Initial Contact</h3>
                        <h3 className="stepDesc">Share your requirements with us by <NavLink href="/job-seekers-application" className="applicationBtn">Submitting a Request Form</NavLink> to initiate the process.</h3>
                    </div>
                    <Right className="nextArrow"/>
                    <div className="stepBody">
                        <h3 className="stepName">Step 2</h3>
                        <h3 className="stepTitle">Options Sharing</h3>
                        <h3 className="stepDesc">Searches, screening, and providing a curated list of top job matches tailored to your profile.</h3>
                    </div>
                    <Right className="nextArrow" />
                    <div className="stepBody">
                        <h3 className="stepName">Step 3</h3>
                        <h3 className="stepTitle">Interview Scheduling</h3>
                        <h3 className="stepDesc">We organize and facilitate interviews, aiding you through the process to secure job offers.</h3>
                    </div>
                    <Right className="nextArrow" />
                    <div className="stepBody">
                        <h3 className="stepName">Step 4</h3>
                        <h3 className="stepTitle">Successful Joining</h3>
                        <h3 className="stepDesc">Finalize your job placement and rely on us for a smooth onboarding experience.</h3>
                    </div>
                    
                </div>
            </div>
            {/* Section 5 */}
            <div className="sectionsize section5JS section6Employers">
                <div className="cardsContent">
                    <h3 className="cardHeading">Experiencing Difficulty in Achieving Your Career Aspirations?</h3>
                    <h3 className="cardTagline">
                    Join us in connecting with top employers & unlocking new opportunities for growth & success!
                    </h3>
                    <NavLink to="/job-seekers-application" alt='formCallBtn2' className="cardButton">To Apply For Jobs</NavLink>
                </div>
            </div>
        </section>
    );
}

export default JobSeekers;