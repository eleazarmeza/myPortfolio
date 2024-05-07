import React from 'react';
import { Link } from 'react-router-dom';

import PresentationImage from '../../assets/IOSapp.png';

const IOSapp = () => {
    return (
        <div className="mt-20">
        <div className="flex flex-col items-center justify-center">
            {/* Image */}
            <img src={PresentationImage} alt="Presentation" className="max-w-4xl w-full mb-8" />

            {/* Text */}
            <p className="text-lg mb-4">
                Check the app in action.</p>

            {/* Links */}
            <Link
                to={'https://www.canva.com/design/DAFxtzatBrE/JghdSbFi46S2bpgKSzJdJA/edit?utm_content=DAFxtzatBrE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
            >
                Check video demo in slide #5
            </Link>
        </div>
    </div>
    );
};

export default IOSapp;
