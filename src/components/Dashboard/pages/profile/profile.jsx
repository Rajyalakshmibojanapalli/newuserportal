// import React, { useState } from 'react';

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     address: '',
//     city: '',
//     state: '',
//     country: 'India',
//     profilePicture: null,
//     currentPassword: '',
//     otp: '',
//     newpassword: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [passwordErrors, setPasswordErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [status, setStatus] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'profilePicture') {
//       setFormData({ ...formData, profilePicture: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const validateProfile = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required.';
//     } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
//       newErrors.name = 'Name should contain only letters and spaces.';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required.';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email address.';
//     }

//     if (!formData.mobile.trim()) {
//       newErrors.mobile = 'Mobile number is required.';
//     } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
//       newErrors.mobile = 'Enter a valid 10-digit Indian mobile number.';
//     }

//     if (!formData.address.trim()) {
//       newErrors.address = 'Address is required.';
//     } else if (!/^[A-Za-z0-9\s,.'-]{5,100}$/.test(formData.address)) {
//       newErrors.address = 'Address should be 5-100 characters.';
//     }

//     if (!formData.city.trim()) {
//       newErrors.city = 'City is required.';
//     } else if (!/^[A-Za-z\s]+$/.test(formData.city)) {
//       newErrors.city = 'City should contain only letters.';
//     }

//     if (!formData.state.trim()) {
//       newErrors.state = 'State is required.';
//     } else if (!/^[A-Za-z\s]+$/.test(formData.state)) {
//       newErrors.state = 'State should contain only letters.';
//     }

//     if (!formData.country.trim()) {
//       newErrors.country = 'Country is required.';
//     } else if (!/^[A-Za-z\s]+$/.test(formData.country)) {
//       newErrors.country = 'Country should contain only letters.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateVerifyOTP = () => {
//     const newPasswordErrors = {};
//     if (!formData.currentPassword.trim()) newPasswordErrors.currentPassword = 'Current password is required.';
//     if (!formData.otp.trim()) newPasswordErrors.otp = 'OTP is required.';
//     setPasswordErrors(newPasswordErrors);
//     return Object.keys(newPasswordErrors).length === 0;
//   };

//   const handleVerifyOTP = () => {
//     if (validateVerifyOTP()) {
//       setStatus(true);
//       console.log('OTP verified');
//     }
//   };

//   const GetOtp = () => {
//     alert("OTP sent to mail");
//   };

//   const validateNewPassword = () => {
//     const newPasswordErrors = {};
//     if (!formData.currentPassword.trim()) newPasswordErrors.currentPassword = 'Current password is required.';
//     if (!formData.newpassword.trim()) newPasswordErrors.newpassword = 'New password is required.';
//     else if (formData.newpassword.length < 6) newPasswordErrors.newpassword = 'New password must be at least 6 characters.';
//     setPasswordErrors(newPasswordErrors);
//     return Object.keys(newPasswordErrors).length === 0;
//   };

//   const handleConfirmPassword = () => {
//     if (validateNewPassword()) {
//       console.log('Password change confirmed:', formData.newpassword);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateProfile()) {
//       console.log('Profile form submitted:', formData);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#1d8e85] text-white p-4 flex flex-col items-center">
//       <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

//         {/* Profile Details Form */}
//         <form onSubmit={handleSubmit} className="md:w-2/3 w-full">
//           <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
//             <legend className="text-2xl font-semibold px-2">Profile Details</legend>

//             <div className="flex justify-center items-center gap-12">
//               <div className="w-32">
//                 <label htmlFor="profilePicture" className="block text-sm font-medium mb-2 text-center">Profile Picture *</label>
//                 <div className="border border-white/20 rounded-full bg-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#4ecdc4] transition w-32 h-32 mx-auto">
//                   <input
//                     id="profilePicture"
//                     type="file"
//                     name="profilePicture"
//                     onChange={handleInputChange}
//                     className="hidden"
//                   />
//                   <label htmlFor="profilePicture" className="flex flex-col items-center justify-center text-white/60 cursor-pointer select-none">
//                     <span className="text-5xl mb-1">👤</span>
//                     <span className="text-xs">Upload</span>
//                   </label>
//                 </div>
//               </div>

