import React from 'react'
import { Link } from 'react-router-dom';
import VideogameImage from '../../assets/Videogame.png';

const Videogame = () => {

    return (
        <div className="mt-20">
        <div className="flex flex-col items-center justify-center">
            {/* Image */}
            <img src={VideogameImage} alt="Presentation" className="max-w-4xl w-full mb-8" />

            {/* Text */}
            <p className="text-lg mb-4">
                Check the game in action.</p>

            {/* Links */}
            <Link
                to={'https://mywellbeing.my.canva.site/fractionguys'}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
            >
                Visit website
            </Link>
            <div className="m-2"></div>
            <Link
                to={'https://drive.google.com/file/d/1DNDjdUxpQ1-dgdddhGWKJBuNLiZ1s28j/view?usp=share_link'}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                target="_blank"
                rel="noopener noreferrer"
            >
                Check gameplay video
            </Link>
        </div>
    </div>
    );
};

export default Videogame;
