
<<<<<<< HEAD
import { apiSlice } from "../ApiSliceComponent/jaiMaxApi";
=======
import { apiSlice } from "../ApiSliceComponent/jaiMaxApi"
>>>>>>> 58921db3f18a278a8ae50afcfb0883d75ca5f5e1

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register:builder.mutation({
            query:(credentials) => ({
                url:"/Auth/register",
                method:"POST",
                body: {...credentials}
            }),
        }),
        verify:builder.mutation({
            query:(data) => ({
                url:"/Auth/isVerify",
                method:"POST",
                body:{...data}
            })
        }),
        login:builder.mutation({
            query:(credentials) => ({
                url:"/Auth/login",
                method:"POST",
                body: credentials
            }),
            
          }),
          forgot:builder.mutation({
            query:(credentials) => ({
                url:"/Auth/forgotPassword",
                method:"POST",
                body: credentials
            })
          }),
          verifyOtp:builder.mutation({
            query:(credentials) => ({
                url:"/Auth/resetPassword",
                method:"POST",
                body: credentials
            })
          }),
          changePwd:builder.mutation({
            query:(credentials) => ({
                url:"/Auth/changePassword",
                method:"POST",
                body: credentials
            })
          }),
          changePwdReq:builder.mutation({
            query:(credentials) => ({
                url:"/Auth/changePasswordReq",
                method:"POST",
                body: credentials
            })
          }),
          verifyRecaptcha: builder.mutation({
            query:(token) => ({
                url: '/Auth/reCAPTCHAVerify',
                method: 'POST',
                body: token ,
            })
          }),
         OTPresent: builder.mutation({
            query:(data) => ({
                url: '/Auth/resendOtp ',
                method: 'POST',
                body: data ,
            })
          })
         
    }),
})

export const { useRegisterMutation, useVerifyMutation, useLoginMutation, useForgotMutation, useVerifyOtpMutation , useChangePwdMutation , useVerifyRecaptchaMutation , useChangePwdReqMutation, useOTPresentMutation } =  authApiSlice;
// changePassword