//               <div className="hidden sm:block text-center sm:text-left p-6 mt-4 border-l-4 border-[#4ecdc4] bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
//                 <p className="text-sm text-white/70">Please provide accurate and up-to-date profile information.</p>
//                 <p className="text-sm text-white/70 mt-1">This helps us communicate with you effectively and ensures smooth access to our services.</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {['name', 'email', 'mobile', 'address', 'city', 'state', 'country'].map((field) => (
//                 <div key={field}>
//                   <label htmlFor={field} className="block text-sm font-medium mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')} *</label>
//                   <input
//                     id={field}
//                     name={field}
//                     type="text"
//                     value={formData[field]}
//                     onChange={handleInputChange}
//                     placeholder={`Enter your ${field}`}
//                     className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                       ${errors[field] ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                   />
//                   {errors[field] && (
//                     <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
//                   )}
//                 </div>
//               ))}

//               <div>
//                 <input
//                   type="submit"
//                   value="Update Profile"
//                   className="mt-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] flex justify-center text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition w-full max-w-xs mx-auto cursor-pointer"
//                 />
//               </div>
//             </div>
//           </fieldset>
//         </form>

//         {/* Change Password Form */}
//         <form className="md:w-1/3 w-full">
//           <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
//             <legend className="text-2xl font-semibold px-2">Change Password</legend>
//             <p className="text-sm text-white/70 mb-4">Enter your current password and OTP to change your password securely.</p>

//             <div>
//               <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password *</label>
//               <div className="relative">
//                 <input
//                   id="currentPassword"
//                   name="currentPassword"
//                   type={showPassword ? 'text' : 'password'}
//                   value={formData.currentPassword}
//                   onChange={handleInputChange}
//                   placeholder="Enter current password"
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 pr-10 focus:outline-none focus:ring-2
//                     ${passwordErrors.currentPassword ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-2.5 text-white/60 hover:text-[#4ecdc4]"
//                   aria-label={showPassword ? 'Hide password' : 'Show password'}
//                 >
//                   {showPassword ? '🙈' : '👁️'}
//                 </button>
//               </div>
//               {passwordErrors.currentPassword && (
//                 <p className="mt-1 text-xs text-red-400">{passwordErrors.currentPassword}</p>
//               )}
//             </div>

