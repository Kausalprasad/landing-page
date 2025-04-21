// src/pages/ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <motion.div 
      className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 p-4 rounded-full">
          {/* Inline SVG for checkmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-orange-500 mb-4">
        Thank You for Your Submission!
      </h1>

      <p className="text-gray-600 mb-6">
        We have successfully received your enquiry. Our team will review your submission and get back to you soon.
      </p>

      <div className="bg-green-100 border border-green-300 p-4 rounded-lg mb-6 text-sm">
        <p><span className="font-semibold text-green-700">What's Next?</span> You will be contacted shortly regarding your class enquiry.</p>
      </div>

      <button 
        onClick={() => window.location.href = '/'}
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Go Back to Home
      </button>
    </motion.div>
  </div>
  );
};

export default ThankYou;
