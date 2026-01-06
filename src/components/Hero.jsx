import { Star, Shield, CheckCircle2 } from 'lucide-react';
import heroBg from '../assets/images/Hero.png';
import heroCardImg1 from '../assets/images/Hero image.png';
import heroCardImg2 from '../assets/images/Hero image 2.png';
import LogoMarquee from './LogoMarquee';

const Hero = () => {
    return (
        <section style={{ 
            paddingTop: '160px', 
            paddingBottom: '80px', 
            position: 'relative', 
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'black'
        }}>
            {/* Background Image Placeholder */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: `url(${heroBg}) no-repeat center top`,
                backgroundSize: 'cover',
                zIndex: 0,
            }}></div>

            {/* Light Rays / Spotlights */}
            <div style={{
                position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
                width: '120%', height: '800px',
                background: 'conic-gradient(from 180deg at 50% 0%, transparent 0deg, rgba(139, 92, 246, 0.1) 20deg, transparent 40deg, rgba(139, 92, 246, 0.1) 60deg, transparent 80deg)',
                filter: 'blur(50px)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}>
                
                {/* Badge */}
                <div style={{ 
                    display: 'inline-block', 
                    background: 'rgba(255,255,255,0.1)', 
                    padding: '0.4rem 1.2rem', 
                    borderRadius: '50px', 
                    border: '1px solid rgba(255,255,255,0.15)',
                    marginBottom: '2rem', 
                    fontSize: '0.9rem',
                    color: '#e2e8f0',
                    backdropFilter: 'blur(4px)'
                }}>
                    AI Knowledge. Practical Impact.
                </div>

                <h1 style={{ 
                    fontSize: '5rem', fontWeight: '700', lineHeight: '1.1', maxWidth: '1000px',
                    marginBottom: '1.5rem', letterSpacing: '-0.03em',
                    textShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}>
                    Empower Your Workflow <br />
                    <span style={{ color: '#94a3b8' }}>with AIHubPro</span>
                </h1>

                <p style={{ 
                    fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '700px', 
                    marginBottom: '2.5rem', lineHeight: '1.6'
                }}>
                    AIHubPro is a centralized platform for AI tools, tutorials, and real-world case studies helping professionals turn artificial intelligence into measurable outcomes.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '5rem' }}>
                    <div style={{ display: 'flex', color: '#fbbf24' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" strokeWidth={0} />)}
                    </div>
                    <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                        Trusted by 10,000+ AI builders, founders, and teams worldwide
                    </span>
                </div>

                {/* 4 Cards Row */}
                <div className="hero-grid">
                    
                    {/* Card 1: Testimonial (Rotated 10deg) */}
                    <div className="glass-card animated-card card-1" style={{ 
                        '--rotate-hover': '35deg', 
                        padding: '2rem', textAlign: 'left', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                        <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '1rem' }}>
                            "Thanks to AIHubPro, we've reduced our business costs while scaling performance."
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Phillip Wades</div>
                            </div>
                        </div>
                    </div>

                     {/* Card 2: Image (Rotated -5deg) */}
                     <div className="glass-card animated-card card-2" style={{ 
                        padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px',
                        background: 'linear-gradient(145deg, #0f0f0f, #050505)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <img src={heroCardImg1} alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                    </div>

                    {/* Card 3: Testimonial (Rotated 5deg) */}
                    <div className="glass-card animated-card card-3" style={{ 
                        '--rotate-hover': '35deg',
                        padding: '2rem', textAlign: 'left', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                        <p style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '1rem' }}>
                            "The seamless migration to AIHubPro was handled expertly by the team. I really admire the AI tools!"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                             <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Daniella Galgeo</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Image (Rotated -5deg) */}
                    <div className="glass-card animated-card card-4" style={{ 
                        padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px',
                        background: 'linear-gradient(145deg, #0f0f0f, #050505)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        position: 'relative', overflow: 'hidden'
                    }}>
                         <img src={heroCardImg2} alt="Feature" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                    </div>

                </div>

            </div>

            <LogoMarquee />

             <style>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    width: 100%;
                    perspective: 1000px;
                    margin: 3rem 0;
                }
                
                /* Desktop Transforms */
                .card-1 { transform: rotate(5deg) translateY(20px); }
                .card-2 { transform: rotate(-5deg); }
                .card-3 { transform: rotate(5deg); }
                .card-4 { transform: rotate(-5deg) translateY(20px); }

                .animated-card {
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.27), border-color 0.3s, box-shadow 0.3s;
                }
                .animated-card:hover {
                    border-color: rgba(255,255,255,0.4) !important;
                    box-shadow: 0 20px 50px -10px rgba(100, 100, 255, 0.15);
                    z-index: 10;
                }

                @media (max-width: 1200px) {
                    .hero-grid {
                        grid-template-columns: repeat(2, 1fr);
                        max-width: 800px;
                    }
                    /* Reset transforms on tablet/mobile for cleaner layout */
                    .card-1, .card-2, .card-3, .card-4 {
                        transform: none !important;
                    }
                }

                @media (max-width: 768px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        padding: 0 1rem;
                    }
                    .animated-card {
                         min-height: auto !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
