import React, { useState } from "react";
import './applicationStyle.css';
import emailjs from 'emailjs-com';
import poster from '../../Images/JobSeekers/forJSForm.png';
// Initialize emailjs with your user ID
emailjs.init('Kc3iXCbqXBmVgyEGG');

export default function JsApp() {
    // const [datePicked, setDatePicked] = useState({
    //     month: '', day: '', year: ''
    // });
    const [dateOfBirth, setDateOfBirth] = useState({
        month: '', day: '', year: ''
    });
    const [availabilityDate, setAvailabilityDate] = useState({
        month: '', day: '', year: ''
    });
    const [fullName, setFullName] = useState({
        firstName: '', lastName: ''
    });

    const [address, setAddress] = useState({
        address: '', city: '', state: '', postalCode: '',
    });

    const [candidateData, setCandidateData] = useState({
        applicantName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        legalStatus: '',
        degreeOne: '',
        instituteOne: '',
        startYearOne: '',
        endYearOne: '',
        degreeTwo: '',
        instituteTwo: '',
        startYearTwo: '',
        endYearTwo: '',
        experienceLevel: '',
        companyName: '',
        companyContactNumber: '',
        companyEmail: '',
        companyAddress: '',
        jobPost: '',
        lastSalary: '',
        joiningDate: '',
        endingDate: '',
        targetIndustry: '',
        availabilityDate: '',
        // resumeFile: null,
    });

    const [errors, setErrors] = useState({
        legalStatus: ''
    });

    const setSpecificValue = (key, value) => {
        setCandidateData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleDateChange = (event, parent) => {
        const { name, value } = event.target;
        if (parent === 'dateOfBirth') {
            setDateOfBirth((prev) => ({
                ...prev,
                [name]: value,
            }));
            const updatedDate = { ...dateOfBirth, [name]: value };
            const allFieldsFilled = Object.values(updatedDate).every(field => field !== '');
            if (allFieldsFilled) {
                const formattedDate = `${updatedDate.day} / ${updatedDate.month} / ${updatedDate.year}`;
                setSpecificValue(parent, formattedDate);
            }
        } else if (parent === 'availabilityDate') {
            setAvailabilityDate((prev) => ({
                ...prev,
                [name]: value,
            }));
            const updatedDate = { ...availabilityDate, [name]: value };
            const allFieldsFilled = Object.values(updatedDate).every(field => field !== '');
            if (allFieldsFilled) {
                const formattedDate = `${updatedDate.day} / ${updatedDate.month} / ${updatedDate.year}`;
                setSpecificValue(parent, formattedDate);
            }
        }
    };

    // const handleDateChange = (event, parent) => {
    //     const { name, value } = event.target;
    //     setDatePicked((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    //     const updatedDate = { ...datePicked, [name]: value };
    //     const allFieldsFilled = Object.values(updatedDate).every(field => field !== '');
    //     console.log('==> ', parent);
    //     if (allFieldsFilled) {
    //         const formattedDate = `${updatedDate.day} / ${updatedDate.month} / ${updatedDate.year}`;
            
    //         setSpecificValue(parent, formattedDate);
    //     }
    // };

    const handleNameChange = (e) => {
        const { name, value } = e.target;
        setFullName((prev) => ({
            ...prev,
            [name]: value,
        }));
        const updatedName = { ...fullName, [name]: value };
        const allFieldsFilled = Object.values(updatedName).every(field => field !== '');

        if (allFieldsFilled) {
            const formattedName = `${updatedName.firstName} ${updatedName.lastName}`;
            setSpecificValue('applicantName', formattedName);
        }
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
        const updatedAddress = { ...address, [name]: value };
        const allFieldsFilled = Object.values(updatedAddress).every(field => field !== '');

        if (allFieldsFilled) {
            const formattedAddress = `${updatedAddress.address}, ${updatedAddress.city}, ${updatedAddress.state}, ${updatedAddress.postalCode}. `;
            setSpecificValue('address', formattedAddress);
        }
    };

    const handleSimpleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber' || name === 'companyContactNumber') {
            let newValue = value.replace(/\D/g, '');
            // Limit to 10 digits
            if (newValue.length > 10) {
                newValue = newValue.slice(0, 10);
            }
            // Format as (###) ###-####
            newValue = newValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            setCandidateData((prev) => ({
                ...prev,
                [name]: newValue,
            }));
        } else {
            setCandidateData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setCandidateData((prev) => ({
    //             ...prev,
    //             resumeFile: reader.result, // Store the base64 string
    //         }));
    //     };
    //     reader.readAsDataURL(file);
    // };

    const applicationDone = (e) => {
        e.preventDefault();
        if (!candidateData.legalStatus) {
            setErrors(prev => ({ ...prev, legalStatus: 'Please select your legal status.' }));
            return;
        } else {
            console.log('about to send email');
            try {
                const emailData = {
                    ...candidateData,
                    // resumeFile: null,
                };
                emailjs.send('service_fok07fq', 'template_aomflq4', emailData, 'Kc3iXCbqXBmVgyEGG')
                    .then((response) => {
                        console.log('Successfully Sent!', response.status, response.text);
                        window.location.reload();
                    }, (error) => {
                        console.log('Error => ', error);
                        window.location.reload();
                    });
            } catch (e) {
                console.log(e);
            }
        }

        // console.log(candidateData);
    };

    return (
        <section>
            <div >
                <div className="sectionsize section2JSForm">
                    <img src={poster} className="posterImg" alt='JobSeekersForm'/>
                    <h2>Applicants Application Form</h2>
                    <h4>Please fill out the form given below</h4>
                </div>
                <form method="post" onSubmit={applicationDone} className="formBody">
                    <h3 className="mainHeading">Personal Information</h3>
                    {/* Full Name */}
                    <label className="subHeading forMarginLeft">Applicant's Name</label>
                    <div className="blocksDisplay">
                        <input className='contentBody halfDisplay dataEntrySection' type='text' onChange={handleNameChange} value={fullName.firstName} name="firstName" placeholder="First Name" required />
                        <input className='contentBody halfDisplay dataEntrySection' type='text' onChange={handleNameChange} value={fullName.lastName} name="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="blocksDisplay">
                        <div className="contentBody bodyForMobile">
                            {/* Email Address */}
                            <label className="subHeading">E-Mail</label>
                            <input className="dataEntrySection" style={{width:'initial'}} type="email" onChange={handleSimpleChange} value={candidateData.email} name='email' placeholder="Enter your e-mail" required />
                        </div>
                        <div className="contentBody  bodyForMobile">
                            {/* Phone Number */}
                            <label className="subHeading">Contact Number:</label>
                            <input className="dataEntrySection" style={{width:'initial'}} type="tel" name="phoneNumber" placeholder="Your Contact Number" onChange={handleSimpleChange} value={candidateData.phoneNumber} required />
                        </div>

                        <div className="contentBody bodyForMobile">
                            {/* Date Of Birth */}
                            <label className="subHeading">Date Of Birth:</label>
                            <div className="datesDiv">
                                {/* Month */}
                                <select className="dataEntrySection" id="month" name="month" required value={dateOfBirth.month} onChange={(e) => handleDateChange(e,'dateOfBirth')}>
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
                                <select className="dataEntrySection" id="day" name="day" value={dateOfBirth.day} required onChange={(e) => handleDateChange(e,'dateOfBirth')}>
                                    <option value="">Day</option>
                                    {/* Generate days dynamically */}
                                    {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                {/* Year */}
                                <select className="dataEntrySection" id="year" name="year" value={dateOfBirth.year} onChange={(e) => handleDateChange(e,'dateOfBirth')} required>
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
                    
                    {/* Home Address */}
                    <label className="subHeading forMarginLeft">Address</label>
                    <div className="blocksDisplay ">
                        <input className='contentBody fullDisplay dataEntrySection' type='text' onChange={handleAddressChange} value={address.address} name="address" placeholder="Address" required />
                        <input className='contentBody halfDisplay dataEntrySection' type='text' onChange={handleAddressChange} value={address.city} name="city" placeholder="City" required />
                        <input className='contentBody halfDisplay dataEntrySection' type='text' onChange={handleAddressChange} value={address.state} name="state" placeholder="State" required />
                        <input className='contentBody halfDisplay dataEntrySection' type='text' onChange={handleAddressChange} value={address.postalCode} name="postalCode" placeholder="Postal Code" required />
                    </div>
                    
                    {/* Legal Status */}
                    <label className="subHeading forMarginLeft">Legal Status</label>
                    <div className="blocksDisplay">
                        <div className="checkBox"><input type="radio" name="legalStatus" value='Citizen' checked={candidateData.legalStatus === 'Citizen'} onChange={handleSimpleChange} /> Citizen</div>
                        <div className="checkBox"><input type="radio" name="legalStatus" value='PR' checked={candidateData.legalStatus === 'PR'} onChange={handleSimpleChange} /> PR</div>
                        <div className="checkBox"><input type="radio" name="legalStatus" value='Student' checked={candidateData.legalStatus === 'Student'} onChange={handleSimpleChange} /> Student</div>
                        <div className="checkBox"><input type="radio" name="legalStatus" value='Refugee' checked={candidateData.legalStatus === 'Refugee'} onChange={handleSimpleChange} /> Refugee</div>
                        <div className="checkBox"><input type="radio" name="legalStatus" value='Work Permit' checked={candidateData.legalStatus === 'Work Permit'} onChange={handleSimpleChange} /> Work Permit</div>
                    </div>
                    {errors.legalStatus && <p className="error">{errors.legalStatus}</p>}
                    
                    <h3 className="mainHeading">Level Of Education</h3>
                    {/* Add education level fields here */}
                    <div className="blocksDisplay">
                        <div className="contentBody halfDisplay  bodyForMobile">
                            <label className="subHeading">Degree</label>
                            <input className='dataEntrySection' type="text" name='degreeOne' value={candidateData.degreeOne} onChange={handleSimpleChange} placeholder="Enter your degree name" required />
                        </div>
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">School / College</label>
                            <input className='dataEntrySection' type="text" name='instituteOne' value={candidateData.instituteOne} onChange={handleSimpleChange} placeholder="Enter school/college name" required />
                        </div>
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">Start Year</label>
                            <select  className='dataEntrySection' name='startYearOne' value={candidateData.startYearOne} onChange={handleSimpleChange} required >
                                <option value="">YYYY</option>
                                {Array.from({ length: 25 }, (_, i) => (
                                    <option key={i} value={String(2024 - i)}>{2024 - i}</option>
                                ))}
                            </select>
                        </div>
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">End Year</label>
                            <select className='dataEntrySection' name='endYearOne' value={candidateData.endYearOne} onChange={handleSimpleChange} required >
                                <option value="">YYYY</option>
                                {Array.from({ length: 25 }, (_, i) => (
                                    <option key={i} value={String(2024 - i)}>{2024 - i}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {/* Second Degree Information */}
                    <div className="blocksDisplay">
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">Degree</label>
                           <input className='dataEntrySection' type="text" name='degreeTwo' value={candidateData.degreeTwo} onChange={handleSimpleChange} placeholder="Enter your degree name" />
                        </div>
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">School / College</label>
                            <input className='dataEntrySection' type="text" name='instituteTwo' value={candidateData.instituteTwo} onChange={handleSimpleChange} placeholder="Enter school/college name" />
                        </div>
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">Start Year</label>
                            <select className='dataEntrySection' name='startYearTwo' value={candidateData.startYearTwo} onChange={handleSimpleChange}>
                                <option value="">YYYY</option>
                                {Array.from({ length: 25 }, (_, i) => (
                                    <option key={i} value={String(2024 - i)}>{2024 - i}</option>
                                ))}
                            </select>
                        </div>
                        <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">End Year</label>
                            <select className='dataEntrySection' name='endYearTwo' value={candidateData.endYearTwo} onChange={handleSimpleChange} >
                                <option value="">YYYY</option>
                                {Array.from({ length: 25 }, (_, i) => (
                                    <option key={i} value={String(2027 - i)}>{2024 - i}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <h3 className="mainHeading">Final Information</h3>
                    {/* Experience Level */}
                    <label className="subHeading forMarginLeft">What is your experience level?</label>
                    <div className="blocksDisplay">
                        <div className="checkBox "><input type="radio" name='experienceLevel' value='Experienced' checked={candidateData.experienceLevel === 'Experienced'} onChange={handleSimpleChange} /> Experienced</div>
                        <div className="checkBox"><input type="radio" name='experienceLevel' value='Fresher' checked={candidateData.experienceLevel === 'Fresher'} onChange={handleSimpleChange} /> Fresher</div>
                    </div>

                    {/* Company Details */}
                    {candidateData.experienceLevel === 'Experienced' && (
                        <div className="blocksDisplay">
                            <div className="contentBody halfDisplay  bodyForMobile">
                                <label className="subHeading">Company Name</label>
                                <input className='dataEntrySection' type="text" name='companyName' value={candidateData.companyName} onChange={handleSimpleChange} placeholder="Enter company name" required />
                            </div>

                            <div className="contentBody halfDisplay bodyForMobile">
                                <label className="subHeading">Company's Contact Number</label>
                                <input className='dataEntrySection' type="tel" name='companyContactNumber' value={candidateData.companyContactNumber} onChange={handleSimpleChange} placeholder="Enter company's contact" required />
                            </div>
                            
                            <div className="contentBody halfDisplay bodyForMobile">
                                <label className="subHeading">Company's E-Mail</label>
                                <input className='dataEntrySection' type="email" name='companyEmail' value={candidateData.companyEmail} onChange={handleSimpleChange} placeholder="Enter company's e-mail" required />
                            </div>
                            <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">Company's Address</label>
                            <input className='dataEntrySection' type="text" name='companyAddress' value={candidateData.companyAddress} onChange={handleSimpleChange} placeholder="Enter company's address" required />
                            </div>
                            <div className="contentBody halfDisplay bodyForMobile">
                            <label className="subHeading">Job Post</label>
                            <input className='dataEntrySection' type="text" name='jobPost' value={candidateData.jobPost} onChange={handleSimpleChange} placeholder="Enter your job post" required />
                            </div>
                            <div className="contentBody halfDisplay bodyForMobile">
                                <label className="subHeading">Receiving Salary</label>
                                <input className='dataEntrySection' type="number" name='lastSalary' value={candidateData.lastSalary} onChange={handleSimpleChange} placeholder="Enter your salary amount" />
                            </div>
                            <div className="contentBody halfDisplay bodyForMobile">
                                <label className="subHeading">Joining Date</label>
                                <input className='dataEntrySection' type="date" name='joiningDate' value={candidateData.joiningDate} onChange={handleSimpleChange} />
                            </div>
                            <div className="contentBody halfDisplay bodyForMobile">
                                <label className="subHeading">Ending Date</label>
                                <input className='dataEntrySection' type="date" name='endingDate' value={candidateData.endingDate} onChange={handleSimpleChange} />
                            </div>
                        </div>
                    )}

 
                    <div className="blocksDisplay">
                        <div className="contentBody halfDisplay  bodyForMobile">
                        {/* Target Industry */}
                        <label className="subHeading">Type of industry for you job</label>
                        <select  className='dataEntrySection' name="targetIndustry" required value={candidateData.targetIndustry} onChange={handleSimpleChange} >
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
                        <div className="contentBody halfDisplay bodyForMobile">
                            {/* Availability Date */}
                    <label className="subHeading" htmlFor="month">When you are free to join us?</label>
                    <div  className='datesDiv'>
                        {/* Month */}
                        <select  className='dataEntrySection' id="month" name="month" required value={availabilityDate.month} onChange={(e) => handleDateChange(e,'availabilityDate')}>
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
                        <select className='dataEntrySection' id="day" name="day" value={availabilityDate.day} required onChange={(e) => handleDateChange(e,'availabilityDate')}>
                            <option value="">Day</option>
                            {/* Generate days dynamically */}
                            {Array.from({ length: 31 }, (_, i) => (
                                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        {/* Year */}
                        <select className='dataEntrySection' id="year" name="year" value={availabilityDate.year} onChange={(e) => handleDateChange(e,'availabilityDate')} required>
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
                    

                    {/* <label>Resume Upload</label> */}
                    {/* <input type="file" name="resumeFsile" onChange={handleFileChange} /> */}

                    <button type="submit" className="submitBtn">Submit Application</button>
                </form>
            </div>
        </section>
    );
}
