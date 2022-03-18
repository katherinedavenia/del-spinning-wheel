import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import '../../components/style.css';
import WinnerFrame from '../../assets/winner-frame.gif';
import SpinningWheelOffering from '../../components/SpinningWheelOffering';
import { Box, Typography } from '@mui/material';
import DeloitteCircle from '../../assets/deloitte-circle.png';
import iWatch from '../../assets/iwatch.png';

const OfferingDraw = () => {
    const [ selectedCountry, setSelectedCountry ] = useState(null);
    const [ selectedOffering, setSelectedOffering ] = useState(null);

    const [ winners, setWinners ] = useState({});

    const firstStep = !selectedCountry && !selectedOffering;
    const secondStep = selectedCountry && !selectedOffering;
    const thirdStep = selectedCountry && selectedOffering;

    const onSpinFinish = (value) => {
        let updatedValue = {};
        
        if (firstStep) {
            updatedValue = {'country': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedCountry(value);
            }, 2000);
        } else if (secondStep) {
            updatedValue = {'offering': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedOffering(value);
            }, 2000);
        } else if (thirdStep) {
            updatedValue = {'name': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
        };
    };

    const modifyState = () => {
        setSelectedCountry(null);
        setSelectedOffering(null);
        setWinners({});
    };

    return(
        <PageWrapper>
            <Box
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '100%',
                        width: '50%',
                        padding: '80px 0 0 60px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <img
                            src={iWatch}
                            alt='iWatch'
                            style={{
                                height: '130px',
                                marginRight: '20px'
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: 35,
                                fontWeight: 400,
                                lineHeight: 1.2,
                                color: 'white',
                                marginBottom: '30px',
                            }}
                        >
                            <i>Are you one of our</i> <br />
                            <b style={{ fontWeight: 700 }}>5 Apple iWatch</b><br/>
                            <i>winners?</i>
                        </Typography>
                    </Box>
                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '570px',
                            height: '250px',
                            backgroundColor: 'lightyellow',
                            border: '15px solid #1fadd8',
                            borderRadius: '15px',
                            position: 'relative',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '28px',
                                fontWeight: 600,
                                color: 'deepskyblue',
                                margin: '20px 0 7px 0',
                            }}
                        >
                            Congratulations to:
                        </Typography>
                        <Typography 
                            sx={{ 
                                fontSize: '32px', 
                                marginBottom: 0,
                                textAlign: 'center',
                                lineHeight: 1.2,
                            }}
                        >
                            {winners.country}
                            <br />
                            {winners.offering} 
                            <br />
                            <b style={{ fontWeight: 700 }}>{winners.name}</b>
                        </Typography>
                        <img 
                            src={WinnerFrame} 
                            alt='winner-frame' 
                            style={{
                                position: 'absolute',
                                top: -40,
                                width: '600px',
                                height: '300px',
                            }}
                        />
                    </Box>
                </Box>
                <Box sx={{  width: '50%', position: 'relative' }}>
                     <SpinningWheelOffering
                        onSpinFinish={(value) => onSpinFinish(value)}
                        selectedCountry={selectedCountry}
                        selectedOffering={selectedOffering}
                        parentStateModifier={modifyState}
                    />
                    <img
                        src={DeloitteCircle}
                        alt='deloitte'
                        style={{
                            zIndex: 500,
                            position: 'absolute',
                            top: 320,
                            left: 240,
                            width: '150px'
                        }}
                    />
                </Box>
            </Box>
        </PageWrapper>
    )
};

export default OfferingDraw;