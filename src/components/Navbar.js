import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const history = useHistory();

    return (
        <Box 
            sx={{
                backgroundColor: 'rgba(30, 30, 30, 0.9)',
                borderBottom: '0.5px solid white',
                height: '10vh',
                position: 'absolute',
                width: '100vw',
                top: 0
            }}
        >
            <Container maxWidth="xl" style={{ padding: '0 !important' }}>
                <Grid
                    container 
                    spacing={1}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '10vh',
                    }}
                >
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            paddingLeft: 20,
                            lineHeight: 1.2,
                            cursor: 'pointer',
                        }}
                    >
                        <Box className='navbar-item home-button' onClick={() => {history.push('/')}}>
                            DELOITTE <br/> ALL HANDS MEETING | 2022
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: '0 50px' }}>
                        <Box className='navbar-item pages-button' onClick={() => {history.push('/offering-draw')}}>
                            OFFERING DRAW
                        </Box>
                        <Box className='navbar-item pages-button' onClick={() => {history.push('/level-draw')}}>
                            LEVEL DRAW
                        </Box>
                        <Box className='navbar-item pages-button' onClick={() => {history.push('/nft-draw')}}>
                            NFT DRAW
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Typography className='navbar-item'>
                            AHM 2022
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Navbar;