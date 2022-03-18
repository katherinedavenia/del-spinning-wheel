import { Box, Container } from '@mui/material';
import DeloitteBackground from '../assets/deloitte-background.jpg';
import TextSlider from './TextSlider';

const PageWrapper = ({ children }) => (
    <Box style={{ backgroundColor: 'black', position: 'relative' }}>
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                width: '100vw',
            }}
        >
            <TextSlider />
        </Box>
        <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
            <Box 
                sx={{ 
                    display: 'flex',
                    backgroundImage: `url(${DeloitteBackground})`, 
                    backgroundPosition: '-50px 20px',
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
            <TextSlider />
        </Box>
    </Box>
);

export default PageWrapper;