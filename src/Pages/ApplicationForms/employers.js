import React, { useState } from "react";
import './applicationStyle.css';
import emailjs from 'emailjs-com';
import poster from '../../Images/Employers/forEmpForm.png';
// Initialize emailjs with your user ID
emailjs.init('Kc3iXCbqXBmVgyEGG');

export default function EmpApp() {
    const [datePicked, setDatePicked] = useState({
        month: '', day: '', year: ''
    });

    const [employersRequest, setEmployersRequest] = useState({
        companyName: '',
        address: '',
        companyContact: '',
        companyEmail: '',
        applicantName: '',
        applicantContact:'',
        applicantEmail: '',
        applicantJobPost: '',
        targetIndustry: '',
        numberOfCandidatesNeeded: '',
        targetDate:'',
    })
    const setSpecificValue = (key, value) => {
        setEmployersRequest((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleDateChange = (event, parent) => {
        const { name, value } = event.target;
        setDatePicked((prev) => ({
            ...prev,
            [name]: value,
        }));
        const updatedDate = { ...datePicked, [name]: value };
        const allFieldsFilled = Object.values(updatedDate).every(field => field !== '');

        if (allFieldsFilled) {
            const formattedDate = `${updatedDate.day} / ${updatedDate.month} / ${updatedDate.year}`;
            setSpecificValue(parent, formattedDate);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'applicantContact' || name === 'companyContact') {
            let newValue = value.replace(/\D/g, '');
            // Limit to 10 digits
            if (newValue.length > 10) {
                newValue = newValue.slice(0, 10);
            }
            // Format as (###) ###-####
            newValue = newValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            setEmployersRequest((prev) => ({
                ...prev,
                [name]: newValue,
            }));
        } else {
            setEmployersRequest((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const applicationDone = (e) => {
        e.preventDefault();
        console.log('about to send email');

        const templateParams = {
            companyName: employersRequest.companyName,
            address: employersRequest.address,
            companyContact: employersRequest.companyContact,
            companyEmail: employersRequest.companyEmail,
            applicantName: employersRequest.applicantName,
            applicantContact: employersRequest.applicantContact,
            applicantEmail: employersRequest.applicantEmail,
            applicantJobPost: employersRequest.applicantJobPost,
            targetIndustry: employersRequest.targetIndustry,
            numberOfCandidatesNeeded: employersRequest.numberOfCandidatesNeeded,
            targetDate: employersRequest.targetDate,
        };

        try {
            emailjs.send('service_fok07fq', 'template_zjwmgoc', templateParams, 'Kc3iXCbqXBmVgyEGG')
                .then((response) => {
                    console.log('Success!', response.status, response.text);
                    window.location.reload();
                }, (error) => {
                    console.log('Error => ', error);
                    window.location.reload();
                });
            
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section>
            <div >
                <div className="sectionsize section2JSForm">
                    <img src={poster} className="posterImg" alt='JobSeekersForm'/>
                    <h2>Employers Demand Form</h2>
                    <h4>Please fill out the form given below</h4>
                </div>
                <form method="post" onSubmit={applicationDone} className="formBody">
                    <h3 className="mainHeading">Company's Information</h3>
                    <div className="blocksDisplay">
                        <div className="contentBody halfDisplay" >
                            <label className="subHeading">Company Name</label>
                            <input className=' dataEntrySection' type='text' onChange={handleChange} value={employersRequest.companyName} name="companyName" placeholder="Enter company's name" required />
                        </div>
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Company's Address</label>
                            <input className=' dataEntrySection' type='text' onChange={handleChange} value={employersRequest.address} name="address" placeholder="Enter company's address" required />
                        </div>
                        
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Company's E-Mail</label>
                            <input className=' dataEntrySection' type='email' onChange={handleChange} value={employersRequest.companyEmail} name="companyEmail" placeholder="Enter company's E-Mail" required />
                        </div>
                        
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Company's Contact Number</label>
                            <input className=' dataEntrySection' type='text' onChange={handleChange} value={employersRequest.companyContact} name="companyContact" placeholder="Enter company's contact" required />
                        </div>
                    </div>
                    <h3 className="mainHeading">Personal Information</h3>
                    <div className="blocksDisplay">
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Your Name</label>
                            <input className=' dataEntrySection' type='text' onChange={handleChange} value={employersRequest.applicantName} name="applicantName" placeholder="Enter your name" required />
                        </div>
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Job Post</label>
                            <input className=' dataEntrySection' type='text' onChange={handleChange} value={employersRequest.applicantJobPost} name="applicantJobPost" placeholder="Enter your job post" required />
                        </div>
                        
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">E-Mail</label>
                            <input className=' dataEntrySection' type='email' onChange={handleChange} value={employersRequest.applicantEmail} name="applicantEmail" placeholder="Enter your E-Mail" required />
                        </div>
                        
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Contact Number</label>
                            <input className=' dataEntrySection' type='text' onChange={handleChange} value={employersRequest.applicantContact} name="applicantContact" placeholder="Enter your contact" required />
                        </div>
                    </div>
                    <h3 className="mainHeading">Candidates Requirement</h3>
                    <div className="blocksDisplay">
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Industry you deals</label>
                            <select  className='dataEntrySection' name="targetIndustry" required value={employersRequest.targetIndustry} onChange={handleChange} >
                                <option value=''>Select Industry</option>
                                <option value='Manufacturing'>Manufacturing</option>
                                <option value='Automotive'>Automotive</option>
                                <option value='Food'>Food</option>
                                <option value='Construction'>Construction</option>
                                <option value='Packaging'>Packaging</option>
                                <option value='Transportation'>Transportation</option>
                                <option value='Warehouse'>Warehouse</option>
                                <option value='Pharmaceutical'>Pharmaceutical</option>
                                <option value='Mining'>Mining</option>
                                <option value='Aerospace'>Aerospace</option>
                                <option value='Textile'>Textile</option>
                                <option value='Electronic'>Electronic</option>
                                <option value='Logistics'>Logistics</option>
                            </select>
                        </div>
                        <div className="contentBody halfDisplay">
                            <label className="subHeading">Amount Of Candidates Required</label>
                            <input className=' dataEntrySection' type='number' onChange={handleChange} value={employersRequest.numberOfCandidatesNeeded} name="numberOfCandidatesNeeded" placeholder="Enter count of candidates needed" required />
                        </div>
                        <div className="contentBody employersDate">
                            <label className="subHeading">Targeted Date For Hiring</label>
                            <div  className='datesDiv'>
                        {/* Month */}
                        <select  className='dataEntrySection' id="month" name="month" required value={datePicked.month} onChange={(e) => handleDateChange(e,'targetDate')}>
                            <option value="">Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        {/* Day */}
                        <select className='dataEntrySection' id="day" name="day" value={datePicked.day} required onChange={(e) => handleDateChange(e,'targetDate')}>
                            <option value="">Day</option>
                            {/* Generate days dynamically */}
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        {/* Year */}
                        <select className='dataEntrySection' id="year" name="year" value={datePicked.year} onChange={(e) => handleDateChange(e,'targetDate')} required>
                            <option value="">Year</option>
                            {/* Generate years dynamically */}
                            {Array.from({ length: 100 }, (_, i) => (
                                <option key={i} value={String(2024 - i)}>
                                    {2024 - i}
                                </option>
                            ))}
                        </select>
                    </div>
                        </div>
                    </div>
                    <button type="submit" className="submitBtn">Submit Application</button>
                </form>
            </div>
        </section>
    );
}
