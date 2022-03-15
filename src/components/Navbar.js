import React from 'react';
import { useHistory } from 'react-router-dom';
import BottomSlider from './BottomSlider';
import './style.css';

const Navbar = () => {
    const history = useHistory();

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '100vw',
                    height: '10vh',
                    backgroundColor: 'rgba(30, 30, 30, 0.9)',
                    position: 'absolute',
                    top: 0,
                    borderBottom: '0.5px solid white',
                }}
            >
                <div
                    className='col-3'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start',
                        paddingLeft: 20,
                        lineHeight: 1.2,
                        cursor: 'pointer',
                    }}
                >
                    <div className='navbar-item home-button' onClick={() => {history.push('/')}}>
                        DELOITTE <br/> ALL HANDS MEETING | 2022
                    </div>
                </div>
                <div
                    className='col-6'
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        padding: '0 50px',
                    }}
                >
                    <div className='navbar-item pages-button' onClick={() => {history.push('/offering-draw')}}>
                        OFFERING DRAW
                    </div>
                    <div className='navbar-item pages-button' onClick={() => {history.push('/level-draw')}}>
                        LEVEL DRAW
                    </div>
                    <div className='navbar-item pages-button' onClick={() => {history.push('/nft-draw')}}>
                        NFT DRAW
                    </div>
                </div>
                <div
                    className='col-3'
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end',
                        paddingRight: 20,
                    }}
                >
                    <div className='navbar-item'>
                        AHM 2022
                    </div>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100vw',
                }}
            >
                <BottomSlider />
            </div>
        </>
    );
};

export default Navbar;