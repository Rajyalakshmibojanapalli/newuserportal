
// import React, { useState, useEffect, useContext } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { Eye, EyeOff, Phone, Mail, User, Lock, Key, ChevronDown, Clock, RefreshCw } from 'lucide-react';
// import {
//   useOTPresentMutation,
//   useRegisterMutation,
//   useVerifyMutation,
// } from "../ApiSliceComponent/RegisterApiSlice";
// import countryCodes from "./countryCodes.json"
// import SplitText from '../global/SplitText';
// import Logo from './Logo';
// const Register = () => {

import Logo from "./Logo";

//     const location = { search: '' };
//     const setData = () => { };
//     const isLoading = false;
//     const isVerifying = false;

//     // State management
//     const [showModal, setShowModal] = useState(false);
//     const [isConfirmAgree, setIsConfirmAgree] = useState(false);
//     const [otpSent, setOtpSent] = useState(false);
//     const [timer, setTimer] = useState(60);
//     const [resendOtp, setResendOtp] = useState(false);
//     const [isChecked, setIsChecked] = useState(false);
//     const [isOtp, setIsOtp] = useState(false);
//     const [isOtpSending, setIsOtpSending] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const [showCountryDropdown, setShowCountryDropdown] = useState(false);

//     // Get referral code from URL if present
//     const queryParams = new URLSearchParams(location.search);
//     const referralID = queryParams.get("referralCode");

//     // Initial form values
//     const initialValues = {
//         email: "",
//         password: "",
//         confirmPwd: "",
//         phone: "",
//         countryCode: "🇮🇳",
//         countryPhoneCode: "+91",
//         country: "India",
//         name: "",
//         referenceId: referralID || "",
//         OTP: "",
//     };

//     // Validation schema - matches your original validation logic
//     const validationSchema = Yup.object({
//         name: Yup.string()
//             .min(3, 'Name must be at least 3 characters')
//             .matches(/^[a-zA-Z0-9\s]*$/, 'Name can only contain letters, numbers and spaces')
//             .required('Name is required'),

//         email: Yup.string()
//             .matches(
//                 /^(?![-.])[a-zA-Z0-9-]+(?!.*?\.\.)[a-zA-Z0-9-_.]+@[a-zA-Z0-9]+[a-z.0-9]+\.[a-z.]{2,4}$/,
//                 'Invalid email format'
//             )
//             .required('Email is required'),

//         phone: Yup.string()
//             .matches(/^\d*$/, 'Phone number can only contain digits')
//             .test('phone-length', 'Invalid phone number length', function (value) {
//                 const { countryPhoneCode } = this.parent;
//                 if (!value) return false;

//                 if (countryPhoneCode === "+91" && value.length !== 10) {
//                     return this.createError({ message: 'Phone number must be 10 digits for India' });
//                 } else if (countryPhoneCode !== "+91" && (value.length < 4 || value.length > 15)) {
//                     return this.createError({ message: 'Phone number must be between 4 to 15 digits for other countries' });
//                 }
//                 return true;
//             })
//             .required('Phone number is required'),

//         password: Yup.string()
//             .min(6, 'Password must be at least 6 characters')
//             .required('Password is required'),

//         confirmPwd: Yup.string()
//             .oneOf([Yup.ref('password')], 'Passwords do not match')
//             .required('Please confirm your password'),

//         referenceId: Yup.string()
//             .matches(/^[A-Z0-9]*$/, 'Reference ID can only contain uppercase letters and numbers'),

//         OTP: otpSent ? Yup.string()
//             .matches(/^[0-9]*$/, 'OTP can only contain numbers')
//             .required('Please enter the OTP') : Yup.string(),
//     });

//     // Handle country selection
//     const handleCountrySelect = (country, setFieldValue) => {
//         setFieldValue('countryCode', country.flag);
//         setFieldValue('countryPhoneCode', country.country_code);
//         setFieldValue('country', country.country_name);
//         setShowCountryDropdown(false);

//         // Reset phone number if switching countries
//         setFieldValue('phone', '');
//     };

//     // Handle OTP verification request
//     const handleVerify = async (values) => {
//         try {
//             setIsOtpSending(true);

//             // Prepare payload with proper country code
//             const selectedCountry = countryCodes.find(
//                 (item) => item.flag === values.countryCode
//             );

//             // Create payload WITHOUT referenceId for registration
//             const payload = {
//                 email: values.email,
//                 password: values.password,
//                 confirmPwd: values.confirmPwd,
//                 phone: values.phone,
//                 countryCode: selectedCountry?.country_code || values.countryPhoneCode,
//                 country: values.country,
//                 name: values.name,
//                 // referenceId is removed from here
//             };

//             // Mock API call - replace with your actual register call
//             console.log('Registration payload:', payload);

//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 2000));

//             // const result = await register(payload).unwrap();

//             // Store username for later use (mock)
//             // if (result?.data?.username) {
//             //   localStorage.setItem("username", result.data.username);
//             // }
//             localStorage.setItem("username", "mock_username");

//             // Update OTP-related states
//             setOtpSent(true);
//             setTimer(120);
//             setResendOtp(false);
//             setIsOtpSending(false);
//             setIsOtp(true);

//             toast.success("OTP sent to your email!", {
//                 position: "top-center",
//             });
//         } catch (err) {
//             setIsOtpSending(false);

//             // Handle "User verification pending" specially
//             if (err?.data?.message === "User verification pending") {
//                 try {
//                     // await OTPresent({ email: values.email }).unwrap();
//                     setOtpSent(true);
//                     setTimer(120);
//                     setResendOtp(false);
//                     setIsOtp(true);
//                     toast.success("OTP resent to your email!", {
//                         position: "top-center",
//                     });
//                 } catch (otpErr) {
//                     toast.error(otpErr?.data?.message || "Failed to resend OTP", {
//                         position: "top-center",
//                     });
//                 }
//             } else {
//                 toast.error(err?.data?.message || "Registration failed", {
//                     position: "top-center",
//                 });
//             }
//         }
//     };

//     // Handle form submission with OTP verification
//     const handleSubmit = async (values) => {
//         // Ensure user agreed to terms
//         if (!isChecked || !isConfirmAgree) {
//             toast.error("Please accept the terms and conditions", {
//                 position: "top-center",
//             });
//             return;
//         }

//         try {
//             // Include referenceId in the verification payload
//             const payload = {
//                 email: values.email,
//                 otp: Number(values.OTP),
//                 otpType: "register",
//                 referenceId: values.referenceId, // Include referenceId here for verification
//             };

//             console.log('Verification payload:', payload);

//             // Mock API call - replace with your actual verify call
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             // const res = await verify(payload).unwrap();

//             // Mock response
//             const res = {
//                 message: "Registration successful!",
//                 data: { token: "mock_token" }
//             };

//             // Prepare user data for context and storage
//             const userRegisterData = {
//                 ...res,
//                 email: values.email,
//                 name: values.name,
//                 username: localStorage.getItem("username"),
//             };

//             // Update context and localStorage
//             setData(userRegisterData);
//             localStorage.setItem("token", res?.data?.token);
//             localStorage.setItem(
//                 "userRegisterData",
//                 JSON.stringify(userRegisterData)
//             );

//             toast.success(res?.message || "Registration successful!", {
//                 position: "top-center",
//             });

//             // Navigate to home after successful registration
//             setTimeout(() => {
//                 setIsOtp(false);
//                 // navigate("/home");
//                 console.log("Would navigate to /home");
//             }, 1000);
//         } catch (err) {
//             toast.error(err?.data?.message || "OTP verification failed", {
//                 position: "top-center",
//             });
//         }
//     };

//     // Handle checkbox change for terms agreement
//     const handleCheckboxChange = () => {
//         const newCheckedState = !isChecked;
//         setIsChecked(newCheckedState);

//         // Show modal only when checking the box
//         if (newCheckedState) {
//             setShowModal(true);
//         } else {
//             // If unchecking, also reset the confirmation
//             setIsConfirmAgree(false);
//         }
//     };

//     // Close the terms modal
//     const handleCloseModal = () => {
//         // Reset checkbox if the user closes without agreeing
//         setIsChecked(false);
//         setIsConfirmAgree(false);
//         setShowModal(false);
//     };

//     // Handle terms agreement from modal
//     const onAgreeTerms = (isAgreed) => {
//         setIsConfirmAgree(isAgreed);
//         // If not agreed, also uncheck the checkbox
//         if (!isAgreed) {
//             setIsChecked(false);
//         }
//         setShowModal(false);
//     };

