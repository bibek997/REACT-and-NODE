import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Image */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-4 md:p-0">
  <div className="flex flex-col items-center md:flex-row md:space-x-4">
    <img 
      src="src/assets/avatar1.jpg" 
      alt="Avatar 1" 
      className="h-48 w-32 md:h-96 md:w-64 mb-8 md:mb-44 md:mr-4"
    />
    <img 
      src="src/assets/avatar2.jpg" 
      alt="Avatar 2" 
      className="h-48 w-32 md:h-96 md:w-64 mt-8 md:mt-44 md:ml-4"
    />
  </div>
</div>
      {/* Sign Up Form */}
      <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-800 p-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="my-6 text-center text-3xl font-extrabold text-white">Sign up</h2>
          </div>
          <form className="mt-8 space-y-6 bg-transparent">
            <div className="rounded-md shadow-sm space-y-6">
              <div className="mb-5">
                <label className="block text-white text-sm">USER NAME</label>
                <input type="text" placeholder="Enter your username" className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
              </div>
              <div className="mb-5">
                <label className="block text-white text-sm">PASSWORD</label>
                <input type="password" placeholder="Enter your password" className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
              </div>
              <div className="mb-5">
                <label className="block text-white text-sm">CONFIRM PASSWORD</label>
                <input type="password" placeholder="Confirm your password" className="w-full my-2 px-4 py-2 border border-gray-300 rounded-lg text-sm bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
              </div>
            </div>
            {/* Sign Up Button */}
            <div>
              <Link to="/">
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Facebook and Google Icon */}
            <div className="flex justify-center space-x-2 my-4">
            <button className="flex items-center justify-center px-4 py-1 text-gray-700">
              <img src="src/assets/google.png" alt="Google" className="h-6 w-6" /> 
            </button>
            <button className="flex items-center justify-center  px-4 py-1 text-gray-700">
              <img src="src/assets/facebook.png" alt="Facebook" className="h-7 w-7" /> 
            </button>
          </div>
          <p className="text-center text-sm text-gray-400 ">Been here before? <a href="/" className="text-blue-500">Log in</a></p>          
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
