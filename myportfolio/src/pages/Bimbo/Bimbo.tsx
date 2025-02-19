import React from 'react';
import { Link } from 'react-router-dom';

import PresentationImage1 from '../../assets/TitanicPres1.png';

import PresentationImage2 from '../../assets/TitanicPres2.png';
import PresentationImage3 from '../../assets/TitanicPres3.png';
import PresentationImage4 from '../../assets/TitanicPres4.png';
import PresentationImage5 from '../../assets/gemini.png';


// https://drive.google.com/uc?export=download&id=1mt3HfR8CqMA_wz1SfwsZCkhMjbVdmSrj


const Bimbo = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col items-center justify-center">

                <img src={PresentationImage5} alt="Presentation" className="max-w-4xl w-full mb-4" />
                <p className="text-sm text-left">
                    Check the video explanation of the project developed with the <strong>Google Gemini LLM</strong> used as a <strong>Retrieval Augmented Generation (RAG)</strong> for DB consulting.</p>
                <div className='mt-4'></div>


                    <div>
                        <iframe
                          width="800"   // Ancho fijo en píxeles
                          height="450"  // Altura fija en píxeles
                        src='https://www.youtube.com/embed/6zqEgl4HeFc' 
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="LLM Gemini RAG Demonstration"
                    ></iframe>
                </div>



                
            </div>
            <div className='mt-10'></div>
            <p className="text-lg mb-4 flex flex-col items-center justify-center">
            
            Quickly view presentation.</p>
        </div>
    );
};

export default Bimbo;