//     // Timer for resend OTP
//     useEffect(() => {
//         let countdown;
//         if (otpSent && timer > 0) {
//             countdown = setInterval(() => {
//                 setTimer((prevTimer) => prevTimer - 1);
//             }, 1000);
//         } else if (timer === 0) {
//             setResendOtp(true);
//         }
//         return () => clearInterval(countdown);
//     }, [otpSent, timer]);

//     // Format timer to MM:SS
//     const formatTime = (seconds) => {
//         const mins = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
//     };

//     return (
//       <div className="flex flex-col md:flex-row md:items-stretch w-[100%] overflow-hidden">
//             <div className='flex-1 bg-[#085359] flex justify-center items-center'>
//                 <Logo/>
//                 <div className="text-center ">
//                 </div>
//             </div>
//             <div className="flex-1 bg-white/95 ">
//                 <div className='p-4  bg-[#085359]'>
//                     <Formik
//                         initialValues={initialValues}
//                         validationSchema={validationSchema}
//                         onSubmit={handleSubmit}
//                     >
//                         {({ values, errors, touched, setFieldValue, isValid, dirty }) => (
//                             <Form className="space-y-2  bg-white w-[100%] md:w-[80%]  mx-auto px-8 py-4 rounded-md">
//                                 {/* Full Name */}
//                                 <div className='regfrom-feild'>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                         <User className="inline w-4 h-4 mr-2 text-[#085359]" />
//                                         Full Name <span className="text-red-500">*</span>
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         name="name"
//                                         placeholder="Enter your full name"
//                                         className={`w-full px-4 py-[7px] border-2 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] transition-all duration-200 ${touched.name && errors.name
//                                             ? 'border-red-400 bg-red-50'
//                                             : 'border-gray-200 hover:border-[#085359]/50 focus:bg-white'
//                                             }`}
//                                     />
//                                     <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
//                                 </div>

//                                 {/* Phone Number with Country Code */}
//                                 <div className='regfrom-feild'>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                         <Phone className="inline w-4 h-4 mr-2 text-[#085359]" />
//                                         Phone Number <span className="text-red-500">*</span>
//                                     </label>
//                                     <div className="flex flex-col md:flex-row gap-2">
//                                         <div className="relative">
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowCountryDropdown(!showCountryDropdown)}
//                                                 className="flex items-center gap-2 px-3 py-[7px] border-2 border-gray-200 rounded-xl hover:border-[#085359]/50 focus:border-[#085359] focus:ring-2 focus:ring-[#085359]/20 transition-all duration-200 bg-white min-w-[120px]"
//                                             >
//                                                 <span className="text-lg">{values.countryCode}</span>
//                                                 <span className="font-medium text-gray-700">{values.countryPhoneCode}</span>
//                                                 <ChevronDown className="w-4 h-4 text-gray-500" />
//                                             </button>

//                                             {showCountryDropdown && (
//                                                 <div className="absolute top-full left-0 mt-1 w-80 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
//                                                     {countryCodes.map((country, index) => (
//                                                         <button
//                                                             key={index}
//                                                             type="button"
//                                                             onClick={() => handleCountrySelect(country, setFieldValue)}
//                                                             className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#085359]/5 transition-colors duration-200 text-left"
//                                                         >
//                                                             <span className="text-lg">{country.flag}</span>
//                                                             <span className="font-medium text-gray-700">{country.country_code}</span>
//                                                             <span className="text-gray-600 text-sm">{country.country_name}</span>
//                                                         </button>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>

//                                         <Field
//                                             type="tel"
//                                             name="phone"
//                                             placeholder="Enter phone number"
//                                             className={`flex-1 px-4 py-[7px] border-2 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] transition-all duration-200 ${touched.phone && errors.phone
//                                                 ? 'border-red-400 bg-red-50'
//                                                 : 'border-gray-200 hover:border-[#085359]/50 focus:bg-white'
//                                                 }`}
//                                         />
//                                     </div>
//                                     <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
//                                 </div>

//                                 {/* Email Address */}
//                                 <div className='regfrom-feild'>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                         <Mail className="inline w-4 h-4 mr-2 text-[#085359]" />
//                                         Email Address <span className="text-red-500">*</span>
//                                     </label>
//                                     <Field
//                                         type="email"
//                                         name="email"
//                                         placeholder="your@email.com"
//                                         className={`w-full px-4 py-[7px] border-2 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] transition-all duration-200 ${touched.email && errors.email
//                                             ? 'border-red-400 bg-red-50'
//                                             : 'border-gray-200 hover:border-[#085359]/50 focus:bg-white'
//                                             }`}
//                                     />
//                                     <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
//                                 </div>

//                                 {/* Password Fields Row */}
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 regfrom-feild">
//                                     {/* Password */}
//                                     <div>
//                                         <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                             <Lock className="inline w-4 h-4 mr-2 text-[#085359]" />
//                                             Password <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Field
//                                                 type={showPassword ? 'text' : 'password'}
//                                                 name="password"
//                                                 placeholder="Password"
//                                                 className={`w-full px-4 py-[7px] pr-12 border-2 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] transition-all duration-200 ${touched.password && errors.password
//                                                     ? 'border-red-400 bg-red-50'
//                                                     : 'border-gray-200 hover:border-[#085359]/50 focus:bg-white'
//                                                     }`}

//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowPassword(!showPassword)}
//                                                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#085359] transition-colors duration-200"
//                                             >
//                                                 {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                                             </button>
//                                         </div>
//                                         <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
//                                     </div>

//                                     {/* Confirm Password */}
//                                     <div>
//                                         <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                             <Lock className="inline w-4 h-4 mr-2 text-[#085359]" />
//                                             Confirm Password <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <Field
//                                                 type={showConfirmPassword ? 'text' : 'password'}
//                                                 name="confirmPwd"
//                                                 placeholder="Confirm password"
//                                                 className={`w-full px-4 py-[7px] pr-12 border-2 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] transition-all duration-200 ${touched.confirmPwd && errors.confirmPwd
//                                                     ? 'border-red-400 bg-red-50'
//                                                     : 'border-gray-200 hover:border-[#085359]/50 focus:bg-white'
//                                                     }`}
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                                                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#085359] transition-colors duration-200"
//                                             >
//                                                 {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                                             </button>
//                                         </div>
//                                         <ErrorMessage name="confirmPwd" component="p" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                 </div>

//                                 {/* Referral Code */}
//                                 <div className='regfrom-feild'>
//                                     <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                         Referral Code
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         name="referenceId"
//                                         placeholder="Enter referral code (optional)"
//                                         className="w-full px-4 py-[7px] border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] hover:border-[#085359]/50 focus:bg-white transition-all duration-200"
//                                     />
//                                     <ErrorMessage name="referenceId" component="p" className="text-red-500 text-sm mt-1" />
//                                 </div>

//                                 {/* Send OTP Button */}
//                                 <button
//                                     type="button"
//                                     onClick={() => handleVerify(values)}
//                                     disabled={isOtpSending || (otpSent && !resendOtp) || !isValid || !dirty}
//                                     className={`w-full py-[7px] rounded-full font-bold text-lg transition-all duration-300 transform flex items-center justify-center gap-2 ${isOtpSending || (otpSent && !resendOtp) || !isValid || !dirty
//                                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                         : 'bg-gradient-to-r from-[#085359] to-[#20934a] text-white hover:from-[#064044] hover:to-[#1a7d3f] hover:shadow-xl  active:transform-none'
//                                         }`}
//                                 >
//                                     {isOtpSending ? (
//                                         <>
//                                             <RefreshCw className="w-5 h-5 animate-spin" />
//                                             Sending OTP...
//                                         </>
//                                     ) : otpSent && !resendOtp ? (
//                                         <>
//                                             <Clock className="w-5 h-5" />
//                                             Resend OTP in {formatTime(timer)}
//                                         </>
//                                     ) : otpSent && resendOtp ? (
//                                         <>
//                                             <RefreshCw className="w-5 h-5" />
//                                             Resend OTP
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Mail className="w-5 h-5" />
//                                             Send OTP
//                                         </>
//                                     )}
//                                 </button>

//                                 {/* OTP Field (conditional) */}
//                                 {isOtp && (
//                                     <div className="bg-[#085359]/5 p-4 rounded-xl border border-[#085359]/20">
//                                         <label className="block text-sm font-semibold text-gray-700 mb-1">
//                                             <Key className="inline w-4 h-4 mr-2 text-[#085359]" />
//                                             Enter OTP <span className="text-red-500">*</span>
//                                         </label>
//                                         <Field
//                                             type="text"
//                                             name="OTP"
//                                             placeholder="Enter the OTP sent to your email"
//                                             maxLength="6"
//                                             className={`w-full px-4 py-[7px] border-2 rounded-xl focus:ring-2 focus:ring-[#085359]/20 focus:border-[#085359] transition-all duration-200 text-center text-lg font-semibold tracking-widest ${touched.OTP && errors.OTP
//                                                 ? 'border-red-400 bg-red-50'
//                                                 : 'border-gray-200 hover:border-[#085359]/50 focus:bg-white'
//                                                 }`}
//                                         />
//                                         <ErrorMessage name="OTP" component="p" className="text-red-500 text-sm mt-1" />
//                                     </div>
//                                 )}

