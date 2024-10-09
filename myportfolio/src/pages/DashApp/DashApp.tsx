import React from 'react';
import { MyDashEmbed } from '../../components/MyDashEmbed';

const DashApp: React.FC = () => {
    return (
        <div className="flex h-screen overflow-y-auto">
            {/* Sidebar for navigation */}
            <nav className="w-1/6 bg-gray-100 p-5 shadow-lg">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <ul className="list-none p-0">
                    <li className="mb-2"><a className="text-blue-600 hover:underline" href="/">Home</a></li>
                    <li className="mb-2"><a className="text-blue-600 hover:underline" href="/survival">Survival Analysis</a></li>
                    <li className="mb-2"><a className="text-blue-600 hover:underline" href="/correlation">Correlation Matrix</a></li>
                    <li className="mb-2"><a className="text-blue-600 hover:underline" href="/data-overview">Data Overview</a></li>
                </ul>
            </nav>

            {/* Dash app embeds */}
            <div className="w-5/6 p-5 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-5">Titanic Survival Analysis</h1>
                
                {/* Individual Embed Sections */}
                <div className="w-full max-w-4xl mb-10 flex flex-col items-center">
                    <MyDashEmbed />
                    <p className="mt-2 text-center">Description for Embed 1</p>
                </div>

                <div className="w-full max-w-4xl mb-10 flex flex-col items-center">
                    <MyDashEmbed />
                    <p className="mt-2 text-center">Description for Embed 2</p>
                </div>

                <div className="w-full max-w-4xl mb-10 flex flex-col items-center">
                    <MyDashEmbed />
                    <p className="mt-2 text-center">Description for Embed 3</p>
                </div>
            </div>
        </div>
    );
};

export default DashApp;
