import React from 'react'

const pageWelcome = (props) => {
  return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Bienvenue sur notre site</h1>
            <p></p>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae efficitur velit. Ut dignissim mi
              vitae consectetur vehicula.
            </p>
            <a
              href="/login"
              className="ml-4 inline-block bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-600"
            >
              Se connecter
            </a>
          </div>
        </div>
      );
}

export default pageWelcome