import { Instagram, Facebook, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/Logo.png';

const AboveFooter = () => {
    return (
        <section style={{ background: 'black', padding: '0 0 6rem' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: '#333', marginBottom: '4rem' }}></div>

                <h2 style={{ 
                    textAlign: 'center',
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: 'clamp(3rem, 10vw, 130px)', // Responsive clamp for the requested 130px
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                    background: 'var(--text, linear-gradient(180deg, #FFF 30.1%, rgba(255, 255, 255, 0.20) 116.84%))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    margin: 0
                }}>
                    Innovate with AI.
                </h2>
            </div>

            {/* Footer Links & Info */}
            {/* Footer Links & Info */}
             <div style={{ borderTop: '1px solid #222', padding: '6rem 0 2rem', background: 'black', marginTop: '6rem' }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                        gap: '4rem', 
                        marginBottom: '4rem' 
                    }}>
                        
                        {/* Column 1: Brand & Socials */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                             <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold', fontSize: '1.8rem', color: 'white' }}>
                                <img src={logo} alt="AIHubPro" style={{ height: '40px', width: 'auto' }} />
                                AIHubPro
                            </div>
                            
                            <h3 style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1.2' }}>
                                Innovate Faster. <br/> Apply AI Smarter.
                            </h3>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                {[<Instagram size={24}/>, <Facebook size={24}/>, <Youtube size={24}/>, <Twitter size={24}/>].map((icon, i) => (
                                    <div key={i} style={{ 
                                        width: '40px', height: '40px', background: 'white', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                                        color: 'black'
                                    }}>
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Pages */}
                        <div style={{ paddingLeft: '2rem' }}>
                            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '2rem', color: 'white' }}>Pages</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                                {['Home', 'Tools', 'Tutorials', 'Case Studies', 'Pricing', 'FAQs', 'Contact'].map((item) => (
                                    <li key={item} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact Us */}
                        <div>
                            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '2rem', color: 'white' }}>Contact Us</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Phone size={20} color="white" /> +1 (000) 123-4567
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Mail size={20} color="white" /> hello@aihubpro.com
                                </li>
                                <li style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                                    <MapPin size={20} color="white" style={{ marginTop: '5px' }} /> 613 Orange Well, NJ USA
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div style={{ borderTop: '1px solid #333', paddingTop: '2rem', textAlign: 'center', color: '#9CA3AF', fontSize: '0.95rem' }}>
                        copyright 2025 @Cumulus All Right Reserved
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboveFooter;
