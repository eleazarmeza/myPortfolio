import React from 'react'
import { Link } from 'react-router-dom';
import VideogameImage from '../../assets/Network.png';

const Network = () => {

    return (
        <div className="mt-20">
        <div className="flex flex-col items-center justify-center">
            {/* Image */}
            <img src={VideogameImage} alt="Presentation" className="max-w-4xl w-full mb-8" />

            {/* Text */}
            <p className="text-lg mb-4">
                Private Network made for about 700 people in Cisco's Packet Tracer.</p>

            {/* Links */}

            <div className="m-2"></div>
            <Link
                to={'https://drive.google.com/file/d/1zH8qWkDKNAwEKGdzxM6dvWXvvx2LzpqP/view?usp=sharing'}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
            >
                Watch Presentation in Google Drive
            </Link>
        </div>
    </div>
    );
};

export default Network;
