"use client";

import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" name="name" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input type="email" name="email" className="mt-1 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" className="mt-1 w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;