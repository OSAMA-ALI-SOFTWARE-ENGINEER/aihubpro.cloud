import { Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
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
            <div style={{
                background: 'rgba(255, 255, 255, 0.08)', // Slightly lighter glass for visibility
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50px',
                padding: '0.7rem 2rem',
                width: '100%',
                maxWidth: '900px', // Constrained width for the pill look
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none',
                transition: 'all 0.3s ease'
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
                    <div style={{
                        width: '32px', height: '32px', background: 'white',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'black'
                    }}>
                        <Zap size={20} fill="black" />
                    </div>
                    AIHubPro
                </div>

                {/* Center Links */}
                <div style={{ 
                    display: 'flex', gap: '2rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)',
                    display: window.innerWidth < 768 ? 'none' : 'flex' // Simple responsive hide
                }}>
                    <a href="#about" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">About us</a>
                    <a href="#services" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Services</a>
                    <a href="#why-us" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Why Us</a>
                    <a href="#faq" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">FAQ</a>
                </div>

                {/* Right Actions */}
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <a href="#" style={{ color: 'white', fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>
                        Explore Tools
                    </a>
                    <button style={{ 
                        background: 'linear-gradient(to bottom, #ffffff, #e2e8f0)',
                        color: 'black',
                        border: 'none',
                        padding: '0.6rem 1.5rem',
                        borderRadius: '30px',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(255,255,255,0.1)',
                        transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Get Started
                    </button>
                </div>
            </div>
            
            <style>{`
                .nav-link:hover {
                    color: white !important;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
