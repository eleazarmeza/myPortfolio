import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import AIImage from '../../assets/ai3 1.gif'; // Importing the image

const Header = () => {


    const downloadResume = () => {
        // Obteniendo la URL del currículum desde la carpeta assets
        const resumeUrl = require('../../assets/resume.pdf');

        // Creando un enlace oculto para descargar el currículum
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Artificial Intelligence Student.pdf'; // Cambia 'resume.pdf' al nombre que quieras para el archivo
        link.click();
    };


    return (
        <nav className="fixed top-0 w-full shadow-md z-5 bg-black bg-opacity-100 text-white p-1 mb-1">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img 
                    src={AIImage} 
                    alt="AI Logo" 
                    className="h-12 w-auto mr-2 ml-1"
                    title="hi :)" 
                    /> 
                    <span
                        className="text-lg font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text bg-300% animate-gradient mr-4  whitespace-nowrap"
                    >
                        Artificial Intelligence Student Portfolio
                    </span>
                </div>

                <ul className="flex justify-end flex-grow">
                    <li className="mr-4">
                        <Link to={ROUTES.TITANIC} className="text-white hover:text-gray-300">Titanic AI-Analysis</Link>
                    </li>

                    <li className="mr-4">
                        <Link to={ROUTES.AMAZON} className="text-white hover:text-gray-300">AI for AWS</Link>
                    </li>
                    <li className="mr-4">
                        <Link to={ROUTES.IOSAPP} className="text-white hover:text-gray-300">IOS App</Link>
                    </li>
                    <li className="mr-4">
                        <Link to={ROUTES.VIDEOGAME} className="text-white hover:text-gray-300">Video game</Link>
                    </li>
                    <li className="mr-4">
                        <Link to={ROUTES.NETWORK} className="text-white hover:text-gray-300">Network</Link>
                    </li>
                    <li className="mr-4">
                        <Link to={ROUTES.HOME} className="text-white hover:text-gray-300">Resume</Link>
                    </li>
                    {/*
                    <button className="bg-purple-800 hover:bg-purple-900 text-white font-normal py-0 px-3 rounded-2xl"
                        onClick={downloadResume}
                    >
                        Download Resume
                    </button>
                    */}
                    <div className="m-1"></div>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
