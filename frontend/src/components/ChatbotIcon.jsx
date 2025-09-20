import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotIcon = ({ className = "", showTooltip = true }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if user is authenticated
    const isAuthenticated = () => {
      return localStorage.getItem("authToken") !== null;
    };

    if (!isAuthenticated()) {
      // If not authenticated, redirect to login
      navigate('/login');
    } else {
      // If authenticated, go to chatbot
      navigate('/chatbot');
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 ${className}`}
        aria-label="Open AI Assistant"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
      
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Ask AI Assistant
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default ChatbotIcon;
