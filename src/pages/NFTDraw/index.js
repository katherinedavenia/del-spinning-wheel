import React, { useState } from 'react';
import DrawButton from '../../components/DrawButton';
import PageWrapper from '../../components/PageWrapper';
// import SlotMachineNFT from '../../components/SlotMachine';

const NFTDraw = () => {
    const [ winners, setWinners ] = useState([
        { country: 'Indonesia', name: 'Fauzan Rizky', number: '1294' },
        { country: 'Malaysia', name: 'Muhammad Aldino', number: '1294' },
        { country: 'Japan', name: 'Muhammad Aldino', number: '1294' },
        { country: 'Korea', name: 'Muhammad Aldino', number: '1294' },
        { country: 'Indonesia', name: 'Muhammad Aldino', number: '1294' },
    ]);

    return(
        <PageWrapper>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '30%',
                        width: '100%',
                        padding: '20px 0 0 55px',
                    }}
                >
                    <div style={{ width: '50%' }}>
                        <p
                            style={{
                                fontSize: 40,
                                fontWeight: 500,
                                lineHeight: 1.3,
                                color: 'white'
                            }}
                        >
                            <i>Who is the lucky winner?</i>
                        </p>
                        <DrawButton label="DRAW THE WINNER"/>
                    </div>
                    <div style={{ width: '50%' }}>
                        <div
                            style={{
                                width: 500,
                                height: 450,
                                backgroundColor: 'rgba(230, 230, 230, 0.9)',
                                borderRadius: 5,
                                padding: '35px 30px',
                            }}
                        >
                            {winners.map((winner, index) => (
                                <p style={{ fontSize: 22, marginBottom: 12 }}>
                                    {index + 1}. {winner.country} - {winner.name} <br/>
                                    &emsp;NFT Registration Number:<b> {winner.number}</b>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '70%',
                        width: '100%',
                    }}
                >
                    {/* <SlotMachineNFT /> */}
                </div>
            </div>
        </PageWrapper>
    );
};

export default NFTDraw;