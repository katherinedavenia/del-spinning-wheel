import DeloitteBackground from '../assets/deloitte-background.jpg';

const PageWrapper = ({ children }) => (
    <div style={{ backgroundColor: 'black' }}>
        <div 
            style={{ 
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'end',
                backgroundImage: `url(${DeloitteBackground})`, 
                backgroundPosition: '-50px 20px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '105vw',
                height: '100vh',
                width: '100vw',
            }}
        >
            <div
                style={{
                    width: '100vw',
                    height: '72vh',
                }}
            >
                {children}
            </div>
        </div>
    </div>
)

export default PageWrapper;