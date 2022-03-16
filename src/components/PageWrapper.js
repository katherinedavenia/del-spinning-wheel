import { Box, Container } from '@mui/material';
import DeloitteBackground from '../assets/deloitte-background.jpg';
import BottomSlider from './BottomSlider';
import Navbar from './Navbar';

const PageWrapper = ({ children }) => (
    <Box style={{ backgroundColor: 'black', position: 'relative' }}>
        <Navbar />
        <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
            <Box 
                sx={{ 
                    display: 'flex',
                    backgroundImage: `url(${DeloitteBackground})`, 
                    backgroundPosition: '-50px 30px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '105vw',
                    height: '100vh',
                    width: '100vw',
                }}
            >
                <Box
                    sx={{
                        width: '100vw',
                        height: '100vh',
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Container>
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                width: '100vw',
            }}
        >
            <BottomSlider />
        </Box>
    </Box>
);

export default PageWrapper;