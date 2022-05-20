import React from 'react';

const Loading = ({data}) => {
    return (
        <div className="flex items-center justify-center h-[90vh]">
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin">
            </div>
                <p className='ml-3'>{data}</p>
        </div>
    );
};

export default Loading;