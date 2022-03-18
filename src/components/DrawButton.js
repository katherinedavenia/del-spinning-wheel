import { Button } from '@mui/material';
import React from 'react';
import './style.css';

const DrawButton = ({ label, onClick, disabled }) => (
    <Button
        className='draw-button'
        style={{ 
            width: 165,
            height: 60,
            borderRadius: 20,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 1.1,
            color: 'white',
            backgroundImage:'linear-gradient(#98c34b, #086b3b)',
            border: '1px solid white',
            transform: 'translate(-225px, -465px)',
            display: disabled && 'none',
        }}
        onClick={onClick}
    >
        {label}
    </Button>
);

export default DrawButton;