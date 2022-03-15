import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import '../../components/style.css';
import SpinningWheel from '../../components/SpinningWheel';

const OfferingDraw = () => {
    const [ selectedCountry, setSelectedCountry ] = useState(null);
    const [ selectedOffering, setSelectedOffering ] = useState(null);
    const [ selectedEmployee, setSelectedEmployee ] = useState(null);

    const [ winners, setWinners ] = useState({});

    const firstStep = !selectedCountry && !selectedOffering && !selectedEmployee;
    const secondStep = selectedCountry && !selectedOffering && !selectedEmployee;
    const thirdStep = selectedCountry && selectedOffering && !selectedEmployee;

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
            }, 5000);
        } else if (secondStep) {
            updatedValue = {'offering': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedOffering(value);
            }, 5000);
        } else if (thirdStep) {
            updatedValue = {'name': value};
            setWinners(winners=>({
                ...winners,
                ...updatedValue
            }));
            setTimeout(() => {
                setSelectedEmployee(value);
                setSelectedCountry(null);
                setSelectedOffering(null);
                setSelectedEmployee(null);
                setWinners({});
            }, 10000);
        };
    };

    return(
        <PageWrapper>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        width: '50%',
                        padding: '80px 0 0 60px',
                    }}
                >
                    <p
                        style={{
                            fontSize: 35,
                            fontWeight: 400,
                            lineHeight: 1.2,
                            color: 'white'
                        }}
                    >
                        <i>Are you one of our</i> <br />
                        <b style={{ fontWeight: 700 }}>5 Apple iWatch</b> <i>winners?</i>
                    </p>
                    <div 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 650,
                            height: 80,
                            backgroundColor: 'rgba(230, 230, 230, 0.8)',
                            borderRadius: 5,
                        }}
                    >
                        <p style={{ fontSize: 26, marginBottom: 0 }}>
                            {winners.country} 
                            {winners.offering && ' - '} 
                            {winners.offering} 
                            {winners.name && ' - '} 
                            <b> {winners.name}</b>
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        height: '100%',
                        width: '50%',
                    }}
                >
                    <SpinningWheel 
                        size={270} 
                        style={{ transform: 'translateY(-130px) translateX(50px)', overflow: 'hidden' }} 
                        onSpinFinish={(value) => onSpinFinish(value)}
                        selectedCountry={selectedCountry}
                        selectedOffering={selectedOffering}
                        selectedEmployee={selectedEmployee}
                    />
                </div>
            </div>
        </PageWrapper>
    )
};

export default OfferingDraw;