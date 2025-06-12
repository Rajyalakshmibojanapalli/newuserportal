import React, { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    country: 'India',
    profilePicture: null,
    currentPassword: '',
    otp: '',
    newpassword: ''
  });

  const [errors, setErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePicture') {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateProfile = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only letters and spaces.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required.';
    } else if (!/^[A-Za-z0-9\s,.'-]{5,100}$/.test(formData.address)) {
      newErrors.address = 'Address should be 5-100 characters.';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      newErrors.city = 'City should contain only letters.';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.state)) {
      newErrors.state = 'State should contain only letters.';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.country)) {
      newErrors.country = 'Country should contain only letters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerifyOTP = () => {
    const newPasswordErrors = {};
    if (!formData.currentPassword.trim()) newPasswordErrors.currentPassword = 'Current password is required.';
    if (!formData.otp.trim()) newPasswordErrors.otp = 'OTP is required.';
    setPasswordErrors(newPasswordErrors);
    return Object.keys(newPasswordErrors).length === 0;
  };

  const handleVerifyOTP = () => {
    if (validateVerifyOTP()) {
      setStatus(true);
      console.log('OTP verified');
    }
  };

  const GetOtp = () => {
    alert("OTP sent to mail");
  };

  const validateNewPassword = () => {
    const newPasswordErrors = {};
    if (!formData.currentPassword.trim()) newPasswordErrors.currentPassword = 'Current password is required.';
    if (!formData.newpassword.trim()) newPasswordErrors.newpassword = 'New password is required.';
    else if (formData.newpassword.length < 6) newPasswordErrors.newpassword = 'New password must be at least 6 characters.';
    setPasswordErrors(newPasswordErrors);
    return Object.keys(newPasswordErrors).length === 0;
  };

  const handleConfirmPassword = () => {
    if (validateNewPassword()) {
      console.log('Password change confirmed:', formData.newpassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      console.log('Profile form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-[#1d8e85] text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

        {/* Profile Details Form */}
        <form onSubmit={handleSubmit} className="md:w-2/3 w-full">
          <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
            <legend className="text-2xl font-semibold px-2">Profile Details</legend>

            <div className="flex justify-center items-center gap-12">
              <div className="w-32">
                <label htmlFor="profilePicture" className="block text-sm font-medium mb-2 text-center">Profile Picture *</label>
                <div className="border border-white/20 rounded-full bg-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#4ecdc4] transition w-32 h-32 mx-auto">
                  <input
                    id="profilePicture"
                    type="file"
                    name="profilePicture"
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  <label htmlFor="profilePicture" className="flex flex-col items-center justify-center text-white/60 cursor-pointer select-none">
                    <span className="text-5xl mb-1">👤</span>
                    <span className="text-xs">Upload</span>
                  </label>
                </div>
              </div>

              <div className="hidden sm:block text-center sm:text-left p-6 mt-4 border-l-4 border-[#4ecdc4] bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
                <p className="text-sm text-white/70">Please provide accurate and up-to-date profile information.</p>
                <p className="text-sm text-white/70 mt-1">This helps us communicate with you effectively and ensures smooth access to our services.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {['name', 'email', 'mobile', 'address', 'city', 'state', 'country'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')} *</label>
                  <input
                    id={field}
                    name={field}
                    type="text"
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${field}`}
                    className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                      ${errors[field] ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                  />
                  {errors[field] && (
                    <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div>
                <input
                  type="submit"
                  value="Update Profile"
                  className="mt-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] flex justify-center text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition w-full max-w-xs mx-auto cursor-pointer"
                />
              </div>
            </div>
          </fieldset>
        </form>

        {/* Change Password Form */}
        <form className="md:w-1/3 w-full">
          <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
            <legend className="text-2xl font-semibold px-2">Change Password</legend>
            <p className="text-sm text-white/70 mb-4">Enter your current password and OTP to change your password securely.</p>

            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password *</label>
              <div className="relative">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter current password"
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 pr-10 focus:outline-none focus:ring-2
                    ${passwordErrors.currentPassword ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 text-white/60 hover:text-[#4ecdc4]"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {passwordErrors.currentPassword && (
                <p className="mt-1 text-xs text-red-400">{passwordErrors.currentPassword}</p>
              )}
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex-grow">
                <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP *</label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  value={formData.otp}
                  onChange={handleInputChange}
                  placeholder="Enter OTP"
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                    ${passwordErrors.otp ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                />
                {passwordErrors.otp && (
                  <p className="mt-1 text-xs text-red-400">{passwordErrors.otp}</p>
                )}
              </div>
              <button
                type="button"
                onClick={GetOtp}
                className="h-10 mt-5 px-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white rounded-full font-semibold hover:from-[#0a5c64] hover:to-[#5dd5cd] transition whitespace-nowrap"
              >
                Get OTP
              </button>
            </div>

            <button
              type="button"
              onClick={handleVerifyOTP}
              className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
            >
              Verify OTP
            </button>

            {status && (
              <>
                <div className="flex-grow">
                  <label htmlFor="newpassword" className="block text-sm font-medium mb-1">New Password *</label>
                  <input
                    id="newpassword"
                    name="newpassword"
                    type="password"
                    value={formData.newpassword}
                    onChange={handleInputChange}
                    placeholder="Enter new password"
                    className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                      ${passwordErrors.newpassword ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                  />
                  {passwordErrors.newpassword && (
                    <p className="mt-1 text-xs text-red-400">{passwordErrors.newpassword}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleConfirmPassword}
                  className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
                >
                  Confirm Password
                </button>
              </>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profile;
