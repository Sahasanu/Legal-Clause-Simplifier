import React from 'react';
import DocumentUpload from '../components/DocumentUpload';
import ChatbotIcon from '../components/ChatbotIcon';

const Herosection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full translate-y-40 -translate-x-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-responsive-xl font-bold text-gray-900 mb-6 leading-tight">
            Know Your Basic <span className="text-gradient">Legal Rights</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Navigate the legal landscape with confidence. Access essential legal information presented in clear, understandable language.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Learning
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Browse Topics
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search legal topics, terms, or categories..."
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <DocumentUpload />
        </div>
      </div>

      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-20">
        <ChatbotIcon />
      </div>
    </div>
  );
};

export default Herosection;