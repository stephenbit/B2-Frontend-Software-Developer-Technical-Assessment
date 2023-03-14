import React from 'react';

interface Props {
    isLoading: boolean;
}

const LoadingScreen: React.FC<Props> = ({ isLoading }) => {
    return (
        <main id='loading-container' role="main">
            {isLoading && (
                <div className="loading-message">
                    <img src="/maskable_icon.png" alt="Social Security Scotland logo" />
                    <p>Loading, please wait...</p>
                </div>
            )}
            <div className='loading-bar-container'>
                <div className="loading-bar" aria-label="Loading bar">
                    {!isLoading &&
                        <p>
                            If the content doesn't appear after a few seconds, please refresh the page or try again later.
                        </p>}
                </div>
            </div>
        </main>
    );
}

export default LoadingScreen;
