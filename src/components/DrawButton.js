import React from 'react';
import './style.css';

const DrawButton = ({ label, onClick }) => (
    <button
        className='draw-button'
        style={{ 
            width: 270,
            height: 55,
            borderRadius: 30,
            fontSize: 18,
            color: 'white',
            backgroundImage: 'linear-gradient(#98c34b, #086b3b)',
            border: '1px solid white',
        }}
        onClick={onClick}
    >
        {label}
    </button>
);

export default DrawButton;