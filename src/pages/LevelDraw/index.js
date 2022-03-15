import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper';
import '../../components/style.css';
import SpinningWheel from '../../components/SpinningWheel';

const LevelDraw = () => {
   
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
                        padding: '30px 0 0 60px',
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
                            width: 650,
                            height: 320,
                            backgroundColor: 'rgba(230, 230, 230, 0.8)',
                            borderRadius: 5,
                            padding: '40px 30px',
                        }}
                    >
                        {/* {winners.map((winner, index) => (
                            <p style={{ fontSize: 24, marginBottom: 12 }}>
                                {index + 1}. {winner.country} - {winner.offering} -
                                <b> {winner.name}</b>
                            </p>
                        ))} */}
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
                    />
                </div>
            </div>
        </PageWrapper>
    )
};

export default LevelDraw;