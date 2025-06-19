import React, { useEffect } from "react";
import { Shield, Lock, Eye, Users, Globe, FileText, Settings, HelpCircle, Mail, ChevronRight } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "In this policy, we, us, our, and Jaimax refer to Jaimax. For more information about us and how to contact us, see Section 10.",
        "We respect your privacy and are committed to protecting it through our compliance with this Policy.",
        "This privacy policy applies when we are acting as a data controller with respect to the personal data of our users. This Policy describes how we collect, use, and share personal data across our services.",
        "Please read this Policy carefully to understand our policies and practices regarding your personal data and how we will treat it.",
        "This Policy may change from time to time. Your continued use of the Services after we make changes is deemed to be acceptance of those changes."
      ]
    },
    {
      id: "data-collection",
      title: "Personal Data We Collect",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "We collect only the data necessary for each specific purpose, ensuring we adhere to the principles of data minimization and purpose limitation."
      ],
      subsections: [
        {
          title: "Information You Give to Us",
          items: [
            {
              label: "Account Data",
              description: "Personal identification information such as your name, date of birth, age, nationality, gender, phone number, home address, and email address."
            },
            {
              label: "Payment Information", 
              description: "Financial information such as bank account, credit card, or PayPal information to facilitate payment processing."
            }
          ]
        },
        {
          title: "Information We Automatically Collect",
          items: [
            {
              label: "Usage Data",
              description: "Information about your device, usage patterns, and transactional data to improve user experience and functionality."
            }
          ]
        },
        {
          title: "Information from Third Parties",
          items: [
            {
              label: "Verification Data",
              description: "Information from public databases, credit bureaus, ID verification partners, and social media platforms for identity verification."
            }
          ]
        }
      ]
    },
    {
      id: "retention",
      title: "Data Retention & Deletion",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "We retain personal data only for as long as necessary to fulfill contractual obligations or comply with legal obligations.",
        "Financial data may be retained for up to 7 years after a transaction to meet auditing requirements.",
        "Users may request the deletion of their data if it is no longer needed for the purposes it was collected."
      ]
    },
    {
      id: "transfers",
      title: "International Data Transfers",
      icon: <Globe className="w-5 h-5" />,
      content: [
        "We may transfer, store, and process your data outside the EEA, including countries where our affiliates and third-party service providers are located.",
        "Appropriate safeguards, such as Standard Contractual Clauses (SCCs) or adequacy decisions, are in place to ensure adequate data protection."
      ]
    },
    {
      id: "sharing",
      title: "Third-Party Data Sharing",
      icon: <Users className="w-5 h-5" />,
      content: [
        "We may share data with specific third parties, such as payment processors, ID verification services, and analytics providers.",
        "Data sharing with each third party is limited to the purpose required, such as processing payments or verifying identity."
      ]
    },
    {
      id: "security",
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: [
        "We employ a combination of technical and organizational measures to secure your data, including encryption standards, multi-factor authentication, and monitoring practices.",
        "Only authorized personnel can access your information, and all data is securely stored on Amazon AWS servers.",
        "Despite our security measures, internet transmission of data carries some risks, so transmission is at the user's discretion."
      ]
    },
    {
      id: "preferences",
      title: "Managing Data & Marketing Preferences",
      icon: <Settings className="w-5 h-5" />,
      content: [
        "Users have the option to manage their data preferences through a privacy preferences center.",
        "You can opt-out of certain types of data processing or third-party sharing.",
        "Contact support for assistance or use the provided link for immediate preference management."
      ]
    },
    {
      id: "automated",
      title: "Automated Decision-Making",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "Where automated systems are used for profiling (e.g., fraud detection or targeted marketing), we provide transparency regarding the impact on the user.",
        "Users can request more information or opt out of profiling if desired."
      ]
    },
    {
      id: "updates",
      title: "Policy Updates",
      icon: <FileText className="w-5 h-5" />,
      content: [
        "This policy is reviewed annually to remain compliant with evolving legal requirements and industry standards.",
        "Significant changes to the policy will be communicated to users via email or in-app notification."
      ]
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-9xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
              <p className="text-purple-300">Your privacy is our priority</p>
            </div>
          </div>
          
          {/* Quick Summary */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-purple-400" />
              Quick Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We collect only necessary data to provide our services, keep it secure with industry-standard 
              protection, and give you control over your privacy preferences. We don't sell your data and 
              only share it with trusted partners for essential services like payments and verification.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-9xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={section.id} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/8 transition-all duration-300">
                {/* Section Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-xl text-purple-400">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                    
                    {section.subsections && (
                      <div className="mt-6 space-y-6">
                        {section.subsections.map((subsection, sIndex) => (
                          <div key={sIndex} className="ml-4">
                            <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                              <ChevronRight className="w-4 h-4 text-purple-400" />
                              {subsection.title}
                            </h3>
                            <div className="space-y-3">
                              {subsection.items.map((item, iIndex) => (
                                <div key={iIndex} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                  <h4 className="font-medium text-purple-300 mb-2">
                                    {item.label}
                                  </h4>
                                  <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Questions About Your Privacy?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have questions, concerns, or requests regarding this policy, we're here to help.
            </p>
            <a 
              href="https://Jaimax.com/support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-colors duration-200"
            >
              Contact Support
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;