//                                 {/* Terms & Conditions */}
//                                 <div className="bg-gray-50  rounded-full mt-0 regfrom-feild ml-7 " id='termsTop'>
//                                     <div className="flex items-start gap-3">
//                                         <input
//                                             type="checkbox"
//                                             checked={isChecked}
//                                             onChange={handleCheckboxChange}
//                                             className="mt-1 w-4 h-4 text-[#085359] border-gray-300 rounded focus:ring-[#085359] focus:ring-2"
//                                         />
//                                         <label className="text-sm text-gray-700 cursor-pointer">
//                                             I accept the{' '}
//                                             <Link
//                                                 to="/terms-and-conditions"
//                                                 className="text-[#20934a] hover:text-[#20934a] font-semibold hover:underline"
//                                             >
//                                                 Terms & Conditions
//                                             </Link>{' '}
//                                             and{' '}
//                                             <Link
//                                                 to="/privacy-policy"
//                                                 className="text-[#20934a] hover:text-[#20934a] font-semibold hover:underline"
//                                             >
//                                                 Privacy Policy
//                                             </Link>
//                                         </label>
//                                     </div>
//                                 </div>

//                                 {/* Register Button */}
//                                 <button
//                                     type="submit"
//                                     disabled={
//                                         isLoading ||
//                                         isVerifying ||
//                                         !otpSent ||
//                                         !isChecked ||
//                                         !isConfirmAgree ||
//                                         !values.OTP ||
//                                         !isValid
//                                     }
//                                     className={`w-full py-2 rounded-full font-bold text-lg transition-all duration-300 transform regfrom-feild ${isLoading ||
//                                         isVerifying ||
//                                         !otpSent ||
//                                         !isChecked ||
//                                         !isConfirmAgree ||
//                                         !values.OTP ||
//                                         !isValid
//                                         ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                         : 'bg-gradient-to-r from-[#20934a] to-[#c5d82e] text-white hover:from-[#1a7d3f] hover:to-[#b8c428] hover:shadow-xl hover:-translate-y-1 active:transform-none'
//                                         }`}
//                                 >
//                                     {isVerifying ? 'Processing...' : 'REGISTER'}
//                                 </button>
//                                 <div className="text-center mt-2 pt-2 border-t border-gray-200 regfrom-feild">
//                                     <p className="text-gray-600 mb-1">Already have an account?</p>
//                                     <Link
//                                         to="/login"
//                                         className="font-semibold text-[#085359] hover:text-[#20934a] transition-colors duration-200 hover:underline"
//                                     >
//                                         Sign In
//                                     </Link>
//                                 </div>
//                             </Form>

//                         )}
//                         {/* Login Link */}

//                     </Formik>
//                 </div>



//                 {/* Loading indicator */}
//                 {(isLoading || isVerifying) && (
//                     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                         <div className="bg-white p-6 rounded-xl shadow-2xl flex items-center gap-4">
//                             <RefreshCw className="w-6 h-6 animate-spin text-[#085359]" />
//                             <span className="text-gray-700 font-medium">
//                                 {isVerifying ? 'Verifying...' : 'Processing...'}
//                             </span>
//                         </div>
//                     </div>
//                 )}



//             </div>

//             {/* Terms & Conditions Modal - Mock component */}
//             {showModal && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 regfrom-feild">
//                     <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
//                         <div className="p-6">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4">Terms & Conditions</h3>
//                             <div className="text-sm text-gray-600 mb-6 space-y-2">
//                                 <h1>Terms and Conditions</h1>
//                                 <p>
//                                     Welcome to JAIMAX. Please read these Terms and Conditions
//                                     ("Terms") carefully before using our services. By accessing or
//                                     using our services, you agree to comply with these Terms. If you
//                                     do not agree with any part of these Terms, you may not use our
//                                     services.
//                                 </p>

//                                 <h5>1. Account Security</h5>
//                                 <p>
//                                     You are responsible for maintaining the security of your account
//                                     credentials. While we provide tools such as two-factor
//                                     authentication to enhance security, you are ultimately
//                                     responsible for safeguarding your account. You are liable for
//                                     all activities conducted under your account, including but not
//                                     limited to deposits, withdrawals, and trading activities. JAIMAX
//                                     shall not be liable for any loss or damage arising from your
//                                     failure to maintain the security of your account or password.
//                                     Promptly notify JAIMAX of any unauthorized access or use of your
//                                     account.
//                                 </p>

//                                 <h5>2. Suspicious Activity</h5>
//                                 <p>
//                                     JAIMAX reserves the right to suspend or restrict your account in
//                                     the event of suspicious activity.
//                                 </p>

//                                 <h5>3. Compliance and Conduct</h5>
//                                 <p>
//                                     You agree not to disrupt or attempt to tamper with JAIMAX's
//                                     services or servers in any manner that could harm our platform.
//                                     Respect the privacy of others and refrain from disclosing
//                                     personal information without consent. Do not impersonate JAIMAX
//                                     employees or any other individuals.
//                                 </p>

//                                 <h5>4. Financial Obligations</h5>
//                                 <p>
//                                     Any excess deposits or withdrawals mistakenly made to your
//                                     account must be promptly returned. Failure to do so may result
//                                     in legal action. Profits gained from exploiting platform
//                                     inconsistencies must be returned to JAIMAX.
//                                 </p>

//                                 <h5>5. Fraud and Security</h5>
//                                 <p>
//                                     Accounts involved in fraudulent or suspicious activities will be
//                                     temporarily suspended pending investigation by JAIMAX.
//                                 </p>

//                                 <h5>6. Prohibited Uses</h5>
//                                 <p>
//                                     Misuse of our services, including unauthorized access or
//                                     interference, may result in the suspension or termination of
//                                     your account.
//                                 </p>

//                                 <h5>7. Limitation of Liability</h5>
//                                 <p>
//                                     JAIMAX and its affiliates shall not be liable for any indirect,
//                                     incidental, special, consequential, or punitive damages arising
//                                     from your use of our services.
//                                 </p>

//                                 <h5>8. Disclaimer</h5>
//                                 <p>
//                                     Use of our services is at your own risk. JAIMAX provides the
//                                     service on an "AS IS" and "AS AVAILABLE" basis without
//                                     warranties of any kind.
//                                 </p>

//                                 <h5>9. Governing Law</h5>
//                                 <p>
//                                     These Terms are governed by the laws of Your Jurisdiction,
//                                     without regard to its conflict of law provisions.
//                                 </p>

//                                 <h5>10. Changes to Terms</h5>
//                                 <p>
//                                     JAIMAX reserves the right to modify these Terms at any time.
//                                     Revised Terms will be effective upon posting on our website.
//                                 </p>

//                                 <h5>11. Contact Us</h5>
//                                 <p>
//                                     If you have any questions or concerns regarding these Terms and
//                                     Conditions, please contact us at
//                                     <a href="mailto:support@jaimax.com">support@jaimax.com</a>.
//                                 </p>

//                                 <h1>Privacy Policy</h1>
//                                 <h5>1. Introduction</h5>
//                                 <p>
//                                     In this policy, we, us, our, and JAIMAX refer to JAIMAX. For
//                                     more information about us and how to contact us, see Section 11.
//                                     We respect your privacy and are committed to protecting it
//                                     through our compliance with this Policy.
//                                 </p>
//                                 <p>
//                                     This privacy policy (Policy) applies when we are acting as a
//                                     data controller with respect to the personal data of our users.
//                                     This Policy describes how we collect, use, and share personal
//                                     data of consumer users across our websites, including
//                                     www.Jaimax.com (the Website), JAIMAX’s mobile and desktop
//                                     application (the App), and services offered to users
//                                     (collectively with the Website and the App, the Services), and
//                                     from our partners and other third parties. When using any of our
//                                     Services, you consent to the collection, transfer, storage,
//                                     disclosure, and use of your personal data as described in this
//                                     Policy. This Policy does not apply to anonymized data, as it
//                                     cannot be used to identify you.
//                                 </p>
//                                 <p>
//                                     Please read this Policy carefully to understand our policies and
//                                     practices regarding your personal data and how we will treat it.
//                                     By accessing or using the Services, you agree to this Policy.
//                                     Our Services also incorporate privacy controls which affect how
//                                     we will process your personal data. Please refer to Section 5
//                                     for a list of rights with regard to your personal data and how
//                                     to exercise them.
//                                 </p>
//                                 <p>
//                                     This Policy may change from time to time. Your continued use of
//                                     the Services after we make changes is deemed to be acceptance of
//                                     those changes, so please check the Policy periodically for
//                                     updates.
//                                 </p>
//                                 <p>
//                                     To improve accessibility for all users, a summary and/or FAQ
//                                     section is included at the beginning of this policy, written in
//                                     plain language.
//                                 </p>