//             <div className="flex gap-3 items-center">
//               <div className="flex-grow">
//                 <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP *</label>
//                 <input
//                   id="otp"
//                   name="otp"
//                   type="text"
//                   value={formData.otp}
//                   onChange={handleInputChange}
//                   placeholder="Enter OTP"
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                     ${passwordErrors.otp ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                 />
//                 {passwordErrors.otp && (
//                   <p className="mt-1 text-xs text-red-400">{passwordErrors.otp}</p>
//                 )}
//               </div>
//               <button
//                 type="button"
//                 onClick={GetOtp}
//                 className="h-10 mt-5 px-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white rounded-full font-semibold hover:from-[#0a5c64] hover:to-[#5dd5cd] transition whitespace-nowrap"
//               >
//                 Get OTP
//               </button>
//             </div>

//             <button
//               type="button"
//               onClick={handleVerifyOTP}
//               className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
//             >
//               Verify OTP
//             </button>

//             {status && (
//               <>
//                 <div className="flex-grow">
//                   <label htmlFor="newpassword" className="block text-sm font-medium mb-1">New Password *</label>
//                   <input
//                     id="newpassword"
//                     name="newpassword"
//                     type="password"
//                     value={formData.newpassword}
//                     onChange={handleInputChange}
//                     placeholder="Enter new password"
//                     className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                       ${passwordErrors.newpassword ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                   />
//                   {passwordErrors.newpassword && (
//                     <p className="mt-1 text-xs text-red-400">{passwordErrors.newpassword}</p>
//                   )}
//                 </div>
//                 <button
//                   type="button"
//                   onClick={handleConfirmPassword}
//                   className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition"
//                 >
//                   Confirm Password
//                 </button>
//               </>
//             )}
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";

// Import API hooks and context from your existing code
import {
  useChangePwdMutation,
  useChangePwdReqMutation,
  useVerifyMutation,
} from "../../../../Authentication/authApiSlice";
// import { MyContext } from "../auth/AuthContext";
import { MyContext } from '../../../../Authentication/AuthContext';
// import { useUserDataQuery } from "../dashboard/dashboardApiSlice";
import { useUserDataQuery } from "../dashBoard/DashboardApliSlice";
import { useUpdateAddressMutation } from './profileApiSlice'; 
import countryCodes from "../../../../Authentication/countryCodes.json"
const Profile = () => {
  const { data } = useContext(MyContext);
const [showPassword, setShowPassword] = useState(false);



  // API hooks
  // const [changePwd, { isLoading }] = useChangePwdMutation();
  // const [changePwdReq] = useChangePwdReqMutation();
  // const [verify, { isLoading: isVerifying }] = useVerifyMutation();
  // const [update, { isLoading: updateLoader }] = useUpdateAddressMutation();
  // const { data: userData, error } = useUserDataQuery();

  // Form state
 const [formData, setFormData] = useState({
    password: "",
    newPassword: "",
    confirmPwd: "",
    otp: "",
  });


   const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(120);
  const [resendOtp, setResendOtp] = useState(false);
  const [isOtpSending, setIsOtpSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [changePwd, { isLoading }] = useChangePwdMutation();
  const [changePwdReq] = useChangePwdReqMutation();
  const [verify, { isLoading: isVerifying }] = useVerifyMutation();
  const [update, { isLoading: updateLoader }] = useUpdateAddressMutation();
  const [loading, setLoading] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);

  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");
  // const [icon, setIcon] = useState(hide);
  // const [icon2, setIcon2] = useState(hide);
  const [type3, setType3] = useState("password");
  // const [icon3, setIcon3] = useState(hide);
  const [profileImage, setProfileImage] = useState("");

  const [otpVerified, setOtpVerified] = useState(false);
  const { data: userData, error } = useUserDataQuery();

  console.log(data)
  const profileRef = useRef(null);

 
  const [state, setState] = useState({
    name: userData?.data?.name || "",
    _id: userData?.data?._id || "",
    email: userData?.data?.email || "",
    phone: userData?.data?.phone || "",
    // wallet_address: userData?.data?.wallet_address || "",
    address: userData?.data?.address || "",
    city: userData?.data?.city || "",
    country: userData?.data?.country || "",
    state: userData?.data?.state || "",
    profile: userData?.data?.profile || "",
  });
   useEffect(() => {
    setState({
      name: userData?.data?.name || "",
      _id: userData?.data?._id || "",
      email: userData?.data?.email || "",
      phone: userData?.data?.phone || "",
      // wallet_address: userData?.data?.wallet_address || "",
      address: userData?.data?.address || "",
      city: userData?.data?.city || "",
      country: userData?.data?.country || "",
      state: userData?.data?.state || "",
      profile: userData?.data?.profile || "",
    });
  }, [userData]);

  // Initialize form data with user data
 
  const togglePassword = () => {
  setShowPassword(!showPassword);
};

  
  const validateForm = () => {
    let formErrors = {};
    // const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const phoneRegex = /^[0-9]{6,12}$/;

    if (!state.name.trim()) {
      formErrors.name = "Name is required";
    }

    // if (!state.email) {
    //   formErrors.email = "Email is required";
    // } else if (!emailRegex.test(state.email)) {
    //   formErrors.email = "Invalid email format";
    // }

    if (!state.phone.toString().trim()) {
      formErrors.phone = "Mobile number is required";
    } else if (!phoneRegex.test(state.phone)) {
      formErrors.phone = "Invalid mobile number format";
    }
    if (!state.address.trim()) {
      formErrors.address = "Address is required";
    }
    // if (!state.wallet_address) {
    //   formErrors.wallet_address = "Wallet Address is required";
    // }
    if (!state.city.trim()) {
      formErrors.city = "City is required";
    }
    if (!state.country.trim()) {
      formErrors.country = "Country is required";
    }
    if (!state.state.trim()) {
      formErrors.state = "State is required";
    }

    // setErrors(formErrors);
    // return Object.keys(formErrors).length === 0;
    return formErrors;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file

    // Check if file exists (user might cancel file selection)
    if (!file) return;
    setLoading(true)
    const acceptedFormats = ["image/png", "image/jpeg", "image/jpg"];
    const invalidFile = !acceptedFormats.includes(file.type);
    if (invalidFile) {

      toast.warning("Only JPG / PNG files are allowed", {
        position: "top-center",
      });
      profileRef.current.value = "";
      setLoading(false);
    } else {
      const imageUrl = URL.createObjectURL(file);
      setState((prevState) => ({
        ...prevState,
        profile: file,
      }));
      setProfileImage(imageUrl); // Set the blob URL for display
      setLoading(false);
    }
  };
  


  const triggerFileInput = () => {
    if (profileRef.current) {
      profileRef.current.click();
    }
  };

  const currentImage = () => {
    if (profileImage) {
      return profileImage;
    } else if (state.profile) {
      return state.profile;
    } else {
      return "/images/user_logo.png";
    }
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Check if data has actually changed
      const hasChanged =
        state.name !== userData?.data?.name ||
        state.address !== userData?.data?.address ||
        state.city !== userData?.data?.city ||
        state.state !== userData?.data?.state ||
        state.country !== userData?.data?.country ||
        state.profile instanceof File;

      // If nothing changed, show info toast and exit
      if (!hasChanged) {
        toast.info("No changes detected to update", {
          position: "top-center",
        });
        return;
      }
      setLoading(true)
      try {
        const formData = new FormData();

        formData.append("name", state.name);
        formData.append("_id", state._id);
        // formData.append("email", state.email);
        // formData.append("phone", state.phone);
        // formData.append("wallet_address", state.wallet_address);
        formData.append("address", state.address);
        formData.append("city", state.city);
        formData.append("country", state.country);
        formData.append("state", state.state);

        // Append profile picture only if it exists
        if (state.profile instanceof File) {
          formData.append("profile", state.profile);
        }

        // Send FormData using the update function
        const res = await update(formData);

        if (res?.data?.status_code == 200) {
          setIsToastShown(true);

          if (!isToastShown) {

            toast.success(res?.data?.message, {
              position: "top-center",
            });

          } else {
            toast.dismiss();
            toast.success(res?.data?.message, {
              position: "top-center",
            });
          }
        }
      } catch (error) {
        setIsToastShown(true);
        if (!isToastShown) {
          toast.error(error?.message, {
            position: "top-center",
          });
        } else {
          toast.dismiss();
          toast.error(error?.message, {
            position: "top-center",
          });
        }
      }
      finally {
        setLoading(false)
      }
    }
  };
  // const togglePassword = () => {
  //   if (type === "password") {
  //     setIcon(show);
  //     setType("text");
  //   } else {
  //     setIcon(hide);
  //     setType("password");
  //   }
  // };

  // const togglePassword2 = () => {
  //   if (type2 === "password") {
  //     setIcon2(show);
  //     setType2("text");
  //   } else {
  //     setIcon2(hide);
  //     setType2("password");
  //   }
  // };

  // const togglePassword3 = () => {
  //   if (type3 === "password") {
  //     setIcon3(show);
  //     setType3("text");
  //   } else {
  //     setIcon3(hide);
  //     setType3("password");
  //   }
  // };

  // console.log({ state });
  // Timer for resend OTP
  useEffect(() => {
    let countdown;
    if (otpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendOtp(true);
    }
    return () => clearInterval(countdown);
  }, [otpSent, timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateOldPassword = () => {
    let formErrors = {};

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const validateNewPassword = () => {
    let formErrors = {};

    if (!formData.newPassword) {
      formErrors.newPassword = "New Password is required";
    } else if (formData.newPassword.length < 6) {
      formErrors.newPassword = "Password must be at least 6 characters";
    }

    if (formData.newPassword !== formData.confirmPwd) {
      formErrors.confirmPwd = "Passwords do not match";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const validateOtp = () => {
    let formErrors = {};
    const numberRegex = /^[0-9]+$/;
    if (!formData.otp) {
      formErrors.otp = "OTP is required";
    } else if (!numberRegex.test(formData.otp)) {
      formErrors.otp = "OTP must be a number";
    } else if (formData.otp.length < 4) {
      formErrors.otp = "OTP must be 4 Numbers";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleVerify = async () => {
    if (validateOldPassword()) {
      try {
        const payload = {
          password: formData.password,
        };
        await changePwdReq(payload).unwrap();
        setIsToastShown(true);
        if (!isToastShown) {
          toast.success(`OTP sent to your email`, {
            position: "top-center",
          });
        } else {
          toast.dismiss();
          toast.success(`OTP sent to your email`, {
            position: "top-center",
          });
        }

        setOtpSent(true);
        if (resendOtp) {
          setResendOtp(false);
          setTimer(120);
        }
      } catch (error) {
        setIsToastShown(true);
        if (!isToastShown) {
          toast.error(`${error?.data?.message}`, {
            position: "top-center",
          });
        } else {
          toast.dismiss();
          toast.error(`${error?.data?.message}`, {
            position: "top-center",
          });
        }
      }
    }
  };

  const verifyOtpAndShowNewPasswordFields = async () => {
    if (validateOtp()) {
      try {
        const payload = {
          email: userData?.data?.email,
          otp: Number(formData.otp),
          otpType: "ChangePassword",
        };
        await verify(payload).unwrap();

        setIsToastShown(true);
        if (!isToastShown) {
          toast.success(`OTP verified successfully`, {
            position: "top-center",
          });
        } else {
          toast.dismiss();
          toast.success(`OTP verified successfully`, {
            position: "top-center",
          });
        }
        setOtpVerified(true);
        setResendOtp(true);
      } catch (error) {
        setIsToastShown(true);
        if (!isToastShown) {
          toast.error(`${error?.data?.message}`, {
            position: "top-center",
          });
        } else {
          toast.dismiss();
          toast.error(`${error?.data?.message}`, {
            position: "top-center",
          });
        }
      }
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    if (validateNewPassword()) {
      try {
        const payload = {
          newPassword: formData.newPassword,
          email: userData?.data?.email,
        };
        const res = await changePwd(payload).unwrap();
        toast.success(`${res?.message}`, {
          position: "top-center",
        });
        setFormData({
          password: "",
          newPassword: "",
          confirmPwd: "",
          otp: "",
        });
        setOtpSent(false);
        setOtpVerified(false);
      } catch (error) {
        setIsToastShown(true);
        if (!isToastShown) {
          toast.error(`${error?.data?.message}`, {
            position: "top-center",
          });
        } else {
          toast.dismiss();
          toast.error(`${error?.data?.message}`, {
            position: "top-center",
          });
        }
      }
    }
  };

  if (userData?.data?.profile) {
    localStorage.setItem("profile", userData?.data?.profile);
  } else {
    localStorage.removeItem("profile");
  }


  return (
<div className="min-h-screen bg-[#1d8e85] text-white p-4 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

        {/* Profile Details Form */}
        <form onSubmit={handleUpdate} className="md:w-2/3 w-full">
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
                    ref={profileRef}
                    accept=".png,.jpg,.jpeg"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label htmlFor="profilePicture" className="flex flex-col items-center justify-center text-white/60 cursor-pointer select-none">
                    {formData.profilePicture || userData?.data?.profile ? (
                      <img
                        src={currentImage()}
                        alt="Profile"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    ) : (
                      <>
                        <span className="text-5xl mb-1">👤</span>
                        <span className="text-xs">Upload</span>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div className="hidden sm:block text-center sm:text-left p-6 mt-4 border-l-4 border-[#4ecdc4] bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
                <p className="text-sm text-white/70">Please provide accurate and up-to-date profile information.</p>
                <p className="text-sm text-white/70 mt-1">This helps us communicate with you effectively and ensures smooth access to our services.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 capitalize">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={state.name}
                  onChange={handleChange}
                  aria-label="Username"
                            aria-describedby="basic-addon1"
                  placeholder="Enter your name"
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                    ${errors.name ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 capitalize">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={state.email}
                  placeholder="Enter your email"
                  disabled={userData?.data && Object.keys(userData.data).length > 0}
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 border-white/20 ring-[#4ecdc4] ${userData?.data && Object.keys(userData.data).length > 0 ? 'opacity-60 cursor-not-allowed' : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-1 capitalize">Mobile Number *</label>
                <input
                  id="mobile"
                  name="phone"
                  type="text"
                  value={state.phone}
                    aria-label="Username"
                            aria-describedby="basic-addon1"
                  placeholder="Enter your mobile number"
                  disabled={userData?.data && Object.keys(userData.data).length > 0}
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 border-white/20 ring-[#4ecdc4] ${userData?.data && Object.keys(userData.data).length > 0 ? 'opacity-60 cursor-not-allowed' : ''}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1 capitalize">Address *</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={state.address}
                  onChange={handleChange}
                   aria-label="Username"
                            aria-describedby="basic-addon1"
                  placeholder="Enter your address"
                  autoComplete="off"
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                    ${errors.address ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                />
                {errors.address && (
                  <p className="mt-1 text-xs text-red-400">{errors.address}</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1 capitalize">City *</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={state.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                    aria-label="Username"
                            aria-describedby="basic-addon1"
                  autoComplete="off"
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                    ${errors.city ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-red-400">{errors.city}</p>
                )}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-1 capitalize">State *</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={state.state}
                  onChange={handleChange}
                  placeholder="Enter your state"
                  aria-label="Username"
                            aria-describedby="basic-addon1"
                  autoComplete="off"
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                    ${errors.state ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                />
                {errors.state && (
                  <p className="mt-1 text-xs text-red-400">{errors.state}</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1 capitalize">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={state.country}
                  onChange={handleChange}
                  disabled={userData?.data && Object.keys(userData.data).length > 0}
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 border-white/20 ring-[#4ecdc4] ${userData?.data && Object.keys(userData.data).length > 0 ? 'opacity-60 cursor-not-allowed' : ''}`}
                >
                  {countryCodes.map(({ country_name }) => (
                    <option key={country_name} value={country_name}>
                      {country_name}
                    </option>
                  ))}
                </select>
                {errors.country_name && (
                  <p className="mt-1 text-xs text-red-400">{errors.country_name}</p>
                )}
              </div>

              <div>
                <input
                  type="submit"
                  value={loading || updateLoader ? 
                    (userData?.data && Object.keys(userData.data).length > 0 ? "Updating..." : "Creating...") : 
                    (userData?.data && Object.keys(userData.data).length > 0 ? "Update Profile" : "Create Profile")
                  }
                  disabled={loading || updateLoader}
                  className="mt-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] flex justify-center text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition w-full max-w-xs mx-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter current password"
                  readOnly={otpVerified}
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 pr-10 focus:outline-none focus:ring-2
                    ${errors.password ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}
                    ${otpVerified ? 'opacity-60' : ''}`}
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  disabled={otpVerified}
                  className="absolute right-3 top-2.5 text-white/60 hover:text-[#4ecdc4] disabled:opacity-50"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-400">{errors.password}</p>
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
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  placeholder="Enter OTP"
                  readOnly={otpVerified}
                  className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                    ${errors.OTP ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}
                    ${otpVerified ? 'opacity-60' : ''}`}
                />
                {errors.OTP && (
                  <p className="mt-1 text-xs text-red-400">{errors.OTP}</p>
                )}
              </div>
              {!otpVerified && (
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={otpSent && !resendOtp}
                  className="h-10 mt-5 px-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white rounded-full font-semibold hover:from-[#0a5c64] hover:to-[#5dd5cd] transition whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isOtpSending
                    ? "Sending..."
                    : otpSent && !resendOtp
                    ? `Resend in ${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`
                    : otpSent && resendOtp
                    ? "Resend OTP"
                    : "Get OTP"}
                </button>
              )}
            </div>

            {!otpVerified && (
              <button
                type="button"
                onClick={verifyOtpAndShowNewPasswordFields}
                disabled={isVerifying}
                className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVerifying ? "Verifying..." : "Verify OTP"}
              </button>
            )}

            {otpVerified && (
              <>
                <div className="flex-grow">
                  <label htmlFor="newPassword" className="block text-sm font-medium mb-1">New Password *</label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                    placeholder="Enter new password"
                    className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                      ${errors.newPassword ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                  />
                  {errors.newPassword && (
                    <p className="mt-1 text-xs text-red-400">{errors.newPassword}</p>
                  )}
                </div>

                <div className="flex-grow">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password *</label>
                  <input
                    id="confirmPassword"
                    name="confirmPwd"
                    type="password"
                    value={formData.confirmPwd}
                    onChange={(e) => setFormData({ ...formData, confirmPwd: e.target.value })}
                    placeholder="Confirm new password"
                    className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
                      ${errors.confirmPwd ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
                  />
                  {errors.confirmPwd && (
                    <p className="mt-1 text-xs text-red-400">{errors.confirmPwd}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={changePassword}
                  disabled={isLoading}
                  className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Changing..." : "Change Password"}
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



// <div className="min-h-screen bg-[#1d8e85] text-white p-4 flex flex-col items-center">
//       <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">

       
//         <form onSubmit={handleUpdate} className="md:w-2/3 w-full">
//           <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
//             <legend className="text-2xl font-semibold px-2">Profile Details</legend>

//             <div className="flex justify-center items-center gap-12">
//               <div className="w-32">
//                 <label htmlFor="profilePicture" className="block text-sm font-medium mb-2 text-center">Profile Picture *</label>
//                 <div className="border border-white/20 rounded-full bg-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#4ecdc4] transition w-32 h-32 mx-auto">
//                   <input
//                     id="profilePicture"
//                     type="file"
//                     name="profilePicture"
//                     ref={profileRef}
//                     accept=".png,.jpg,.jpeg"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                   <label htmlFor="profilePicture" className="flex flex-col items-center justify-center text-white/60 cursor-pointer select-none">
//                     {formData.profilePicture || userData?.data?.profile ? (
//                       <img
//                         src={currentImage()}
//                         alt="Profile"
//                         className="w-28 h-28 rounded-full object-cover"
//                       />
//                     ) : (
//                       <>
//                         <span className="text-5xl mb-1">👤</span>
//                         <span className="text-xs">Upload</span>
//                       </>
//                     )}
//                   </label>
//                 </div>
//               </div>

//               <div className="hidden sm:block text-center sm:text-left p-6 mt-4 border-l-4 border-[#4ecdc4] bg-white/10 rounded-lg shadow-md backdrop-blur-sm">
//                 <p className="text-sm text-white/70">Please provide accurate and up-to-date profile information.</p>
//                 <p className="text-sm text-white/70 mt-1">This helps us communicate with you effectively and ensures smooth access to our services.</p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-1 capitalize">Name *</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={state.name}
//                   onChange={handleChange}
//                   aria-label="Username"
//                             aria-describedby="basic-addon1"
//                   placeholder="Enter your name"
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                     ${errors.name ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-xs text-red-400">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-1 capitalize">Email *</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={state.email}
                
//                   placeholder="Enter your email"
//                   disabled
//                   className="w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 border-white/20 ring-[#4ecdc4] opacity-60 cursor-not-allowed"
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-xs text-red-400">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="mobile" className="block text-sm font-medium mb-1 capitalize">Mobile Number *</label>
//                 <input
//                   id="mobile"
//                   name="phone"
//                   type="text"
//                   value={state.phone}
//                     aria-label="Username"
//                             aria-describedby="basic-addon1"
//                   placeholder="Enter your mobile number"
//                   disabled
//                   className="w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 border-white/20 ring-[#4ecdc4] opacity-60 cursor-not-allowed"
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="address" className="block text-sm font-medium mb-1 capitalize">Address *</label>
//                 <input
//                   id="address"
//                   name="address"
//                   type="text"
//                   value={state.address}
//                   onChange={handleChange}
//                    aria-label="Username"
//                             aria-describedby="basic-addon1"
//                   placeholder="Enter your address"
//                   autoComplete="off"
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                     ${errors.address ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                 />
//                 {errors.address && (
//                   <p className="mt-1 text-xs text-red-400">{errors.address}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="city" className="block text-sm font-medium mb-1 capitalize">City *</label>
//                 <input
//                   id="city"
//                   name="city"
//                   type="text"
//                   value={state.city}
//                   onChange={handleChange}
//                   placeholder="Enter your city"
//                     aria-label="Username"
//                             aria-describedby="basic-addon1"
//                   autoComplete="off"
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                     ${errors.city ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                 />
//                 {errors.city && (
//                   <p className="mt-1 text-xs text-red-400">{errors.city}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="state" className="block text-sm font-medium mb-1 capitalize">State *</label>
//                 <input
//                   id="state"
//                   name="state"
//                   type="text"
//                   value={state.state}
//                   onChange={handleChange}
//                   placeholder="Enter your state"
//                   aria-label="Username"
//                             aria-describedby="basic-addon1"
//                   autoComplete="off"
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                     ${errors.state ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                 />
//                 {errors.state && (
//                   <p className="mt-1 text-xs text-red-400">{errors.state}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="country" className="block text-sm font-medium mb-1 capitalize">Country *</label>
//                 <select
//                   id="country"
//                   name="country"
//                   value={state.country}
//                   onChange={handleChange}
//                   disabled
//                   className="w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 border-white/20 ring-[#4ecdc4] opacity-60 cursor-not-allowed"
//                 >
//                   {countryCodes.map(({ country_name }) => (
//                     <option key={country_name} value={country_name}>
//                       {country_name}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.country_name && (
//                   <p className="mt-1 text-xs text-red-400">{errors.country_name}</p>
//                 )}
//               </div>

//               <div>
//                 <input
//                   type="submit"
//                   value={loading || updateLoader ? "Updating..." : "Update Profile"}
//                   disabled={loading || updateLoader}
//                   className="mt-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] flex justify-center text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition w-full max-w-xs mx-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
//                 />
//               </div>
//             </div>
//           </fieldset>
//         </form>

 
//         <form className="md:w-1/3 w-full">
//           <fieldset className="bg-white/10 rounded-lg p-6 space-y-6 border border-white/20">
//             <legend className="text-2xl font-semibold px-2">Change Password</legend>
//             <p className="text-sm text-white/70 mb-4">Enter your current password and OTP to change your password securely.</p>

//             <div>
//               <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password *</label>
//               <div className="relative">
//                 <input
//                   id="currentPassword"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                   placeholder="Enter current password"
//                   readOnly={otpVerified}
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 pr-10 focus:outline-none focus:ring-2
//                     ${errors.password ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}
//                     ${otpVerified ? 'opacity-60' : ''}`}
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePassword}
//                   disabled={otpVerified}
//                   className="absolute right-3 top-2.5 text-white/60 hover:text-[#4ecdc4] disabled:opacity-50"
//                   aria-label={showPassword ? 'Hide password' : 'Show password'}
//                 >
//                   {showPassword ? '🙈' : '👁️'}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="mt-1 text-xs text-red-400">{errors.password}</p>
//               )}
//             </div>

//             <div className="flex gap-3 items-center">
//               <div className="flex-grow">
//                 <label htmlFor="otp" className="block text-sm font-medium mb-1">OTP *</label>
//                 <input
//                   id="otp"
//                   name="otp"
//                   type="text"
//                   value={formData.otp}
//                   onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
//                   placeholder="Enter OTP"
//                   readOnly={otpVerified}
//                   className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                     ${errors.OTP ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}
//                     ${otpVerified ? 'opacity-60' : ''}`}
//                 />
//                 {errors.OTP && (
//                   <p className="mt-1 text-xs text-red-400">{errors.OTP}</p>
//                 )}
//               </div>
//               {!otpVerified && (
//                 <button
//                   type="button"
//                   onClick={handleVerify}
//                   disabled={otpSent && !resendOtp}
//                   className="h-10 mt-5 px-5 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white rounded-full font-semibold hover:from-[#0a5c64] hover:to-[#5dd5cd] transition whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isOtpSending
//                     ? "Sending..."
//                     : otpSent && !resendOtp
//                     ? `Resend in ${Math.floor(timer / 60)}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`
//                     : otpSent && resendOtp
//                     ? "Resend OTP"
//                     : "Get OTP"}
//                 </button>
//               )}
//             </div>

//             {!otpVerified && (
//               <button
//                 type="button"
//                 onClick={verifyOtpAndShowNewPasswordFields}
//                 disabled={isVerifying}
//                 className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isVerifying ? "Verifying..." : "Verify OTP"}
//               </button>
//             )}

//             {otpVerified && (
//               <>
//                 <div className="flex-grow">
//                   <label htmlFor="newPassword" className="block text-sm font-medium mb-1">New Password *</label>
//                   <input
//                     id="newPassword"
//                     name="newPassword"
//                     type="password"
//                     value={formData.newPassword}
//                     onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
//                     placeholder="Enter new password"
//                     className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                       ${errors.newPassword ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                   />
//                   {errors.newPassword && (
//                     <p className="mt-1 text-xs text-red-400">{errors.newPassword}</p>
//                   )}
//                 </div>

//                 <div className="flex-grow">
//                   <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password *</label>
//                   <input
//                     id="confirmPassword"
//                     name="confirmPwd"
//                     type="password"
//                     value={formData.confirmPwd}
//                     onChange={(e) => setFormData({ ...formData, confirmPwd: e.target.value })}
//                     placeholder="Confirm new password"
//                     className={`w-full px-3 py-2 rounded border bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2
//                       ${errors.confirmPwd ? 'border-red-500 ring-red-500' : 'border-white/20 ring-[#4ecdc4]'}`}
//                   />
//                   {errors.confirmPwd && (
//                     <p className="mt-1 text-xs text-red-400">{errors.confirmPwd}</p>
//                   )}
//                 </div>

//                 <button
//                   type="button"
//                   onClick={changePassword}
//                   disabled={isLoading}
//                   className="w-full mt-4 bg-gradient-to-r from-[#094e54] to-[#4ecdc4] text-white font-semibold px-6 py-3 rounded-full hover:from-[#0a5c64] hover:to-[#5dd5cd] transition disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isLoading ? "Changing..." : "Change Password"}
//                 </button>
//               </>
//             )}
//           </fieldset>
//         </form>
//       </div>
//     </div>