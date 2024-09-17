import React from 'react';
import { Link } from 'react-router-dom';

import PresentationImage1 from '../../assets/TitanicPres1.png';

import PresentationImage2 from '../../assets/TitanicPres2.png';
import PresentationImage3 from '../../assets/TitanicPres3.png';
import PresentationImage4 from '../../assets/TitanicPres4.png';

const Titanic = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col items-center justify-center">

                <img src={PresentationImage2} alt="Presentation" className="max-w-4xl w-full mb-4" />
                <p className="text-sm text-left">
                    The objective was to understand through <strong>statistics</strong> the general conditions to survival in the RMS Titanic,
                    and to develop <br></br> a <strong>Machine Learning</strong>  Model that could indeed <strong>predict</strong> who will survive based on those conditions.</p>
                <div className='mt-4'></div>
                <p className="text-lg mb-4">
                    Quickly view full presentation.</p>



                <Link
                    to={'https://www.canva.com/design/DAGRChMw0U4/m94qLf1SEmg3amNUr-csqw/edit?utm_content=DAGRChMw0U4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check in Canva
                </Link>
                <div className='mt-10'></div>

                <img src={PresentationImage1} alt="Presentation" className="max-w-4xl w-full mb-8" />
                <p className=" text-left">
                    Initial statistics showed clear tendencies amongst data,  <strong>but still remained hard for a human to evaluate.</strong> <br></br></p>
                <div className='mt-10'></div>
                <img src={PresentationImage4} alt="Presentation" className="max-w-4xl w-full mb-8" />
                <p className=" text-left">
                    But with the <strong>help of Machine Learning</strong>, it was possible to <strong>compare 3 models</strong>: SVM, Logistic Regression and 
                    an Ensemble where Tensorflow <br></br>served as an Autoencoder (which polished the features) to let SVM <strong>predict with 85% Accuracy who will survive,</strong>  which is higher than average, <br></br>and of course <strong>better than only human calculations</strong> in terms of time and resources that may be required. </p>
                <div className='mt-10'></div>
            </div>
        </div>
    );
};

export default Titanic;
