// import React from "react";

// const Security = () => {
//   return (
//     <div className="w-full bg-[#1d8e85] min-h-screen px-4 sm:px-6 lg:px-8 py-10 text-[#eafaf9] text-justify relative overflow-hidden">

//       {/* Glow Orbs (optional for soft animated background) */}
//       <div className="absolute top-[-30px] left-[-30px] w-40 h-40 bg-[#5fffe2]/10 blur-2xl rounded-full animate-pulse pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#84fff4]/10 blur-3xl rounded-full animate-ping pointer-events-none" />

//       <div className="relative z-10 space-y-12">

//         {/* Page Title */}
//         <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-[#a6fff4] to-[#26a69a] bg-clip-text animate-fadeIn">
//           Legal Details
//         </h1>

//         {/* Terms Section */}
//         <section className="space-y-8 animate-fadeIn delay-200">
//           <h2 className="text-2xl font-semibold text-[#b2fef7] border-b border-[#ffffff22] pb-2">Terms and Conditions</h2>
//           <p className="text-white/90 leading-relaxed">
//             Welcome to JAIMAX. Please read these Terms and Conditions ("Terms") carefully before using our services...
//           </p>

//           <ol className="list-decimal pl-6 space-y-6 marker:text-teal-300 marker:font-bold">
//             {[
//               {
//                 title: "Account Security",
//                 desc: "You are responsible for maintaining the security of your account credentials. JAIMAX shall not be liable for any unauthorized access."
//               },
//               {
//                 title: "Suspicious Activity",
//                 desc: "JAIMAX reserves the right to suspend or restrict your account in the event of suspicious activity."
//               },
//               {
//                 title: "Compliance and Conduct",
//                 desc: "You agree not to tamper with services or impersonate others."
//               },
//               {
//                 title: "Financial Obligations",
//                 desc: "Any excess deposits or profits from bugs must be returned to JAIMAX."
//               },
//               {
//                 title: "Fraud and Security",
//                 desc: "Accounts involved in fraud will be suspended pending investigation."
//               },
//               {
//                 title: "Prohibited Uses",
//                 desc: "Misuse or unauthorized interference may result in account termination."
//               },
//               {
//                 title: "Limitation of Liability",
//                 desc: "JAIMAX is not liable for indirect or incidental damages."
//               },
//               {
//                 title: "Disclaimer",
//                 desc: "You use our platform at your own risk."
//               },
//               {
//                 title: "Governing Law",
//                 desc: "Terms are governed by the laws of your jurisdiction."
//               },
//               {
//                 title: "Changes to Terms",
//                 desc: "JAIMAX may update terms at any time."
//               },
//               {
//                 title: "Contact Us",
//                 desc: "For help, contact support@jaimax.com"
//               }
//             ].map((item, index) => (
//               <li key={index}>
//                 <strong className="text-[#5fffe2]">{item.title}:</strong>
//                 <p className="mt-1 text-white/90">{item.desc}</p>
//               </li>
//             ))}
//           </ol>
//         </section>

//         {/* Privacy Policy Section */}
//         <section className="space-y-8 animate-fadeIn delay-300">
//           <h2 className="text-2xl font-semibold text-[#84fff4] border-b border-[#ffffff22] pb-2">Privacy Policy</h2>

//           <ol className="list-decimal pl-6 space-y-6 marker:text-teal-300 marker:font-bold">
//             <li>
//               <strong className="text-[#5fffe2]">Introduction:</strong>
//               <p className="mt-1">JAIMAX respects your privacy and complies with this policy.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Personal Data We Collect:</strong>
//               <p className="mt-1">We collect only necessary data:</p>
//               <ul className="list-disc pl-6 mt-2 text-white/80 space-y-1">
//                 <li>Account Info (name, ID)</li>
//                 <li>Payment Details</li>
//                 <li>Device & Usage Data</li>
//                 <li>Third-party verification data</li>
//               </ul>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Retention and Deletion:</strong>
//               <p className="mt-1">Data is retained only as long as required.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">International Transfers:</strong>
//               <p className="mt-1">Your data may be stored securely outside your region.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Third-Party Sharing:</strong>
//               <p className="mt-1">Only shared for necessary operations with safeguards.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Data Security:</strong>
//               <p className="mt-1">Encrypted, secured on AWS, and access-controlled.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Managing Preferences:</strong>
//               <p className="mt-1">You can opt-out or adjust preferences anytime.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Automated Decision-Making:</strong>
//               <p className="mt-1">You have the right to opt out of profiling systems.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Policy Review:</strong>
//               <p className="mt-1">Reviewed annually and updated as needed.</p>
//             </li>
//             <li>
//               <strong className="text-[#5fffe2]">Contact:</strong>
//               <p className="mt-1">
//                 Reach us at{" "}
//                 <a
//                   className="text-blue-300 underline hover:text-white transition"
//                   href="https://jaimax.com/support-page"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   jaimax.com/support-page
//                 </a>
//               </p>
//             </li>
//           </ol>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Security;



