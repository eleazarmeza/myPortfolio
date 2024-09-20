import React from 'react';

import PresentationImage from '../../assets/AWSArchitecture.jpg';

import avrg from '../../assets/avrg2.png';
import pro from '../../assets/pro1.png';
import dash from '../../assets/dash.png';
import medio from '../../assets/medio2.png';

const Amazon = () => {
    return (
        <div className=''>
        <div className="mt-20">
            
        <div className="flex flex-col items-center justify-center">



            {/* Image */}
            <img src={pro} alt="Presentation" className="max-w-6xl w-full mb-8" />

            {/* Text */}
                  {/* Text */}
                  <p className="text-lg mb-4">
                Artificial Intelligence <strong>Instant Performance Evaluator</strong> done for <strong>Amazon Web Services.</strong></p>
                <br></br>
                <p className="text-lg mb-4">
                No more Excel Files.</p>
                <br></br>
                <p className="text-lg mb-4">
                <strong>Hundreds of hours saved</strong> from analyzing, filtering, comparing and graphing data.</p>
                <br></br>
             
                <img src={avrg} alt="Presentation" className="max-w-6xl w-full mb-8" />
                <br></br>
                <p className="text-lg mb-4">
                As per showed, the model can tell in a matter of a second the Evaluation Result.</p>
                <br></br>
                <img src={medio} alt="Presentation" className="max-w-6xl w-full mb-8" />
                <p className="text-lg mb-4">
                A dashboard was also created.</p>
                <img src={dash} alt="Presentation" className="max-w-6xl w-full mb-8" />
            {/* Links */}
            <div className="m-5"></div>
            
            </div>
        </div>
    </div>
    );
};

export default Amazon;

