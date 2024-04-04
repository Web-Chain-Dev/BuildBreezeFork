import React from "react";

const Pricing = () => {
  return (
    <div className="w-full min-h-screen mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="flex flex-wrap  justify-center">
        {/* Free Plan */}
        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-purple-600 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">Free</h3>
            <ul className="text-center">
              <li className="mb-2">10 users included</li>
              <li className="mb-2">2 GB of storage</li>
              <li className="mb-2">Help center access</li>
              <li className="mb-2">Email support</li>
            </ul>
            <div className="text-center mt-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
        {/* Pro Plan */}
        <div className="w-full bg-blue-600  sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-purple-600 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
            <ul className="text-center">
              <li className="mb-2">20 users included</li>
              <li className="mb-2">10 GB of storage</li>
              <li className="mb-2">Help center access</li>
              <li className="mb-2">Priority email support</li>
            </ul>
            <div className="text-center mt-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