//                                 <h5>
//                                     2. Personal Data We Collect About You and How We Collect It
//                                 </h5>
//                                 <p>
//                                     We collect only the data necessary for each specific purpose,
//                                     ensuring we adhere to the principles of data minimization and
//                                     purpose limitation. We do not process data for unrelated
//                                     purposes without further consent.
//                                 </p>
//                                 <p>
//                                     There are three general categories of personal data we collect:
//                                 </p>
//                                 <p>
//                                     <strong>2.1 Information You Give to Us</strong>
//                                 </p>
//                                 <p>
//                                     (a) Account Data: We collect personal identification information
//                                     such as your name, date of birth, age, nationality, gender,
//                                     signature, utility bills, photographs, phone number, home
//                                     address, email address, and formal identification information.
//                                     This information is necessary for adequate performance of our
//                                     contract with you and to comply with legal obligations.
//                                 </p>
//                                 <p>
//                                     (b) Payment Information: We process financial information such
//                                     as bank account, credit card, or PayPal information to
//                                     facilitate the processing of payments. This is collected only as
//                                     needed for the contractual relationship or legitimate business
//                                     interests in service delivery.
//                                 </p>
//                                 <p>
//                                     <strong>2.2 Information We Automatically Collect</strong>
//                                 </p>
//                                 <p>
//                                     When you use the Services, we may automatically process
//                                     information about your device, usage patterns, and transactional
//                                     data to improve the user experience and functionality of our
//                                     Services.
//                                 </p>
//                                 <p>
//                                     <strong>2.3 Information We Collect from Third Parties</strong>
//                                 </p>
//                                 <p>
//                                     We may obtain information from public databases, credit bureaus,
//                                     ID verification partners, joint marketing partners, and social
//                                     media platforms for identity verification, as required for
//                                     compliance with our legal obligations.
//                                 </p>

//                                 <h5>3. Retention and Deletion of Personal Data</h5>
//                                 <p>
//                                     We retain personal data only for as long as necessary to fulfill
//                                     contractual obligations or comply with legal obligations. For
//                                     example, financial data may be retained for up to 7 years after
//                                     a transaction to meet auditing requirements.
//                                 </p>
//                                 <p>
//                                     Users may request the deletion of their data if it is no longer
//                                     needed for the purposes it was collected.
//                                 </p>

//                                 <h5>4. International Transfers of Your Personal Data</h5>
//                                 <p>
//                                     We may transfer, store, and process your data outside the EEA,
//                                     including countries where our affiliates and third-party service
//                                     providers are located.
//                                 </p>
//                                 <p>
//                                     Appropriate safeguards, such as Standard Contractual Clauses
//                                     (SCCs) or adequacy decisions, are in place to ensure an adequate
//                                     level of data protection for international transfers. You have
//                                     the right to request more details regarding these safeguards.
//                                 </p>

//                                 <h5>5. Third-Party Data Sharing</h5>
//                                 <p>
//                                     We may share data with specific third parties, such as payment
//                                     processors, ID verification services, and analytics providers.
//                                     Data sharing with each third party is limited to the purpose
//                                     required, such as processing payments or verifying identity.
//                                 </p>

//                                 <h5>6. Data Security</h5>
//                                 <p>
//                                     We employ a combination of technical and organizational measures
//                                     to secure your data, including encryption standards,
//                                     multi-factor authentication, and monitoring practices. Only
//                                     authorized personnel can access your information, and all data
//                                     is securely stored on Amazon AWS servers. Despite our security
//                                     measures, internet transmission of data carries some risks, so
//                                     transmission is at the user’s discretion.
//                                 </p>

//                                 <h5>7. Managing Data Collection and Marketing Preferences</h5>
//                                 <p>
//                                     Users have the option to manage their data preferences through a
//                                     privacy preferences center, where they can opt-out of certain
//                                     types of data processing or third-party sharing. Users may
//                                     contact support for assistance or use the provided link for
//                                     immediate preference management.
//                                 </p>

//                                 <h5>8. Automated Decision-Making and Profiling</h5>
//                                 <p>
//                                     Where automated systems are used for profiling (e.g., fraud
//                                     detection or targeted marketing), we provide transparency
//                                     regarding the impact on the user and ensure rights related to
//                                     automated decision-making. Users can request more information or
//                                     opt out of profiling if desired.
//                                 </p>

//                                 <h5>9. Policy Review and Update Schedule</h5>
//                                 <p>
//                                     This policy is reviewed annually to remain compliant with
//                                     evolving legal requirements and industry standards. Significant
//                                     changes to the policy will be communicated to users via email or
//                                     an in-app notification.
//                                 </p>

//                                 <h5>10. Contact Information</h5>
//                                 <p>
//                                     If you have questions, concerns, or requests regarding this
//                                     policy, please contact us via our support page at{" "}
//                                     <a href="https://jaimax.com/support-page" target="_blank">
//                                         https://jaimax.com/support-page
//                                     </a>
//                                 </p>
//                             </div>

//                             <div className="flex gap-3">
//                                 <button
//                                     onClick={handleCloseModal}
//                                     className="flex-1 py-[7px] px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
//                                 >
//                                     Decline
//                                 </button>
//                                 <button
//                                     onClick={() => onAgreeTerms(true)}
//                                     className="flex-1 py-[7px] px-4 bg-gradient-to-r from-[#085359] to-[#20934a] text-white rounded-lg hover:from-[#064044] hover:to-[#1a7d3f] transition-colors"
//                                 >
//                                     Accept
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default Register; 
// import React, { useState, useEffect } from 'react';
// import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, User, Phone, Key, ChevronDown, Clock, RefreshCw } from 'lucide-react';
// import Logo from '../Authentication/Logo';
// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     referralCode: '',
//     otp: '',
//     countryCode: '🇮🇳',
//     countryPhoneCode: '+91',
//     country: 'India'
//   });
  
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [showTermsModal, setShowTermsModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpLoading, setOtpLoading] = useState(false);
//   const [timer, setTimer] = useState(60);
//   const [canResend, setCanResend] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   // Mock country codes data
//   const countryCodes = [
//     { flag: '🇮🇳', country_code: '+91', country_name: 'India' },
//     { flag: '🇺🇸', country_code: '+1', country_name: 'United States' },
//     { flag: '🇬🇧', country_code: '+44', country_name: 'United Kingdom' },
//     { flag: '🇨🇦', country_code: '+1', country_name: 'Canada' },
//     { flag: '🇦🇺', country_code: '+61', country_name: 'Australia' },
//     { flag: '🇩🇪', country_code: '+49', country_name: 'Germany' },
//     { flag: '🇫🇷', country_code: '+33', country_name: 'France' },
//     { flag: '🇯🇵', country_code: '+81', country_name: 'Japan' },
//     { flag: '🇸🇬', country_code: '+65', country_name: 'Singapore' },
//     { flag: '🇦🇪', country_code: '+971', country_name: 'UAE' }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   // Timer for OTP resend
//   useEffect(() => {
//     let countdown;
//     if (otpSent && timer > 0) {
//       countdown = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       setCanResend(true);
//     }
//     return () => clearInterval(countdown);
//   }, [otpSent, timer]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleCountrySelect = (country) => {
//     setFormData(prev => ({
//       ...prev,
//       countryCode: country.flag,
//       countryPhoneCode: country.country_code,
//       country: country.country_name,
//       phone: '' // Reset phone when changing country
//     }));
//     setShowCountryDropdown(false);
//   };

