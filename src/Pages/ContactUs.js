import React, { useState } from "react";
import './Styles/styles.css';
import './Styles/contactus.css';

const ContactUs = () => {
    const ourMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.0000480335148!2d-79.65493602395628!3d43.710548071099524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c07b0bb498f%3A0x7f6d23cd91e30a94!2s2980%20Drew%20Rd%20Unit%20%23%20112%2C%20Mississauga%2C%20ON%20L4T%204E5%2C%20Canada!5e0!3m2!1sen!2s!4v1719255223368!5m2!1sen!2s';
    const [contactForm, setContactForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            let newValue = value.replace(/\D/g, '');
            if (newValue.length > 10) {
                newValue = newValue.slice(0, 10);
            }
            newValue = newValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            setContactForm((prev) => ({
                ...prev,
                [name]: newValue,
            }));
        } else {
            setContactForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const formSubmission = async (e) => {
        e.preventDefault();
        const data = {
            FullName: contactForm.fullName,
            EMail: contactForm.email,
            PhoneNumber: contactForm.phone,
            Reason: contactForm.reason,
            Message: contactForm.message
        };

        try {
            const response = await fetch('https://formspree.io/f/mblrllvv', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setContactForm({
                    fullName: '',
                    email: '',
                    phone: '',
                    reason: '',
                    message: '',
                });
            } else {
                // alert('Submission failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Submission failed.');
        }
    };

    return (
        <section className="pageBody">
            <div className="section1 section1ContactUs">
                <div className="section1LeftSide">
                    <h2 className="sectionHeading">How can we help?</h2>
                    <h3 className="contactsHead">E-Mail</h3>
                    <h3 className="contactsTarget"><a href="mailto:info@tmstaffing.ca">info@tmstaffing.ca</a></h3>
                    <h3 className="contactsHead">Phone</h3>
                    <h3 className="contactsTarget"><a href="tel:+16477674000">(647) 767 - 4000</a></h3>
                </div>
                <div className="section1RightSide" id='forDesktopView'>
                    <form
                        onSubmit={formSubmission}
                        className="contactForm"
                    >
                        <div className="entrySection">
                            <label className="inputHeading">Full Name:</label>
                            <input
                                className="contactFormInput"
                                onChange={handleChange}
                                value={contactForm.fullName}
                                type="text"
                                name="fullName"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="entrySection">
                            <label className="inputHeading">E-Mail Address:</label>
                            <input
                                className="contactFormInput"
                                type="email"
                                placeholder="Your E-Mail"
                                onChange={handleChange}
                                value={contactForm.email}
                                name="email"
                                required
                            />
                        </div>
                        <div className="entrySection">
                            <label className="inputHeading">Contact Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                className="contactFormInput"
                                placeholder="Your Contact Number"
                                onChange={handleChange}
                                value={contactForm.phone}
                                required
                            />
                        </div>
                        <div className="entrySection">
                            <label className="inputHeading">Reason For Contact Us</label>
                            <div className="pointSection">
                                <input
                                    type="radio"
                                    name="reason"
                                    className="contactFormPointer"
                                    value="Want to get some details."
                                    checked={contactForm.reason === "Want to get some details."}
                                    onChange={handleChange}
                                /><h5>Want To Get Some Details</h5>
                            </div>
                            <div className="pointSection">
                                <input
                                    type="radio"
                                    name="reason"
                                    className="contactFormPointer"
                                    value="For some general questions."
                                    checked={contactForm.reason === "For some general questions."}
                                    onChange={handleChange}
                                /> <h5>For Some General Questions</h5>
                            </div>
                        </div>
                        <div className="messageAndBtn">
                            <label className="inputHeading">Message:</label>
                            <textarea
                                type="text"
                                placeholder="Any message you like to leave..."
                                value={contactForm.message}
                                onChange={handleChange}
                                name="message"
                                className="messageSection contactFormInput"
                                required
                            />
                            <button type="submit" value='Submit' className="">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id='forMobileView'>
                <div className="section1RightSide">
                    <form
                        onSubmit={formSubmission}
                        className="contactForm"
                    >
                        <div className="entrySection">
                            <label className="inputHeading">Full Name:</label>
                            <input
                                className="contactFormInput"
                                onChange={handleChange}
                                value={contactForm.fullName}
                                type="text"
                                name="fullName"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="entrySection">
                            <label className="inputHeading">E-Mail Address:</label>
                            <input
                                className="contactFormInput"
                                type="email"
                                placeholder="Your E-Mail"
                                onChange={handleChange}
                                value={contactForm.email}
                                name="email"
                                required
                            />
                        </div>
                        <div className="entrySection">
                            <label className="inputHeading">Contact Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                className="contactFormInput"
                                placeholder="Your Contact Number"
                                onChange={handleChange}
                                value={contactForm.phone}
                                required
                            />
                        </div>
                        <div className="entrySection">
                            <label className="inputHeading">Reason For Contact Us</label>
                            <div className="pointSection">
                                <input
                                    type="radio"
                                    name="reason"
                                    className="contactFormPointer"
                                    value="Want to get some details."
                                    checked={contactForm.reason === "Want to get some details."}
                                    onChange={handleChange}
                                /><h5>Want To Get Some Details</h5>
                            </div>
                            <div className="pointSection">
                                <input
                                    type="radio"
                                    name="reason"
                                    className="contactFormPointer"
                                    value="For some general questions."
                                    checked={contactForm.reason === "For some general questions."}
                                    onChange={handleChange}
                                /> <h5>For Some General Questions</h5>
                            </div>
                        </div>
                        <div className="messageAndBtn">
                            <label className="inputHeading">Message:</label>
                            <textarea
                                type="text"
                                placeholder="Any message you like to leave..."
                                value={contactForm.message}
                                onChange={handleChange}
                                name="message"
                                className="messageSection contactFormInput"
                                required
                            />
                            <button type="submit" value='Submit' className="">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="sectionsize section2ContactUs">
                <h2 className="section2Head">Meet Us At</h2>
                <h3 className="officeAddress">2980 Drew Rd. Unit 112, Mississauga, ON L4T 0A7</h3>
                <iframe src={ourMap} title="Office Address On MAP" className="officeLocationMap" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}

export default ContactUs;
