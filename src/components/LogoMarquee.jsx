import logo1 from '../assets/images/logos_slider/slide-logo-1.png';
import logo2 from '../assets/images/logos_slider/slide-logo-2.png';
import logo3 from '../assets/images/logos_slider/slide-logo-3.png';

const LogoMarquee = () => {
    const logos = [logo1, logo2, logo3, logo1]; // Using logo1 again as the 4th one per request

    // Duplicate logos to create a seamless loop
    // We need enough duplicates to fill the screen width + buffer
    const duplicateLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]; 

    return (
        <div style={{
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)', // Break out of centered parent to be full viewport width
            overflow: 'hidden',
            background: 'black', // Ensure solid background behind the slider if needed
            padding: '4rem 0', // Increase padding as per image look
            marginTop: '4rem',
            position: 'relative',
        }}>
            
            {/* Overlay Gradient */}
            <div style={{
                position: 'absolute',
                top: 0,
                bottom: '-0.242px', // Exact value requested
                left: 0,
                right: 0,
                background: 'linear-gradient(90deg, #000 0%, rgba(13, 13, 13, 0.00) 50%, #000 100%)',
                zIndex: 2,
                pointerEvents: 'none'
            }}></div>

            <div className="marquee-track" style={{
                display: 'flex',
                gap: '8rem', // Wider gap
                width: 'max-content',
                animation: 'scrollLeftToRight 40s linear infinite',
                alignItems: 'center'
            }}>
                {duplicateLogos.map((logo, index) => (
                    <div key={index} style={{ 
                        opacity: 0.6, 
                        transition: 'opacity 0.3s',
                        flexShrink: 0
                    }}
                    className="logo-item"
                    >
                        <img src={logo} alt={`brand-${index}`} style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'grayscale(100%) brightness(1.5)' }} />
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes scrollLeftToRight {
                    0% { transform: translateX(calc(-100% / 3)); } /* Start offset */
                    100% { transform: translateX(0); }
                }
                
                .marquee-track:hover {
                    animation-play-state: paused;
                }

                .logo-item:hover {
                    opacity: 1 !important;
                }
                
                .logo-item img {
                    transition: filter 0.3s;
                }
                .logo-item:hover img {
                   filter: grayscale(0%) brightness(1); 
                }
            `}</style>
        </div>
    );
};

export default LogoMarquee;
