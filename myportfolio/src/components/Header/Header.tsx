import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import AIImage from '../../assets/ai3 1.gif'; // Importing the image

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const downloadResume = () => {
        const resumeUrl = require('../../assets/resume.pdf');
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Artificial Intelligence Student.pdf';
        link.click();
    };

    return (
        <nav className="fixed top-0 w-full shadow-md z-5 bg-black bg-opacity-100 text-white p-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src={AIImage}
                        alt="AI Logo"
                        className="h-12 w-auto mr-2"
                        title="hi :)"
                    />
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient">
                        Artificial Intelligence Student Portfolio
                    </span>


                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className={`mr-2 text-sm flex-col md:flex md:flex-row md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.BIMBO} className="text-white hover:text-gray-300">AI Inventory Control</Link>
                    </li>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.TITANIC} className="text-white hover:text-gray-300">Titanic AI-Analysis</Link>
                    </li>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.AMAZON} className="text-white hover:text-gray-300">AI for Amazon</Link>
                    </li>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.IOSAPP} className="text-white hover:text-gray-300">IOS App</Link>
                    </li>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.VIDEOGAME} className="text-white hover:text-gray-300">Video game</Link>
                    </li>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.NETWORK} className="text-white hover:text-gray-300">Network</Link>
                    </li>
                    <li className="my-1 md:my-0">
                        <Link to={ROUTES.HOME} className="text-white hover:text-gray-300">Resume</Link>
                    </li>
                    {/*<li className="my-1 md:my-0">
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-normal py-1 px-3 rounded-2xl" onClick={downloadResume}>
                            Download Resume
                        </button>
                    </li>
                    */}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
