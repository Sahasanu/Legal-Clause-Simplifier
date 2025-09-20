import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LawThemedLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login data:', formData);
        
        // Simulate successful login
        localStorage.setItem('authToken', 'mock-jwt-token');
        localStorage.setItem('user', JSON.stringify({
            email: formData.email,
            name: 'User Name'
        }));
        
        // Redirect to home
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-2xl shadow-2xl overflow-hidden">
                {/* Left side - Branding */}
                <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 text-white bg-gradient-to-r from-blue-900 to-indigo-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTR2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzB2LTRoLTR2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJINnYtNHY0ek02IDR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJINnYtNHY0eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
                    <div className="relative z-10 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="bg-white/20 p-5 rounded-full">
                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 9v12H1V9h4zm4 0v12H5V9h4zm4 0v12H9V9h4zm4 0v12h-4V9h4zm4 0v12h-4V9h4zm-4-6V1h-4v2h4zm4 0V1h-4v2h4zm-8 0V1H9v2h4zm-4 0V1H5v2h4zm-4 0V1H1v2h4zm16 4V5h-4v2h4zm-4 0V5h-4v2h4zm-4 0V5H9v2h4zm-4 0V5H5v2h4zm-4 0V5H1v2h4z"/>
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold mb-4 font-serif">LegalConnect</h1>
                        <p className="text-lg mb-8">Your trusted platform for legal professionals</p>
                        <div className="text-left space-y-4">
                            <div className="flex items-start">
                                <div className="bg-blue-800 p-2 rounded-full mr-4">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Legal Expertise</h3>
                                    <p className="text-blue-100">Connect with top legal minds</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-800 p-2 rounded-full mr-4">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15 8H9V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Secure & Confidential</h3>
                                    <p className="text-blue-100">End-to-end encrypted communications</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-blue-800 p-2 rounded-full mr-4">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Legal Resources</h3>
                                    <p className="text-blue-100">Access to exclusive legal documents</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right side - Form */}
                <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 font-serif">Welcome Back</h2>
                        <p className="text-gray-600 mt-2">Sign in to access your legal resources</p>
                    </div>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                                    Password
                                </label>
                                <a href="#" className="text-sm text-blue-600 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15 8H9V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"/>
                                    </svg>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Sign In
                        </button>
                        
                        <div className="text-center text-sm text-gray-600">
                            Don't have an account? 
                            <Link to="/signup" className="font-medium text-blue-600 hover:underline ml-1">
                                Sign up
                            </Link>
                        </div>
                    </form>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Client Testimonials</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm italic text-gray-600">"LegalConnect has transformed how I manage my practice. The resources and network are invaluable."</p>
                                <p className="text-sm font-medium text-gray-800 mt-2">- Prince, Esq.</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm italic text-gray-600">"The document templates alone have saved me countless hours of work. Highly recommended for any legal professional."</p>
                                <p className="text-sm font-medium text-gray-800 mt-2">- Yuvraj, Attorney at Law</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawThemedLogin;