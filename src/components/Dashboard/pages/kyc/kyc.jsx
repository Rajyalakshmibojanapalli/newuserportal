import React, { useState } from 'react';

const Kyc = () => {
  const [formData, setFormData] = useState({
    applicantName: '',
    dob: '',
    mobile: '',
    address: '',
    aadharFront: null,
    aadharBack: null,
    panFile: null,
    panNumber: '',
    upi: '',
    accountNumber: '',
    bankName: '',
    ifsc: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.applicantName) newErrors.applicantName = 'Name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.aadharFront) newErrors.aadharFront = 'Aadhar front is required';
    if (!formData.aadharBack) newErrors.aadharBack = 'Aadhar back is required';
    if (!formData.upi) newErrors.upi = 'UPI ID is required';
    if (!formData.panFile) newErrors.panFile = 'PAN file is required';
    if (!formData.panNumber) newErrors.panNumber = 'PAN number is required';
    if (!formData.accountNumber) newErrors.accountNumber = 'Bank account number is required';
    if (!formData.bankName) newErrors.bankName = 'Bank name is required';
    if (!formData.ifsc) newErrors.ifsc = 'IFSC code is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Submitted Data:', formData);
  };

  const inputStyle = `
  w-full md:w-[75%] lg:w-full xs:w-[75%]
  px-4 py-2.5 rounded-md 
  border border-gray-300 
  text-black placeholder-gray-400 
  focus:outline-none focus:ring-2 focus:ring-[#4ecdc4] 
  text-sm transition
`;
  const sectionStyle = 'space-y-5 p-5 rounded-xl bg-white shadow-sm';

  const labelStyle = 'block text-sm font-medium mb-1.5 text-[#26a69a]';

  const errorStyle = 'text-red-500 text-xs mt-1';

 const fileInputWrapper = 'flex items-center h-9 rounded-md border border-gray-300 overflow-hidden w-full md:w-[75%] xs:w-[75%] lg:w-full mx-start';

  return (
    <div className="w-full transition-all duration-300 ">
      {/* Adjust lg:ml-72 based on your sidebar width */}
      <form onSubmit={handleSubmit} className="max-w-full mx-auto space-y-8 ">
        {/* Header */}
        <div className=' mb-[-20px]'>
          <h2 className="text-2xl font-semibold text-[#084e54] ">
            KYC Information{' '}
            <span className="text-base font-normal text-black">
              (Fill up information and verify your KYC)
            </span>
          </h2>
          <p className="text-sm mt-1 text-black mb-0">
            KYC status: <span className="text-[#c5d82e] font-semibold">n/a</span>
          </p>
        </div>

        {/* Grid layout for form sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* Applicant Info */}
          <div className={sectionStyle}>
            <h3 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-4 text-black">Applicant Info</h3>
            {[
              ['applicantName', 'Name of the Applicant *', 'Enter name'],
              ['dob', 'Date of Birth *', '', 'date'],
              ['mobile', 'Mobile Number (As per Bank) *', '+91'],
              ['address', 'Address *', 'Enter your address'],
            ].map(([name, label, placeholder, type = 'text']) => (
              <div key={name}>
                <label className={labelStyle} htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  type={type}
                  className={inputStyle}
                />
                {errors[name] && <p className={errorStyle}>{errors[name]}</p>}
              </div>
            ))}
          </div>

          {/* Applicant Proofs */}
          <div className={sectionStyle}>
            <h3 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-4 text-black">Applicant Proofs</h3>
            {[
              ['aadharFront', 'Aadhar Front *'],
              ['aadharBack', 'Aadhar Back *'],
              ['panFile', 'PAN File *'],
            ].map(([name, label]) => (
              <div key={name} className="mb-4">
                <label className={labelStyle} htmlFor={name}>{label}</label>
                <div className={fileInputWrapper}>
                  <label
                    htmlFor={name}
                    className="bg-white text-gray-500 px-5 h-full flex items-center text-sm font-semibold cursor-pointer min-w-[120px] justify-center border-r border-gray-300"
                  >
                    Choose file
                  </label>
                  <input
                    type="file"
                    id={name}
                    name={name}
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <div className="bg-[#26a69a] text-sm text-white px-3 h-full flex items-center w-full truncate">
                    {formData[name]?.name || 'No file chosen'}
                  </div>
                </div>
                {errors[name] && <p className={errorStyle}>{errors[name]}</p>}
              </div>
            ))}

            <div>
              <label className={labelStyle} htmlFor="panNumber">PAN Number *</label>
              <input
                id="panNumber"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleInputChange}
                placeholder="Enter PAN number"
                className={inputStyle}
              />
              {errors.panNumber && <p className={errorStyle}>{errors.panNumber}</p>}
            </div>
          </div>

          {/* Bank Details */}
          <div className={sectionStyle}>
            <h3 className="font-semibold text-lg border-b border-gray-300 pb-3 mb-4 text-black">Bank Details</h3>
            {[
              ['upi', 'UPI Number', 'Enter UPI number'],
              ['accountNumber', 'Bank Account Number *', 'Enter account number'],
              ['bankName', 'Bank Name *', 'Enter bank name'],
              ['ifsc', 'Bank IFSC Code *', 'Enter IFSC code'],
            ].map(([name, label, placeholder]) => (
              <div key={name}>
                <label className={labelStyle} htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className={inputStyle}
                />
                {errors[name] && <p className={errorStyle}>{errors[name]}</p>}
              </div>
            ))}

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="bg-[#26a69a] text-white font-semibold text-sm px-10 py-2.5 rounded-full transition hover:scale-105 hover:bg-[#1e857b]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Kyc;
