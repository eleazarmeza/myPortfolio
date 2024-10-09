import React from 'react';

const MyDashEmbed = () => {
    return (
        <div className="w-full h-96"> {/* Set a fixed height for the embed area */}
            <iframe
                src="http://localhost:8050" // Use the URL of your deployed Dash app
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Dash Application"
            />
        </div>
    );
};

export default MyDashEmbed;
