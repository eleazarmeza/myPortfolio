import React from 'react';

import PresentationImage from '../../assets/AWSArchitecture.jpg';

const Amazon = () => {
    return (
        <div className="mt-20">
            
        <div className="flex flex-col items-center justify-center">
        <p className="text-lg mb-4 j">
                The project will be fully ready to show by September-21-2024.</p>

            {/* Image */}
            <img src={PresentationImage} alt="Presentation" className="max-w-2xl w-full mb-8" />

            {/* Text */}
            
            {/* Links */}
            <div className="m-5"></div>

        </div>
    </div>
    );
};

export default Amazon;