//   const validate = () => {
//     const newErrors = {};
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!formData.name.trim()) {
//       newErrors.name = 'Full name is required';
//     } else if (formData.name.length < 3) {
//       newErrors.name = 'Name must be at least 3 characters';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(formData.email.trim())) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (formData.countryPhoneCode === '+91' && formData.phone.length !== 10) {
//       newErrors.phone = 'Phone number must be 10 digits for India';
//     } else if (formData.countryPhoneCode !== '+91' && (formData.phone.length < 4 || formData.phone.length > 15)) {
//       newErrors.phone = 'Phone number must be between 4 to 15 digits';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (otpSent && !formData.otp) {
//       newErrors.otp = 'Please enter the OTP';
//     }

//     if (!agreeTerms) {
//       newErrors.terms = 'Please accept the terms and conditions';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSendOTP = async () => {
//     // Validate required fields before sending OTP
//     const requiredFields = ['name', 'email', 'phone', 'password', 'confirmPassword'];
//     const hasErrors = requiredFields.some(field => {
//       if (!formData[field].trim()) return true;
//       if (field === 'confirmPassword' && formData.password !== formData.confirmPassword) return true;
//       return false;
//     });

//     if (hasErrors) {
//       validate();
//       return;
//     }

//     setOtpLoading(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       setOtpSent(true);
//       setTimer(120);
//       setCanResend(false);
//       alert('OTP sent to your email!');
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       alert('Failed to send OTP. Please try again.');
//     } finally {
//       setOtpLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       console.log('Registration data:', formData);
//       alert('Registration successful! (This is a demo)');
//     } catch (error) {
//       console.error('Registration error:', error);
//       alert('Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTermsChange = (e) => {
//     const checked = e.target.checked;
//     setAgreeTerms(checked);
//     if (checked) {
//       setShowTermsModal(true);
//     }
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
//   };

//   return (
//     <div className="min-h-screen bg-[#094e54] from-slate-500 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       {/* <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#094e54' }}></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#094e54', animationDelay: '2s' }}></div>
//         <div className="absolute top-40 left-40 w-60 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#0a5c64', animationDelay: '4s' }}></div>
        
//       </div> */}
      

//       <div className={`w-full max-w-6xl  grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
//         {/* Left Side - Branding */}
//         <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-8 p-8" 
//         style={{ transform: 'translateX(-7rem) translateY(2rem)' }}
//         >
            
//             <Logo/>
//           {/* <div className="space-y-4">
//             <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer" style={{ background: 'linear-gradient(135deg, #094e54, #0a5c64)' }}>
//               <Shield className="w-10 h-10 text-white" />
//             </div>
//             <h1 className="text-5xl font-bold text-white mb-4">
//               Join <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}>JAIMAX</span>
//             </h1>
//             <p className="text-xl text-gray-300 leading-relaxed max-w-md">
//               Create your account and start your journey with secure, innovative financial solutions. Join thousands of satisfied users.
//             </p>
//           </div> */}
          
//           <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="h-2 rounded-full opacity-60 animate-pulse" style={{ background: 'linear-gradient(135deg, #094e54, #4ecdc4)', animationDelay: `${i * 0.5}s` }}></div>
//             ))}
//           </div>
//         </div>

//           {/* Right Side - Register Form */}
//           <div className="w-full max-w-lg  h-screen "
//           style={{
//             position : "relative",
//             top : "-3rem"
//           }}
//           >
//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-300">
              
//               {/* Header */}
              

//               {/* Registration Form */}
//               <div className="space-y-3">
                
//                 {/* Full Name */}
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     Full Name
//                     <span className="text-red-400">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
//                     style={{ '--tw-ring-color': '#094e54' }}
//                     onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     placeholder="Enter your full name"
//                   />
//                   {errors.name && (
//                     <p className="text-red-400 text-sm flex items-center gap-1">
//                       <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Phone Number with Country Code */}
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
//                     <Phone className="w-4 h-4" />
//                     Phone Number
//                     <span className="text-red-400">*</span>
//                   </label>
//                   <div className="flex gap-2">
//                     <div className="relative">
//                       <button
//                         type="button"
//                         onClick={() => setShowCountryDropdown(!showCountryDropdown)}
//                         className="flex items-center gap-2 px-3 py-3 bg-white/10 border border-white/20 rounded-xl hover:border-white/40 transition-all duration-200 backdrop-blur-sm min-w-[120px]"
//                       >
//                         <span className="text-lg">{formData.countryCode}</span>
//                         <span className="font-medium text-gray-200">{formData.countryPhoneCode}</span>
//                         <ChevronDown className="w-4 h-4 text-gray-400" />
//                       </button>

//                       {showCountryDropdown && (
//                         <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
//                           {countryCodes.map((country, index) => (
//                             <button
//                               key={index}
//                               type="button"
//                               onClick={() => handleCountrySelect(country)}
//                               className="w-full flex items-center gap-3 px-4 py-2 hover:bg-black/10 transition-colors duration-200 text-left text-gray-800"
//                             >
//                               <span className="text-lg">{country.flag}</span>
//                               <span className="font-medium">{country.country_code}</span>
//                               <span className="text-sm">{country.country_name}</span>
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`flex-1 px-4 py-3 bg-white/10 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
//                       style={{ '--tw-ring-color': '#094e54' }}
//                       onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                       onBlur={(e) => e.target.style.boxShadow = 'none'}
//                       placeholder="Enter phone number"
//                     />
//                   </div>
//                   {errors.phone && (
//                     <p className="text-red-400 text-sm flex items-center gap-1">
//                       <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                       {errors.phone}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email Field */}
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
//                     <Mail className="w-4 h-4" />
//                     Email Address
//                     <span className="text-red-400">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
//                     style={{ '--tw-ring-color': '#094e54' }}
//                     onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     placeholder="Enter your email address"
//                   />
//                   {errors.email && (
//                     <p className="text-red-400 text-sm flex items-center gap-1">
//                       <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                       {errors.email}
//                     </p>
//                   )}
//                 </div>

//                 {/* Password Fields */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {/* Password */}
//                   <div className="space-y-1">
//                     <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
//                       <Lock className="w-4 h-4" />
//                       Password
//                       <span className="text-red-400">*</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 pr-12 bg-white/10 border ${errors.password ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
//                         style={{ '--tw-ring-color': '#094e54' }}
//                         onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                         onBlur={(e) => e.target.style.boxShadow = 'none'}
//                         placeholder="Password"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
//                       >
//                         {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                       </button>
//                     </div>
//                     {errors.password && (
//                       <p className="text-red-400 text-sm flex items-center gap-1">
//                         <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                         {errors.password}
//                       </p>
//                     )}
//                   </div>

//                   {/* Confirm Password */}
//                   <div className="space-y-1">
//                     <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
//                       <Lock className="w-4 h-4" />
//                       Confirm
//                       <span className="text-red-400">*</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         type={showConfirmPassword ? 'text' : 'password'}
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 pr-12 bg-white/10 border ${errors.confirmPassword ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
//                         style={{ '--tw-ring-color': '#094e54' }}
//                         onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                         onBlur={(e) => e.target.style.boxShadow = 'none'}
//                         placeholder="Confirm"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
//                       >
//                         {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                       </button>
//                     </div>
//                     {errors.confirmPassword && (
//                       <p className="text-red-400 text-sm flex items-center gap-1">
//                         <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                         {errors.confirmPassword}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Referral Code */}
//                 <div className="space-y-1">
//                   <label className="text-sm font-medium text-gray-200">
//                     Referral Code (Optional)
//                   </label>
//                   <input
//                     type="text"
//                     name="referralCode"
//                     value={formData.referralCode}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
//                     style={{ '--tw-ring-color': '#094e54' }}
//                     onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                     onBlur={(e) => e.target.style.boxShadow = 'none'}
//                     placeholder="Enter referral code"
//                   />
//                 </div>

//                 {/* Send OTP Button */}
//                 <button
//                   type="button"
//                   onClick={handleSendOTP}
//                   disabled={otpLoading || (otpSent && !canResend)}
//                   className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
//                     otpLoading || (otpSent && !canResend)
//                       ? 'bg-gray-500 text-white cursor-not-allowed'
//                       : 'text-white cursor-pointer'
//                   }`}
//                   style={{ 
//                     background: otpLoading || (otpSent && !canResend) ? '#666' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
//                     '--tw-ring-color': '#094e54'
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!otpLoading && (!otpSent || canResend)) {
//                       e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!otpLoading && (!otpSent || canResend)) {
//                       e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)';
//                     }
//                   }}
//                 >
//                   {otpLoading ? (
//                     <>
//                       <RefreshCw className="w-5 h-5 animate-spin" />
//                       Sending OTP...
//                     </>
//                   ) : otpSent && !canResend ? (
//                     <>
//                       <Clock className="w-5 h-5" />
//                       Resend OTP in {formatTime(timer)}
//                     </>
//                   ) : otpSent && canResend ? (
//                     <>
//                       <RefreshCw className="w-5 h-5" />
//                       Resend OTP
//                     </>
//                   ) : (
//                     <>
//                       <Mail className="w-5 h-5" />
//                       Send OTP
//                     </>
//                   )}
//                 </button>

//                 {/* OTP Field */}
//                 {otpSent && (
//                   <div className="space-y-1 p-4 rounded-xl" style={{ backgroundColor: '#094e54' + '20', border: '1px solid #094e54' + '40' }}>
//                     <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
//                       <Key className="w-4 h-4" />
//                       Enter OTP
//                       <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="otp"
//                       value={formData.otp}
//                       onChange={handleChange}
//                       maxLength="6"
//                       className={`w-full px-4 py-3 bg-white/10 border ${errors.otp ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-center text-lg font-semibold tracking-widest`}
//                       style={{ '--tw-ring-color': '#094e54' }}
//                       onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
//                       onBlur={(e) => e.target.style.boxShadow = 'none'}
//                       placeholder="Enter 6-digit OTP"
//                     />
//                     {errors.otp && (
//                       <p className="text-red-400 text-sm flex items-center gap-1">
//                         <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                         {errors.otp}
//                       </p>
//                     )}
//                   </div>
//                 )}

//                 {/* Terms & Conditions */}
//                 <div className="space-y-1">
//                   <label className="flex items-start gap-3 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       checked={agreeTerms}
//                       onChange={handleTermsChange}
//                       className="mt-1 w-4 h-4 bg-white/10 border-white/20 rounded focus:ring-2 cursor-pointer"
//                       style={{ accentColor: '#094e54' }}
//                     />
//                     <span className="text-sm text-gray-300">
//                       I accept the{' '}
//                       <span className="font-semibold transition-colors cursor-pointer" style={{ color: '#4ecdc4' }}>
//                         Terms & Conditions
//                       </span>{' '}
//                       and{' '}
//                       <span className="font-semibold transition-colors cursor-pointer" style={{ color: '#4ecdc4' }}>
//                         Privacy Policy
//                       </span>
//                     </span>
//                   </label>
//                   {errors.terms && (
//                     <p className="text-red-400 text-sm flex items-center gap-1">
//                       <span className="w-1 h-1 bg-red-400 rounded-full"></span>
//                       {errors.terms}
//                     </p>
//                   )}
//                 </div>

//                 {/* Register Button */}
//                 <button 
//                   type="button"
//                   onClick={handleSubmit}
//                   disabled={loading || !otpSent || !agreeTerms}
//                   className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 group ${
//                     loading || !otpSent || !agreeTerms
//                       ? 'bg-[#bace27] text-white cursor-not-allowed'
//                       : 'text-white cursor-pointer'
//                   }`}
//                   style={{ 
//                     background: loading || !otpSent || !agreeTerms ? '#bace27' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
//                     '--tw-ring-color': '#094e54'
//                   }}
//                   onMouseEnter={(e) => {
//                     if (!loading && otpSent && agreeTerms) {
//                       e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (!loading && otpSent && agreeTerms) {
//                       e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)';
//                     }
//                   }}
//                 >
//                   {loading ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full   animate-spin"></div>
//                       Creating Account...
//                     </>
//                   ) : (
//                     <>
//                       Create Account
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
//                     </>
//                   )}
//                 </button>

//                 {/* Login Link */}
//                 <div className="text-center pt-4 border-t border-white/10">
//                   <p className="text-gray-300">
//                     Already have an account?{' '}
//                     <button
//                       type="button"
//                       className="font-semibold transition-colors cursor-pointer"
//                       style={{ color: '#4ecdc4' }}
//                       onClick={() => alert('Login functionality would go here')}
//                       onMouseEnter={(e) => e.target.style.color = '#5dd5cd'}
//                       onMouseLeave={(e) => e.target.style.color = '#4ecdc4'}
//                     >
//                       Sign In
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Branding */}
//             <div className="lg:hidden text-center mt-8">
//               <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12 cursor-pointer hover:rotate-0 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #094e54, #0a5c64)' }}>
//                 <Shield className="w-8 h-8 text-white" />
//               </div>
//               <h1 className="text-2xl font-bold text-white mb-2">
//                 Join <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}>JAIMAX</span>
//               </h1>
//               <p className="text-gray-300 text-sm">Create your account and unlock possibilities</p>
//             </div>
//           </div>
//         </div>

