import { Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import ctaBg from '../assets/images/Annovation/CTA.png';

const ContactFooter = () => {
    return (
        <footer id="contact" style={{ background: 'black', position: 'relative' }}>
            
            {/* Contact Section */}
            <div style={{ 
                padding: '6rem 0 4rem',
                backgroundImage: `url(${ctaBg})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container" style={{ maxWidth: '1200px', padding: '0 2rem', gap: '2rem' }}>
                    
                    {/* Header */}
                    <div style={{ 
                        textAlign: 'center', 
                        marginBottom: '4rem', 
                        padding: '4rem 0', 
                    }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '2rem', paddingRight:'2rem' }}>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '700', lineHeight: '1.2' }}>
                                Get in Touch with <br/> <span style={{ color: '#aaa' }}>AIHubPro</span>
                            </h2>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="glass-card contact-card" style={{ 
                        maxWidth: '900px', margin: '-4rem auto 0',
                        background: '#0C0C0C', border: '1px solid #333', borderRadius: '24px', position: 'relative'
                    }}>
                        <form style={{ display: 'grid', gap: '2rem' }}>
                            {/* Row 1: Name / Email */}
                            <div className="form-row">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '1rem', color: 'white' }}>Name</label>
                                    <input type="text" placeholder="John Carter" style={{ 
                                        padding: '1rem', background: '#111', border: '1px solid #333', 
                                        borderRadius: '12px', color: 'white', outline: 'none', fontSize: '0.95rem' 
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '1rem', color: 'white' }}>Email</label>
                                    <input type="email" placeholder="example@domain.com" style={{ 
                                        padding: '1rem', background: '#111', border: '1px solid #333', 
                                        borderRadius: '12px', color: 'white', outline: 'none', fontSize: '0.95rem' 
                                    }} />
                                </div>
                            </div>

                             {/* Row 2: Phone / Subject */}
                             <div className="form-row">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '1rem', color: 'white' }}>Phone</label>
                                    <input type="text" placeholder="(123) 456 - 789" style={{ 
                                        padding: '1rem', background: '#111', border: '1px solid #333', 
                                        borderRadius: '12px', color: 'white', outline: 'none', fontSize: '0.95rem' 
                                    }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontWeight: '600', fontSize: '1rem', color: 'white' }}>Subject</label>
                                    <input type="text" placeholder="Lorem Corp" style={{ 
                                        padding: '1rem', background: '#111', border: '1px solid #333', 
                                        borderRadius: '12px', color: 'white', outline: 'none', fontSize: '0.95rem' 
                                    }} />
                                </div>
                            </div>

                            {/* Message */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ fontWeight: '600', fontSize: '1rem', color: 'white' }}>Your Message</label>
                                <textarea rows="6" placeholder="Please type your message here..." style={{ 
                                    padding: '1rem', background: '#111', border: '1px solid #333', 
                                    borderRadius: '12px', color: 'white', outline: 'none', fontFamily: 'inherit', fontSize: '0.95rem', resize: 'vertical' 
                                }}></textarea>
                            </div>

                            {/* Bottom: Button + Socials */}
                            <div className="form-footer">
                                <button className="btn" style={{ 
                                    background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)', color: 'black', 
                                    padding: '0.8rem 2rem', fontWeight: '600', borderRadius: '50px', border: 'none', cursor: 'pointer' 
                                }}>
                                    Send Message
                                </button>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                                    {[<Twitter size={20}/>, <Linkedin size={20}/>, <Github size={20}/>, <Instagram size={20}/>].map((icon, i) => (
                                        <div key={i} style={{ 
                                            width: '40px', height: '40px', background: '#222', borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                                            color: 'white', border: '1px solid #333'
                                        }}>
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </div>

            <style>{`
                .contact-card {
                    padding: 3rem;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                .form-footer {
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    flex-wrap: wrap; 
                    gap: 2rem; 
                    margin-top: 1rem; 
                    padding-top: 2rem; 
                    border-top: 1px solid #222;
                }

                @media (max-width: 768px) {
                    .contact-card {
                        padding: 1.5rem;
                        margin-top: 0 !important; /* Reset negative margin */
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                    .form-footer {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 1.5rem;
                        text-align: center;
                    }
                    .form-footer button {
                        width: 100%;
                    }
                    .form-footer > div {
                        justify-content: center;
                    }
                    /* Ensure inputs don't overflow */
                    input, textarea {
                        width: 100%;
                        box-sizing: border-box; 
                    }
                }
            `}</style>
                </div>
            </div>

        </footer>
    );
};

export default ContactFooter;
