import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", mobile: "", address: "", city: "", state: "", country: "India",
    profilePicture: null, currentPassword: "", otp: "", newpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profilePicture") {
      setFormData({ ...formData, profilePicture: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateProfile = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address.";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerifyOTP = () => {
    const newPasswordErrors = {};
    if (!formData.currentPassword.trim()) newPasswordErrors.currentPassword = "Current password is required.";
    if (!formData.otp.trim()) newPasswordErrors.otp = "OTP is required.";
    setPasswordErrors(newPasswordErrors);
    return Object.keys(newPasswordErrors).length === 0;
  };

  const handleVerifyOTP = () => {
    if (validateVerifyOTP()) {
      setStatus(true);
      console.log("OTP verified");
    }
  };

  const GetOtp = () => alert("OTP sent to email");

  const validateNewPassword = () => {
    const newPasswordErrors = {};
    if (!formData.currentPassword.trim()) newPasswordErrors.currentPassword = "Current password is required.";
    if (!formData.newpassword.trim()) newPasswordErrors.newpassword = "New password is required.";
    else if (formData.newpassword.length < 6) newPasswordErrors.newpassword = "New password must be at least 6 characters.";
    setPasswordErrors(newPasswordErrors);
    return Object.keys(newPasswordErrors).length === 0;
  };

  const handleConfirmPassword = () => {
    if (validateNewPassword()) {
      console.log("Password change confirmed:", formData.newpassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      console.log("Profile form submitted:", formData);
    }
  };

  return (
  <div className="min-h-screen text-white ">
    <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
      {/* Profile Form */}
      <div className="w-full lg:w-[100%] min-w-[100%]">
        <div className="rounded-xl bg-white p-4 sm:p-5 lg:p-6 space-y-5 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#084e54]">Profile Details</h2>

          {/* Profile Picture + Note */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            {/* Profile Picture Upload */}
            <div className="w-24 sm:w-28 flex-shrink-0">
              <label htmlFor="profilePicture" className="block text-xs font-medium text-center text-black mb-2">
                Profile Picture *
              </label>
              <div className="border border-[#26a69a] bg-white/10 rounded-full w-24 h-24 sm:w-28 sm:h-28 mx-auto flex items-center justify-center cursor-pointer hover:border-[#4ecdc4] transition">
                <input id="profilePicture" type="file" name="profilePicture" onChange={handleInputChange} className="hidden" />
                <label htmlFor="profilePicture" className="flex flex-col items-center text-black/60 cursor-pointer">
                  <span className="text-3xl">👤</span>
                  <span className="text-xs">Upload</span>
                </label>
              </div>
            </div>

            {/* Info Note */}
            <div className="hidden md:block text-sm text-black bg-white/20 p-4 border-l-4 border-[#4ecdc4] rounded-md shadow-md">
              <p>Please provide accurate and up-to-date profile information to ensure smooth access to our services.</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {["name", "email", "mobile", "address", "city", "state", "country"].map((field) => (
              <div key={field} className={field === "address" ? "sm:col-span-2" : ""}>
                <label htmlFor={field} className="block text-xs font-medium text-[#26a69a] mb-1 capitalize">
                  {field.replace(/([A-Z])/g, " $1")} *
                </label>
                <input
                  id={field}
                  name={field}
                  type="text"
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={`Enter your ${field}`}
                  className={`w-full px-3 py-2 text-sm rounded border bg-white/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    errors[field] ? "border-red-500 ring-red-500" : "border-gray-300 ring-[#4ecdc4]"
                  }`}
                />
                {errors[field] && <p className="text-xs text-red-400 mt-1">{errors[field]}</p>}
              </div>
            ))}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleSubmit}
              className="bg-[#26a69a] hover:bg-[#1e857b] text-white font-semibold px-6 py-2 rounded-full text-sm sm:text-base"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* Password Form */}
      <div className="w-full lg:w-[100%] min-w-[100%]">
        <div className="rounded-xl bg-white p-4 sm:p-5 lg:p-6 space-y-4 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#084e54]">Change Password</h2>
          <p className="text-sm text-black/70">Enter your current password and OTP to securely update your password.</p>

          {/* Password input */}
          <div>
            <label htmlFor="currentPassword" className="block text-xs font-medium text-[#26a69a] mb-1">
              Current Password *
            </label>
            <div className="relative">
              <input
                id="currentPassword"
                name="currentPassword"
                type={showPassword ? "text" : "password"}
                value={formData.currentPassword}
                onChange={handleInputChange}
                placeholder="Enter current password"
                className={`w-full px-3 py-2 text-sm rounded border bg-white/10 text-black placeholder-gray-400 pr-10 focus:outline-none focus:ring-2 ${
                  passwordErrors.currentPassword ? "border-red-500 ring-red-500" : "border-gray-300 ring-[#4ecdc4]"
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2.5 text-black"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {passwordErrors.currentPassword && (
              <p className="text-xs text-red-400 mt-1">{passwordErrors.currentPassword}</p>
            )}
          </div>

          {/* OTP Section */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
            <div className="flex-grow w-full">
              <label htmlFor="otp" className="block text-xs font-medium text-[#26a69a] mb-1">
                OTP *
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                value={formData.otp}
                onChange={handleInputChange}
                placeholder="Enter OTP"
                className={`w-full px-3 py-2 text-sm rounded border bg-white/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  passwordErrors.otp ? "border-red-500 ring-red-500" : "border-gray-300 ring-[#4ecdc4]"
                }`}
              />
              {passwordErrors.otp && <p className="text-xs text-red-400 mt-1">{passwordErrors.otp}</p>}
            </div>
            <button
              type="button"
              onClick={GetOtp}
              className="h-10 px-5 bg-[#26a69a] text-white rounded-full font-semibold hover:bg-[#1e857b] text-sm"
            >
              Get OTP
            </button>
          </div>

          {/* Verify OTP Button - Centered */}
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={handleVerifyOTP}
              className="px-6 py-2 bg-[#26a69a] hover:bg-[#1e857b] text-white font-semibold rounded-full text-sm sm:text-base"
            >
              Verify OTP
            </button>
          </div>

          {/* New Password Fields */}
          {status && (
            <div className="space-y-4">
              <div>
                <label htmlFor="newpassword" className="block text-xs font-medium text-[#26a69a] mb-1">
                  New Password *
                </label>
                <input
                  id="newpassword"
                  name="newpassword"
                  type="password"
                  value={formData.newpassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                  className={`w-full px-3 py-2 text-sm rounded border bg-white/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 ${
                    passwordErrors.newpassword ? "border-red-500 ring-red-500" : "border-gray-300 ring-[#4ecdc4]"
                  }`}
                />
                {passwordErrors.newpassword && <p className="text-xs text-red-400 mt-1">{passwordErrors.newpassword}</p>}
              </div>

              <div>
                <label htmlFor="confirmpassword" className="block text-xs font-medium text-[#26a69a] mb-1">
                  Confirm Password *
                </label>
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  value={formData.newpassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                  className="w-full px-3 py-2 text-sm rounded border bg-white/10 text-black placeholder-gray-400 focus:outline-none focus:ring-2 border-gray-300 ring-[#4ecdc4]"
                />
              </div>

              <button
                type="button"
                onClick={handleConfirmPassword}
                className="w-full mt-2 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-5 py-2 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
              >
                Confirm Password
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

};

export default Profile;
