"use client";
import Footer from "@/components/Footer";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-6">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg shadow-blue-500/50 w-full max-w-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
            Contact Us
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