//       {/* Terms Modal */}
//       {showTermsModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
//             <div className="p-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Terms & Conditions</h3>
//               <div className="text-sm text-gray-600 mb-6 space-y-3">
//                 <h4 className="font-semibold text-gray-800">Welcome to JAIMAX</h4>
//                 <p>
//                   Please read these Terms and Conditions carefully before using our services. 
//                   By accessing or using our services, you agree to comply with these Terms.
//                 </p>

//                 <h5 className="font-semibold text-gray-800">1. Account Security</h5>
//                 <p>
//                   You are responsible for maintaining the security of your account credentials. 
//                   JAIMAX shall not be liable for any loss or damage arising from your failure 
//                   to maintain the security of your account or password.
//                 </p>

//                 <h5 className="font-semibold text-gray-800">2. Compliance and Conduct</h5>
//                 <p>
//                   You agree not to disrupt or attempt to tamper with JAIMAX's services or servers. 
//                   Respect the privacy of others and refrain from disclosing personal information 
//                   without consent.
//                 </p>

//                 <h5 className="font-semibold text-gray-800">3. Financial Obligations</h5>
//                 <p>
//                   Any excess deposits or withdrawals mistakenly made to your account must be 
//                   promptly returned. Failure to do so may result in legal action.
//                 </p>

//                 <h5 className="font-semibold text-gray-800">4. Privacy Policy</h5>
//                 <p>
//                   We respect your privacy and are committed to protecting it through our 
//                   compliance with this Policy. We collect only the data necessary for each 
//                   specific purpose.
//                 </p>

//                 <h5 className="font-semibold text-gray-800">5. Contact Us</h5>
//                 <p>
//                   If you have any questions regarding these Terms and Conditions, please 
//                   contact us at support@jaimax.com.
//                 </p>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={() => {
//                     setShowTermsModal(false);
//                     setAgreeTerms(false);
//                   }}
//                   className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
//                 >
//                   Decline
//                 </button>
//                 <button
//                   onClick={() => {
//                     setShowTermsModal(false);
//                     setAgreeTerms(true);
//                   }}
//                   className="flex-1 py-3 px-4 text-white rounded-lg transition-colors"
//                   style={{ background: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}
//                   onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)'}
//                   onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)'}
//                 >
//                   Accept
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RegisterPage;


// import React, { useState, useEffect, useCallback } from 'react';
// // import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, User, Phone, Key, ChevronDown, Clock, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

// // Mock Logo component
// const Logo = () => (
//   <div className="flex flex-col items-center space-y-4">
//     <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer" style={{ background: 'linear-gradient(135deg, #094e54, #0a5c64)' }}>
//       <Shield className="w-10 h-10 text-white" />
//     </div>
//     <h1 className="text-5xl font-bold text-white mb-4">
//       Join <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}>JAIMAX</span>
//     </h1>
//     <p className="text-xl text-gray-300 leading-relaxed max-w-md">
//       Create your account and start your journey with secure, innovative financial solutions. Join thousands of satisfied users.
//     </p>
//   </div>
// );


