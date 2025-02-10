import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">MyWebsite</a>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/about" className="hover:text-blue-200">About</a></li>
            <li><a href="/services" className="hover:text-blue-200">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to MyWebsite</h1>
          <p className="text-xl text-gray-700 mb-8">
            This is a simple example of a React app with Tailwind CSS.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;