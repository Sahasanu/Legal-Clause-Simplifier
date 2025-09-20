import React from 'react';
import ChatbotIcon from '../components/ChatbotIcon';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col items-start text-left h-full card-hover group">
      <div className="bg-blue-100 p-4 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Our advanced AI technology makes legal document analysis simple, fast, and accurate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            title="Clause Simplification"
            description="Transform complex legal language into plain English that anyone can understand. Our AI breaks down complicated terms and explains them clearly."
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            title="Clause Extraction"
            description="Automatically identify and extract key clauses, terms, and conditions from your documents. Find what matters most in seconds."
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
            }
            title="Document Classification"
            description="Instantly categorize and organize your legal documents by type, purpose, and importance. Streamline your document management."
          />
        </div>
      </div>

      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-20">
        <ChatbotIcon />
      </div>
    </div>
  );
};

export default Features;