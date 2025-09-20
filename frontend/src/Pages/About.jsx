import React from 'react';
import ChatbotIcon from '../components/ChatbotIcon';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "Prince Raj",
      title: "CEO & Co-Founder",
      description: "Former corporate lawyer with 10+ years of experience in contract law and legal technology innovation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sanu Sahu",
      title: "CTO & Co-Founder",
      description: "AI and machine learning expert with a passion for making complex technology accessible to everyone.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anshikha Singh",
      title: "Head of Legal AI/Ethics",
      description: "Legal ethics professor and AI researcher specializing in responsible AI development in legal contexts.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Yuvraj Prasad",
      title: "Head of Product",
      description: "User experience designer focused on creating intuitive interfaces for complex legal processes.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const coreValues = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Privacy First",
      description: "Your data is protected with bank-level security. We never share personal information and use encryption for all communications."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "AI Transparency",
      description: "We're open about how our AI works, its limitations, and where human review is recommended for legal decisions."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Ethical Use",
      description: "Our AI is designed to democratize legal knowledge while maintaining the highest ethical standards in legal technology."
    }
  ];

  const metrics = [
    {
      number: "95%",
      label: "Accuracy Rate",
      description: "Our AI-powered analysis maintains industry-leading accuracy in document review and legal guidance."
    },
    {
      number: "50K+",
      label: "Users Served",
      description: "Thousands of individuals and businesses trust our platform for their legal document needs."
    },
    {
      number: "24/7",
      label: "Availability",
      description: "Our AI assistant is available around the clock to help you understand your legal documents."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Our Team & Policies
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're a passionate team of legal experts, AI researchers, and product innovators working together to make legal knowledge accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Join Our Mission
                </button>
                <button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Collaborative Team</h3>
                      <p className="text-sm text-gray-600">Working together to innovate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-4 mb-8">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 1m-3-1l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6 leading-relaxed">
              At LegalEd, we believe that legal knowledge should be accessible to everyone, not just those who can afford expensive legal services. Our mission is to democratize legal understanding through cutting-edge AI technology that simplifies complex legal documents and makes legal guidance available to individuals and businesses of all sizes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're building the future of legal technology where artificial intelligence works alongside human expertise to bridge the gap between legal complexity and everyday understanding. Our platform empowers users to make informed decisions about their legal matters while maintaining the highest standards of accuracy and ethical responsibility.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Through continuous innovation and user-centered design, we're creating tools that transform how people interact with legal documents, making the law more transparent, accessible, and understandable for everyone.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Legal knowledge should be a right, not a privilege. We're here to make that vision a reality."
            </blockquote>
            <cite className="text-sm font-semibold text-blue-600">Sarah Chen, CEO & Co-Founder</cite>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">These principles guide every decision we make and every feature we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Our diverse team brings together expertise in law, technology, and design to create solutions that truly serve our users' needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why We Do What We Do Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why We Do What We Do</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We're driven by the belief that technology can make legal services more accessible, affordable, and understandable for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{metric.label}</h3>
                <p className="text-gray-600 leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're looking to collaborate, provide feedback, or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Our Team
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
              View Open Positions
            </button>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-20">
        <ChatbotIcon />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
