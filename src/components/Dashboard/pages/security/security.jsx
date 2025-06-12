import React from 'react';

const Security = () => {
  return (
   <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 text-[#000] leading-relaxed break-words transition-all duration-300 text-justify">
      <h1 className="w-full text-3xl font-bold mb-8 text-center text-[#084e54]">Legal Details</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#26a69a]">Terms and Conditions</h2>
        <p className="mb-4">
          Welcome to JAIMAX. Please read these Terms and Conditions ("Terms") carefully before using our services. By accessing or using our services, you agree to comply with these Terms. If you do not agree with any part of these Terms, you may not use our services.
        </p>

        <ol className="list-decimal pl-6 space-y-4 marker:text-[#26a69a] marker:font-semibold mb-1">
          <li>
            <strong className="text-[#26a69a] ">Account Security:</strong> 
            <p>You are responsible for maintaining the security of your account credentials. While we provide tools such as two-factor authentication to enhance security, you are ultimately responsible for safeguarding your account. You are liable for all activities conducted under your account, including but not limited to deposits, withdrawals, and trading activities. JAIMAX shall not be liable for any loss or damage arising from your failure to maintain the security of your account or password. Promptly notify JAIMAX of any unauthorized access or use of your account.
          </p>
          </li>
          <li>
            <strong className='text-[#26a69a]'>Suspicious Activity:</strong>
            <p> JAIMAX reserves the right to suspend or restrict your account in the event of suspicious activity.
         </p> </li>
          <li>
            <strong className='text-[#26a69a]'>Compliance and Conduct:</strong>
            <p> You agree not to disrupt or attempt to tamper with JAIMAX's services or servers in any manner that could harm our platform. Respect the privacy of others and refrain from disclosing personal information without consent. Do not impersonate JAIMAX employees or any other individuals.
         </p> </li>
          <li>
            <strong className='text-[#26a69a]'>Financial Obligations:</strong>
            <p> Any excess deposits or withdrawals mistakenly made to your account must be promptly returned. Failure to do so may result in legal action. Profits gained from exploiting platform inconsistencies must be returned to JAIMAX.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Fraud and Security:</strong>
            <p> Accounts involved in fraudulent or suspicious activities will be temporarily suspended pending investigation by JAIMAX.
         </p> </li>
          <li>
            <strong className='text-[#26a69a]'>Prohibited Uses:</strong>
            <p> Misuse of our services, including unauthorized access or interference, may result in the suspension or termination of your account.
         </p> </li>
          <li>
            <strong className='text-[#26a69a]'>Limitation of Liability:</strong>
            <p> JAIMAX and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Disclaimer:</strong>
            <p>Use of our services is at your own risk. JAIMAX provides the service on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
         </p>  </li>
          <li>
            <strong className='text-[#26a69a]'>Governing Law:</strong>
            <p> These Terms are governed by the laws of Your Jurisdiction, without regard to its conflict of law provisions.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Changes to Terms:</strong>
            <p> JAIMAX reserves the right to modify these Terms at any time. Revised Terms will be effective upon posting on our website.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Contact Us:</strong>
            <p> If you have any questions, contact us at support@jaimax.com.
          </p></li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-[#084e54]">Privacy Policy</h2>
        <ol className="list-decimal pl-6 space-y-4 marker:text-[#26a69a] marker:font-semibold mb-1">
          <li>
            <strong className='text-[#26a69a]'>Introduction:</strong>
            <p> JAIMAX respects your privacy and is committed to protecting it through compliance with this Policy. This Policy applies when we are acting as a data controller with respect to the personal data of our users.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Personal Data We Collect:</strong>
            <p> We collect only the data necessary. This includes:
            </p><ul className="list-disc pl-6 mt-2">
              <li>Account Data (e.g. name, address, ID)</li>
              <li>Payment Information (e.g. card, PayPal)</li>
              <li>Automatically collected device and usage info</li>
              <li>Third-party verification data</li>
            </ul>
          </li>
          <li>
            <strong className='text-[#26a69a]'>Retention and Deletion:</strong>
            <p> We keep personal data only as long as needed to fulfill obligations or legal requirements.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>International Transfers:</strong>
            <p> We may store your data outside the EEA with proper safeguards.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Third-Party Data Sharing:</strong>
            <p> Shared with processors only for operational needs.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Data Security:</strong>
            <p> Protected via encryption, access controls, and AWS infrastructure.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Managing Preferences:</strong>
            <p> You can adjust your preferences or opt-out anytime.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Automated Decision-Making:</strong>
            <p> We ensure transparency and allow opt-out of automated profiling.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Policy Review:</strong>
            <p> This policy is reviewed annually and updated when necessary.
          </p></li>
          <li>
            <strong className='text-[#26a69a]'>Contact:</strong>
            <p> Reach us at <a className="text-blue-400 underline" href="https://jaimax.com/support-page" target="_blank" rel="noopener noreferrer">jaimax.com/support-page</a>
         </p> </li>
        </ol>
      </section>
    </div>
  );
};

export default Security;
