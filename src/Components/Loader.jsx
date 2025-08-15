import React from 'react';

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen text-black dark:text-white'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    );
};

export default Loader;