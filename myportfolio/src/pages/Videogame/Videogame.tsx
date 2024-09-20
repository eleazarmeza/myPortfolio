import React from 'react';
import { Link } from 'react-router-dom';
import VideogameImage from '../../assets/Videogame.png';
import fr from '../../assets/fr.png';

const Videogame = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col items-center justify-center">
                {/* Image */}
                <img src={VideogameImage} alt="Presentation" className="max-w-4xl w-full mb-6" />

                {/* Text */}
                <p className="text-lg mb-1">You can check the game in action, Soundtrack is awesome!</p>
                <div className="m-3"></div>
                <br></br>
                {/* Links */}
                <div className="flex justify-center"> {/* Horizontal list */}
                    {/* Group 1 */}
                    <div className="flex flex-col items-center justify-center m-1"> {/* Group container */}
                        <Link
                            to={'https://drive.google.com/uc?export=download&id=1G1OAoS3Bh3iB5fmI9J_3ZfVqOGXJCSwe'}
                            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download and play!
                        </Link>
                        <div className="mt-2">Only for Mac, user credentials are:</div>
                        <div>num lista: 1</div>
                        <div>grupo: a</div>
                    </div>
                    <div className="m-6"></div>
                    {/* Group 2 */}
                    <div className="flex flex-col items-center justify-center m-1"> {/* Group container */}
                        <Link
                            to={'https://mywellbeing.my.canva.site/fractionguys'}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit website
                        </Link>
                    </div>
                    <div className="m-10"></div>
                    {/* Group 3 */}
                    <div className="flex flex-col items-center justify-center m-1"> {/* Group container */}
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
                
                <br></br>
                <br></br>
                <p className="text-lg mb-1">Also, a Dashboard was included.</p>
                <img src={fr} alt="Presentation" className="max-w-6xl w-full mb-8 justify-center" />
            </div>
            
            <div className="m-10"></div>
        </div>
        
    );
};

export default Videogame;
