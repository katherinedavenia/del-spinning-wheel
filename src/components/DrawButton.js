import { Button } from '@mui/material';
import React from 'react';
import './style.css';

const DrawButton = ({ label, onClick, disabled }) => (
    <Button
        className='draw-button'
        sx={{ 
            width: '165px',
            height: '60px',
            borderRadius: '20px',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.1,
            color: 'white',
            backgroundImage:'linear-gradient(#98c34b, #086b3b)',
            border: '1px solid white',
            transform: 'translate(-250px, -440px)',
            display: disabled && 'none',
        }}
        onClick={onClick}
    >
        {label}
    </Button>
);

export default DrawButton;