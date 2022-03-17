import { Button } from '@mui/material';
import React from 'react';
import './style.css';

const DrawButton = ({ label, onClick, disabled }) => (
    <Button
        className='draw-button'
        style={{ 
            width: 100,
            height: 55,
            borderRadius: 15,
            fontSize: 18,
            fontWeight: 600,
            color: 'white',
            backgroundImage:'linear-gradient(#98c34b, #086b3b)',
            border: '1px solid white',
            transform: 'translate(-50px, -70px)',
            display: disabled && 'none',
        }}
        onClick={onClick}
    >
        {label}
    </Button>
);

export default DrawButton;