import React from "react";

const Security = () => {
  return (
    <div className="w-full bg-[#1d8e85] min-h-screen px-4 sm:px-6 lg:px-8 py-10 text-[#eafaf9] text-justify relative overflow-hidden">

      {/* Glow Orbs (optional for soft animated background) */}
      <div className="absolute top-[-30px] left-[-30px] w-40 h-40 bg-[#5fffe2]/10 blur-2xl rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#84fff4]/10 blur-3xl rounded-full animate-ping pointer-events-none" />

      <div className="relative z-10 space-y-12">

        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-[#a6fff4] to-[#26a69a] bg-clip-text animate-fadeIn">
          Legal Details
        </h1>

        {/* Terms Section */}
        <section className="space-y-8 animate-fadeIn delay-200">
          <h2 className="text-2xl font-semibold text-[#b2fef7] border-b border-[#ffffff22] pb-2">Terms and Conditions</h2>
          <p className="text-white/90 leading-relaxed">
            Welcome to JAIMAX. Please read these Terms and Conditions ("Terms") carefully before using our services. By accessing or using our services, you agree to comply with these Terms. If you do not agree with any part of these Terms, you may not use our services.
          </p>

          <div className="space-y-6">
            
            {/* Account Security */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Account Security</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>You are responsible for maintaining the security of your account credentials. While we provide tools such as two-factor authentication to enhance security, you are ultimately responsible for safeguarding your account.</li>
                <li>You are liable for all activities conducted under your account, including but not limited to deposits, withdrawals, and trading activities.</li>
                <li>JAIMAX shall not be liable for any loss or damage arising from your failure to maintain the security of your account or password.</li>
                <li>Promptly notify JAIMAX of any unauthorized access or use of your account.</li>
              </ul>
            </div>

            {/* Suspicious Activity */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Suspicious Activity</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>JAIMAX reserves the right to suspend or restrict your account in the event of suspicious activity.</li>
              </ul>
            </div>

            {/* Compliance and Conduct */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Compliance and Conduct</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>You agree not to disrupt or attempt to tamper with JAIMAX's services or servers in any manner that could harm our platform.</li>
                <li>Respect the privacy of others and refrain from disclosing personal information without consent.</li>
                <li>Do not impersonate JAIMAX employees or any other individuals.</li>
              </ul>
            </div>

            {/* Financial Obligations */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Financial Obligations</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Any excess deposits or withdrawals mistakenly made to your account must be promptly returned. Failure to do so may result in legal action.</li>
                <li>Profits gained from exploiting platform inconsistencies must be returned to JAIMAX.</li>
              </ul>
            </div>

            {/* Fraud and Security */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Fraud and Security</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Accounts involved in fraudulent or suspicious activities will be temporarily suspended pending investigation by JAIMAX.</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Prohibited Uses</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Misuse of our services, including unauthorized access or interference, may result in the suspension or termination of your account.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Limitation of Liability</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>JAIMAX and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Disclaimer</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>Use of our services is at your own risk. JAIMAX provides the service on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Governing Law</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>These Terms are governed by the laws of Your Jurisdiction, without regard to its conflict of law provisions.</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Changes to Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-white/90">
                <li>JAIMAX reserves the right to modify these Terms at any time. Revised Terms will be effective upon posting on our website.</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">Contact Us</h3>
              <p className="text-white/90">
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at{" "}
                <a 
                  href="mailto:support@jaimax.com"
                  className="text-blue-300 underline hover:text-white transition"
                >
                  support@jaimax.com
                </a>.
              </p>
            </div>

          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="space-y-8 animate-fadeIn delay-300">
          <h2 className="text-2xl font-semibold text-[#84fff4] border-b border-[#ffffff22] pb-2">Privacy Policy</h2>

          <div className="space-y-6">
            
            {/* Introduction */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">1. Introduction</h3>
              <div className="space-y-3 text-white/90">
                <p>
                  In this policy, we, us, our, and JAIMAX refer to JAIMAX. For more information about us and how to contact us, see Section 10. We respect your privacy and are committed to protecting it through our compliance with this Policy.
                </p>
                <p>
                  This privacy policy (Policy) applies when we are acting as a data controller with respect to the personal data of our users. This Policy describes how we collect, use, and share personal data of consumer users across our websites, including www.Jaimax.com (the Website), JAIMAX's mobile and desktop application (the App), and services offered to users (collectively with the Website and the App, the Services), and from our partners and other third parties. When using any of our Services, you consent to the collection, transfer, storage, disclosure, and use of your personal data as described in this Policy. This Policy does not apply to anonymized data, as it cannot be used to identify you.
                </p>
                <p>
                  Please read this Policy carefully to understand our policies and practices regarding your personal data and how we will treat it. By accessing or using the Services, you agree to this Policy. Our Services also incorporate privacy controls which affect how we will process your personal data. Please refer to Section 5 for a list of rights with regard to your personal data and how to exercise them.
                </p>
                <p>
                  This Policy may change from time to time. Your continued use of the Services after we make changes is deemed to be acceptance of those changes, so please check the Policy periodically for updates.
                </p>
                <p>
                  To improve accessibility for all users, a summary and/or FAQ section is included at the beginning of this policy, written in plain language.
                </p>
              </div>
            </div>

            {/* Personal Data We Collect */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">2. Personal Data We Collect About You and How We Collect It</h3>
              <div className="space-y-3 text-white/90">
                <p>
                  We collect only the data necessary for each specific purpose, ensuring we adhere to the principles of data minimization and purpose limitation. We do not process data for unrelated purposes without further consent.
                </p>
                <p>There are three general categories of personal data we collect:</p>
                
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="font-semibold text-[#5fffe2]">2.1 Information You Give to Us</p>
                    <div className="ml-4 space-y-2">
                      <p>(a) <strong>Account Data:</strong> We collect personal identification information such as your name, date of birth, age, nationality, gender, signature, utility bills, photographs, phone number, home address, email address, and formal identification information. This information is necessary for adequate performance of our contract with you and to comply with legal obligations.</p>
                      <p>(b) <strong>Payment Information:</strong> We process financial information such as bank account, credit card, or PayPal information to facilitate the processing of payments. This is collected only as needed for the contractual relationship or legitimate business interests in service delivery.</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-[#5fffe2]">2.2 Information We Automatically Collect</p>
                    <p className="ml-4">When you use the Services, we may automatically process information about your device, usage patterns, and transactional data to improve the user experience and functionality of our Services.</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-[#5fffe2]">2.3 Information We Collect from Third Parties</p>
                    <p className="ml-4">We may obtain information from public databases, credit bureaus, ID verification partners, joint marketing partners, and social media platforms for identity verification, as required for compliance with our legal obligations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Retention and Deletion */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">3. Retention and Deletion of Personal Data</h3>
              <div className="space-y-3 text-white/90">
                <p>
                  We retain personal data only for as long as necessary to fulfill contractual obligations or comply with legal obligations. For example, financial data may be retained for up to 7 years after a transaction to meet auditing requirements.
                </p>
                <p>
                  Users may request the deletion of their data if it is no longer needed for the purposes it was collected.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">4. International Transfers of Your Personal Data</h3>
              <div className="space-y-3 text-white/90">
                <p>
                  We may transfer, store, and process your data outside the EEA, including countries where our affiliates and third-party service providers are located.
                </p>
                <p>
                  Appropriate safeguards, such as Standard Contractual Clauses (SCCs) or adequacy decisions, are in place to ensure an adequate level of data protection for international transfers. You have the right to request more details regarding these safeguards.
                </p>
              </div>
            </div>

            {/* Third-Party Data Sharing */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">5. Third-Party Data Sharing</h3>
              <p className="text-white/90">
                We may share data with specific third parties, such as payment processors, ID verification services, and analytics providers. Data sharing with each third party is limited to the purpose required, such as processing payments or verifying identity.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">6. Data Security</h3>
              <p className="text-white/90">
                We employ a combination of technical and organizational measures to secure your data, including encryption standards, multi-factor authentication, and monitoring practices. Only authorized personnel can access your information, and all data is securely stored on Amazon AWS servers. Despite our security measures, internet transmission of data carries some risks, so transmission is at the user's discretion.
              </p>
            </div>

            {/* Managing Data Collection */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">7. Managing Data Collection and Marketing Preferences</h3>
              <p className="text-white/90">
                Users have the option to manage their data preferences through a privacy preferences center, where they can opt-out of certain types of data processing or third-party sharing. Users may contact support for assistance or use the provided link for immediate preference management.
              </p>
            </div>

            {/* Automated Decision-Making */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">8. Automated Decision-Making and Profiling</h3>
              <p className="text-white/90">
                Where automated systems are used for profiling (e.g., fraud detection or targeted marketing), we provide transparency regarding the impact on the user and ensure rights related to automated decision-making. Users can request more information or opt out of profiling if desired.
              </p>
            </div>

            {/* Policy Review */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">9. Policy Review and Update Schedule</h3>
              <p className="text-white/90">
                This policy is reviewed annually to remain compliant with evolving legal requirements and industry standards. Significant changes to the policy will be communicated to users via email or an in-app notification.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-[#5fffe2] mb-3">10. Contact Information</h3>
              <p className="text-white/90">
                If you have questions, concerns, or requests regarding this policy, please contact us via our support page at{" "}
                <a 
                  href="https://jaimax.com/support-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline hover:text-white transition"
                >
                  https://jaimax.com/support-page
                </a>
              </p>
            </div>

          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Security;