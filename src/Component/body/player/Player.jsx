import React from 'react';

const Players = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-4'>Player List</h2>
            <ul className='space-y-2'>
                <li className='border-b border-gray-300 pb-2'>Player 1</li>
                <li className='border-b border-gray-300 pb-2'>Player 2</li>
                <li className='border-b border-gray-300 pb-2'>Player 3</li>
            </ul>
        </div>
    );
};

export default Players;