import React, { useState, useEffect, useCallback } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Shield, User, Phone, Key, ChevronDown, Clock, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    otp: '',
    countryCode: '🇮🇳',
    countryPhoneCode: '+91',
    country: 'India'
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [fieldValidation, setFieldValidation] = useState({});

  // Enhanced country codes data
  const countryCodes = [
    { flag: '🇮🇳', country_code: '+91', country_name: 'India' },
    { flag: '🇺🇸', country_code: '+1', country_name: 'United States' },
    { flag: '🇬🇧', country_code: '+44', country_name: 'United Kingdom' },
    { flag: '🇨🇦', country_code: '+1', country_name: 'Canada' },
    { flag: '🇦🇺', country_code: '+61', country_name: 'Australia' },
    { flag: '🇩🇪', country_code: '+49', country_name: 'Germany' },
    { flag: '🇫🇷', country_code: '+33', country_name: 'France' },
    { flag: '🇯🇵', country_code: '+81', country_name: 'Japan' },
    { flag: '🇸🇬', country_code: '+65', country_name: 'Singapore' },
    { flag: '🇦🇪', country_code: '+971', country_name: 'UAE' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Timer for OTP resend
  useEffect(() => {
    let countdown;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  // Real-time validation
  const validateField = useCallback((name, value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d+$/;
    
    switch (name) {
      case 'name':
        if (!value.trim()) return { isValid: false, message: 'Full name is required' };
        if (value.length < 3) return { isValid: false, message: 'Name must be at least 3 characters' };
        return { isValid: true, message: '' };
      
      case 'email':
        if (!value.trim()) return { isValid: false, message: 'Email is required' };
        if (!emailRegex.test(value.trim())) return { isValid: false, message: 'Please enter a valid email address' };
        return { isValid: true, message: '' };
      
      case 'phone':
        if (!value.trim()) return { isValid: false, message: 'Phone number is required' };
        if (!phoneRegex.test(value)) return { isValid: false, message: 'Phone number should contain only digits' };
        if (formData.countryPhoneCode === '+91' && value.length !== 10) return { isValid: false, message: 'Phone number must be 10 digits for India' };
        if (formData.countryPhoneCode !== '+91' && (value.length < 4 || value.length > 15)) return { isValid: false, message: 'Phone number must be between 4 to 15 digits' };
        return { isValid: true, message: '' };
      
      case 'password':
        if (!value) return { isValid: false, message: 'Password is required' };
        if (value.length < 6) return { isValid: false, message: 'Password must be at least 6 characters long' };
        if (!/(?=.*[a-z])/.test(value)) return { isValid: false, message: 'Password must contain at least one lowercase letter' };
        if (!/(?=.*[A-Z])/.test(value)) return { isValid: false, message: 'Password must contain at least one uppercase letter' };
        if (!/(?=.*\d)/.test(value)) return { isValid: false, message: 'Password must contain at least one number' };
        return { isValid: true, message: '' };
      
      case 'confirmPassword':
        if (!value) return { isValid: false, message: 'Please confirm your password' };
        if (formData.password !== value) return { isValid: false, message: 'Passwords do not match' };
        return { isValid: true, message: '' };
      
      default:
        return { isValid: true, message: '' };
    }
  }, [formData.password, formData.countryPhoneCode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const validation = validateField(name, value);
    setFieldValidation(prev => ({
      ...prev,
      [name]: validation
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      countryCode: country.flag,
      countryPhoneCode: country.country_code,
      country: country.country_name,
      phone: ''
    }));
    setShowCountryDropdown(false);
    
    // Revalidate phone if it has content
    if (formData.phone) {
      const validation = validateField('phone', '');
      setFieldValidation(prev => ({
        ...prev,
        phone: validation
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    // Validate all fields
    Object.keys(formData).forEach(field => {
      if (field !== 'referralCode' && field !== 'otp' && field !== 'countryCode' && field !== 'countryPhoneCode' && field !== 'country') {
        const validation = validateField(field, formData[field]);
        if (!validation.isValid) {
          newErrors[field] = validation.message;
        }
      }
    });

    if (otpSent && !formData.otp) {
      newErrors.otp = 'Please enter the OTP';
    }

    if (!agreeTerms) {
      newErrors.terms = 'Please accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOTP = async () => {
    const requiredFields = ['name', 'email', 'phone', 'password', 'confirmPassword'];
    const hasErrors = requiredFields.some(field => {
      const validation = validateField(field, formData[field]);
      return !validation.isValid;
    });

    if (hasErrors) {
      validate();
      return;
    }

    setOtpLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setOtpSent(true);
      setTimer(120);
      setCanResend(false);
      // Show success notification instead of alert
      setFieldValidation(prev => ({
        ...prev,
        otpSent: { isValid: true, message: 'OTP sent successfully to your email!' }
      }));
    } catch (error) {
      console.error('Error sending OTP:', error);
      setFieldValidation(prev => ({
        ...prev,
        otpSent: { isValid: false, message: 'Failed to send OTP. Please try again.' }
      }));
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration data:', formData);
      setFieldValidation(prev => ({
        ...prev,
        registration: { isValid: true, message: 'Registration successful! Welcome to JAIMAX!' }
      }));
    } catch (error) {
      console.error('Registration error:', error);
      setFieldValidation(prev => ({
        ...prev,
        registration: { isValid: false, message: 'Registration failed. Please try again.' }
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleTermsChange = (e) => {
    const checked = e.target.checked;
    setAgreeTerms(checked);
    if (checked) {
      setShowTermsModal(true);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
  };

  const getFieldIcon = (fieldName) => {
    const validation = fieldValidation[fieldName];
    if (!validation) return null;
    
    return validation.isValid ? (
      <CheckCircle className="w-4 h-4 text-green-400" />
    ) : (
      <AlertCircle className="w-4 h-4 text-red-400" />
    );
  };

  return (
    <div className="min-h-screen bg-[#094e54] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#094e54' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#094e54', animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ backgroundColor: '#0a5c64', animationDelay: '4s' }}></div>
      </div>

      <div className={`w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center space-y-8 p-8" 
        style={{ transform: 'translateX(-7rem) translateY(2rem)' }}>
          <Logo/>
          <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 rounded-full opacity-60 animate-pulse" style={{ background: 'linear-gradient(135deg, #094e54, #4ecdc4)', animationDelay: `${i * 0.5}s` }}></div>
            ))}
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full max-w-lg" style={{ position: "relative", top: "-3rem" }}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-300">
            
            {/* Success/Error Messages */}
            {fieldValidation.otpSent && (
              <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${fieldValidation.otpSent.isValid ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                {fieldValidation.otpSent.isValid ? <CheckCircle className="w-5 h-5 text-green-400" /> : <AlertCircle className="w-5 h-5 text-red-400" />}
                <span className={`text-sm ${fieldValidation.otpSent.isValid ? 'text-green-300' : 'text-red-300'}`}>
                  {fieldValidation.otpSent.message}
                </span>
              </div>
            )}

            {fieldValidation.registration && (
              <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${fieldValidation.registration.isValid ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                {fieldValidation.registration.isValid ? <CheckCircle className="w-5 h-5 text-green-400" /> : <AlertCircle className="w-5 h-5 text-red-400" />}
                <span className={`text-sm ${fieldValidation.registration.isValid ? 'text-green-300' : 'text-red-300'}`}>
                  {fieldValidation.registration.message}
                </span>
              </div>
            )}

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                  <span className="text-red-400">*</span>
                  {getFieldIcon('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.name ? 'border-red-400' : 
                    fieldValidation.name?.isValid ? 'border-green-400' : 'border-white/20'
                  } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                  style={{ '--tw-ring-color': '#094e54' }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                  placeholder="Enter your full name"
                />
                {(errors.name || fieldValidation.name?.message) && (
                  <p className={`text-sm flex items-center gap-1 ${errors.name ? 'text-red-400' : fieldValidation.name?.isValid ? 'text-green-400' : 'text-red-400'}`}>
                    <span className={`w-1 h-1 rounded-full ${errors.name ? 'bg-red-400' : fieldValidation.name?.isValid ? 'bg-green-400' : 'bg-red-400'}`}></span>
                    {errors.name || fieldValidation.name?.message}
                  </p>
                )}
              </div>

              {/* Phone Number with Country Code */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number
                  <span className="text-red-400">*</span>
                  {getFieldIcon('phone')}
                </label>
                <div className="flex gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-2 px-3 py-3 bg-white/10 border border-white/20 rounded-xl hover:border-white/40 transition-all duration-200 backdrop-blur-sm min-w-[120px]"
                    >
                      <span className="text-lg">{formData.countryCode}</span>
                      <span className="font-medium text-gray-200">{formData.countryPhoneCode}</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>

                    {showCountryDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-white/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
                        {countryCodes.map((country, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleCountrySelect(country)}
                            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-black/10 transition-colors duration-200 text-left text-gray-800"
                          >
                            <span className="text-lg">{country.flag}</span>
                            <span className="font-medium">{country.country_code}</span>
                            <span className="text-sm">{country.country_name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`flex-1 px-4 py-3 bg-white/10 border ${
                      errors.phone ? 'border-red-400' : 
                      fieldValidation.phone?.isValid ? 'border-green-400' : 'border-white/20'
                    } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                    style={{ '--tw-ring-color': '#094e54' }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter phone number"
                  />
                </div>
                {(errors.phone || fieldValidation.phone?.message) && (
                  <p className={`text-sm flex items-center gap-1 ${errors.phone ? 'text-red-400' : fieldValidation.phone?.isValid ? 'text-green-400' : 'text-red-400'}`}>
                    <span className={`w-1 h-1 rounded-full ${errors.phone ? 'bg-red-400' : fieldValidation.phone?.isValid ? 'bg-green-400' : 'bg-red-400'}`}></span>
                    {errors.phone || fieldValidation.phone?.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                  <span className="text-red-400">*</span>
                  {getFieldIcon('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.email ? 'border-red-400' : 
                    fieldValidation.email?.isValid ? 'border-green-400' : 'border-white/20'
                  } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                  style={{ '--tw-ring-color': '#094e54' }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                  placeholder="Enter your email address"
                />
                {(errors.email || fieldValidation.email?.message) && (
                  <p className={`text-sm flex items-center gap-1 ${errors.email ? 'text-red-400' : fieldValidation.email?.isValid ? 'text-green-400' : 'text-red-400'}`}>
                    <span className={`w-1 h-1 rounded-full ${errors.email ? 'bg-red-400' : fieldValidation.email?.isValid ? 'bg-green-400' : 'bg-red-400'}`}></span>
                    {errors.email || fieldValidation.email?.message}
                  </p>
                )}
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Password */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                    <span className="text-red-400">*</span>
                    {getFieldIcon('password')}
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 pr-12 bg-white/10 border ${
                        errors.password ? 'border-red-400' : 
                        fieldValidation.password?.isValid ? 'border-green-400' : 'border-white/20'
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                      style={{ '--tw-ring-color': '#094e54' }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {(errors.password || fieldValidation.password?.message) && (
                    <p className={`text-sm flex items-center gap-1 ${errors.password ? 'text-red-400' : fieldValidation.password?.isValid ? 'text-green-400' : 'text-red-400'}`}>
                      <span className={`w-1 h-1 rounded-full ${errors.password ? 'bg-red-400' : fieldValidation.password?.isValid ? 'bg-green-400' : 'bg-red-400'}`}></span>
                      {errors.password || fieldValidation.password?.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Confirm
                    <span className="text-red-400">*</span>
                    {getFieldIcon('confirmPassword')}
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 pr-12 bg-white/10 border ${
                        errors.confirmPassword ? 'border-red-400' : 
                        fieldValidation.confirmPassword?.isValid ? 'border-green-400' : 'border-white/20'
                      } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm`}
                      style={{ '--tw-ring-color': '#094e54' }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                      placeholder="Confirm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {(errors.confirmPassword || fieldValidation.confirmPassword?.message) && (
                    <p className={`text-sm flex items-center gap-1 ${errors.confirmPassword ? 'text-red-400' : fieldValidation.confirmPassword?.isValid ? 'text-green-400' : 'text-red-400'}`}>
                      <span className={`w-1 h-1 rounded-full ${errors.confirmPassword ? 'bg-red-400' : fieldValidation.confirmPassword?.isValid ? 'bg-green-400' : 'bg-red-400'}`}></span>
                      {errors.confirmPassword || fieldValidation.confirmPassword?.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Referral Code */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-200">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  style={{ '--tw-ring-color': '#094e54' }}
                  onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                  placeholder="Enter referral code"
                />
              </div>

              {/* Send OTP Button */}
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={otpLoading || (otpSent && !canResend)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  otpLoading || (otpSent && !canResend)
                    ? 'bg-gray-500 text-white cursor-not-allowed'
                    : 'text-white cursor-pointer'
                }`}
                style={{ 
                  background: otpLoading || (otpSent && !canResend) ? '#666' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
                  '--tw-ring-color': '#094e54'
                }}
                onMouseEnter={(e) => {
                  if (!otpLoading && (!otpSent || canResend)) {
                    e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!otpLoading && (!otpSent || canResend)) {
                    e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)';
                  }
                }}
              >
                {otpLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Sending OTP...
                  </>
                ) : otpSent && !canResend ? (
                  <>
                    <Clock className="w-5 h-5" />
                    Resend OTP in {formatTime(timer)}
                  </>
                ) : otpSent && canResend ? (
                  <>
                    <RefreshCw className="w-5 h-5" />
                    Resend OTP
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send OTP
                  </>
                )}
              </button>

              {/* OTP Field */}
              {otpSent && (
                <div className="space-y-1 p-4 rounded-xl" style={{ backgroundColor: '#094e54' + '20', border: '1px solid #094e54' + '40' }}>
                  <label className="text-sm font-medium text-gray-200 flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Enter OTP
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    maxLength="6"
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.otp ? 'border-red-400' : 'border-white/20'} rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-center text-lg font-semibold tracking-widest`}
                    style={{ '--tw-ring-color': '#094e54' }}
                    onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #094e54'}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter 6-digit OTP"
                  />
                  {errors.otp && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                      {errors.otp}
                    </p>
                  )}
                </div>
              )}

              {/* Terms & Conditions */}
              <div className="space-y-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={handleTermsChange}
                    className="mt-1 w-4 h-4 bg-white/10 border-white/20 rounded focus:ring-2 cursor-pointer"
                    style={{ accentColor: '#094e54' }}
                  />
                  <span className="text-sm text-gray-300">
                    I accept the{' '}
                    <span className="font-semibold transition-colors cursor-pointer" style={{ color: '#4ecdc4' }}>
                      Terms & Conditions
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold transition-colors cursor-pointer" style={{ color: '#4ecdc4' }}>
                      Privacy Policy
                    </span>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                    {errors.terms}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <button 
                type="submit"
                disabled={loading || !otpSent || !agreeTerms}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2 group ${
                  loading || !otpSent || !agreeTerms
                    ? 'text-white cursor-not-allowed'
                    : 'text-white cursor-pointer'
                }`}
                style={{ 
                  background: loading || !otpSent || !agreeTerms ? '#666' : 'linear-gradient(135deg, #094e54, #4ecdc4)',
                  '--tw-ring-color': '#094e54'
                }}
                onMouseEnter={(e) => {
                  if (!loading && otpSent && agreeTerms) {
                    e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading && otpSent && agreeTerms) {
                    e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)';
                  }
                }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" 
                     style={{ 
                  background: 'linear-gradient(135deg, #094e54, #4ecdc4)',
                  '--tw-ring-color': '#094e54'
                }}
                    ></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>

              {/* Login Link */}
              <div className="text-center pt-4 border-t border-white/10">
                <p className="text-gray-300">
                  Already have an account?{' '}
                  <button
                    type="button"
                    className="font-semibold transition-colors cursor-pointer"
                    style={{ color: '#4ecdc4' }}
                    onClick={() => alert('Login functionality would go here')}
                    onMouseEnter={(e) => e.target.style.color = '#5dd5cd'}
                    onMouseLeave={(e) => e.target.style.color = '#4ecdc4'}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Mobile Branding */}
          <div className="lg:hidden text-center mt-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-12 cursor-pointer hover:rotate-0 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #094e54, #0a5c64)' }}>
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Join <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}>JAIMAX</span>
            </h1>
            <p className="text-gray-300 text-sm">Create your account and unlock possibilities</p>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Terms & Conditions</h3>
              <div className="text-sm text-gray-600 mb-6 space-y-3">
                <h4 className="font-semibold text-gray-800">Welcome to JAIMAX</h4>
                <p>
                  Please read these Terms and Conditions carefully before using our services. 
                  By accessing or using our services, you agree to comply with these Terms.
                </p>

                <h5 className="font-semibold text-gray-800">1. Account Security</h5>
                <p>
                  You are responsible for maintaining the security of your account credentials. 
                  JAIMAX shall not be liable for any loss or damage arising from your failure 
                  to maintain the security of your account or password.
                </p>

                <h5 className="font-semibold text-gray-800">2. Compliance and Conduct</h5>
                <p>
                  You agree not to disrupt or attempt to tamper with JAIMAX's services or servers. 
                  Respect the privacy of others and refrain from disclosing personal information 
                  without consent.
                </p>

                <h5 className="font-semibold text-gray-800">3. Financial Obligations</h5>
                <p>
                  Any excess deposits or withdrawals mistakenly made to your account must be 
                  promptly returned. Failure to do so may result in legal action.
                </p>

                <h5 className="font-semibold text-gray-800">4. Privacy Policy</h5>
                <p>
                  We respect your privacy and are committed to protecting it through our 
                  compliance with this Policy. We collect only the data necessary for each 
                  specific purpose.
                </p>

                <h5 className="font-semibold text-gray-800">5. Contact Us</h5>
                <p>
                  If you have any questions regarding these Terms and Conditions, please 
                  contact us at support@jaimax.com.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowTermsModal(false);
                    setAgreeTerms(false);
                  }}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={() => {
                    setShowTermsModal(false);
                    setAgreeTerms(true);
                  }}
                  className="flex-1 py-3 px-4 text-white rounded-lg transition-colors"
                  style={{ background: 'linear-gradient(135deg, #094e54, #4ecdc4)' }}
                  onMouseEnter={(e) => e.target.style.background = 'linear-gradient(135deg, #0a5c64, #5dd5cd)'}
                  onMouseLeave={(e) => e.target.style.background = 'linear-gradient(135deg, #094e54, #4ecdc4)'}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;