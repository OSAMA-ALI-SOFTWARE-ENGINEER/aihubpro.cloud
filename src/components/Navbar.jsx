import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoWhite from '../assets/Logo_White.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: '20px',
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                padding: '0 1rem'
            }}>
                <div className="navbar-container" style={{
                    boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
                    transition: 'all 0.3s ease'
                }}>
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', zIndex: 102, paddingLeft: '1rem' }}>
                         <img src={logoWhite} alt="AIHubPro" style={{ height: '32px', width: 'auto' }} />
                    </div>

                    {/* Center Links (Desktop) */}
                    <div className="desktop-menu" style={{ 
                        display: 'flex', gap: '2rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)'
                    }}>
                        <a href="#about" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">About us</a>
                        <a href="#services" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Services</a>
                        <a href="#why-us" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Why Us</a>
                        <a href="#faq" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">FAQ</a>
                    </div>

                    {/* Right Actions (Desktop) */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingRight: '0.5rem' }}>
                        <a href="#" style={{ color: 'white', fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>
                            Explore Tools
                        </a>
                        <a href="#contact" style={{ 
                            background: 'linear-gradient(to bottom, #ffffff, #e2e8f0)',
                            color: 'black',
                            border: 'none',
                            padding: '0.6rem 1.5rem',
                            borderRadius: '30px',
                            fontWeight: '600',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            boxShadow: '0 2px 10px rgba(255,255,255,0.1)',
                            transition: 'transform 0.2s',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer', color: 'white', paddingRight: '1rem' }} onClick={() => setIsMenuOpen(true)}>
                        <Menu size={28} />
                    </div>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div style={{ 
                    position: 'absolute', top: '25px', left: '25px', right: '25px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 110 
                }}>
                    {/* Logo Top Left in Menu */}
                    <img src={logoWhite} alt="AIHubPro" style={{ height: '32px', width: 'auto' }} />
                    
                    <div onClick={() => setIsMenuOpen(false)} style={{ cursor: 'pointer', color: 'white' }}>
                         <X size={32} />
                    </div>
                </div>

                <div style={{ 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', 
                    height: '100%', gap: '2.5rem', fontSize: '1.5rem', fontWeight: 'bold' 
                }}>
                    <a href="#about" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'white' }}>About us</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'white' }}>Services</a>
                    <a href="#why-us" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'white' }}>Why Us</a>
                    <a href="#faq" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'white' }}>FAQ</a>
                    <a href="#" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: '#aaa', fontSize: '1.2rem', marginTop: '1rem' }}>Explore Tools</a>
                    
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ 
                        background: 'linear-gradient(to bottom, #ffffff, #e2e8f0)',
                        color: 'black',
                        border: 'none',
                        padding: '1rem 3rem',
                        borderRadius: '50px',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        marginTop: '1rem',
                        textDecoration: 'none'
                    }}>
                        Get Started
                    </a>
                </div>
            </div>

            <style>{`
                .navbar-container {
                    display: flex;
                    width: 964px;
                    padding: 8px;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 20px;
                    border: 1px solid #747474;
                    background: rgba(255, 255, 255, 0.10);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                }

                .nav-link:hover {
                    color: white !important;
                }
                
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #000000;
                    z-index: 105;
                    transform: translateY(-100%);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    opacity: 0;
                }

                .mobile-menu-overlay.open {
                    transform: translateY(0);
                    opacity: 1;
                }

                @media (max-width: 1000px) {
                    .navbar-container {
                        width: 95%;
                        padding: 0.5rem 1rem;
                    }
                }

                @media (max-width: 900px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
