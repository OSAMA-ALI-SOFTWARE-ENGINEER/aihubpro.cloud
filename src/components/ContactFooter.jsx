import { ArrowRight, HelpCircle, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactFooter = () => {
    // FAQ Data
    const faqs = [
        { q: "How do I get started with AIHubPro?", a: "Simply sign up for a free account and you can start exploring our tools immediately." },
        { q: "What artificial intelligence models are available?", a: "We offer access to GPT-4, Llama 2, Stable Diffusion, and our proprietary enterprise models." },
        { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your subscription at any time from your account settings." },
        { q: "Is my data secure?", a: "Absolutely. We use enterprise-grade encryption and do not train our models on your private data." }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <footer id="contact" style={{ padding: '4rem 0 0', position: 'relative' }}>
            
            {/* FAQ Section */}
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '8rem' }}>
                <div className="glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                     <div style={{ 
                        width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.2)',
                        marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--primary)'
                     }}>
                        <HelpCircle size={32} />
                     </div>
                     <h3 style={{ fontSize: '2rem' }}>Your Questions <br /> About AIHubPro</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass-card" 
                            style={{ padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s' }}
                            onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                                {faq.q}
                                <span style={{ transform: `rotate(${openIndex === i ? 180 : 0}deg)`, transition: 'transform 0.3s' }}>▼</span>
                            </div>
                            {openIndex === i && (
                                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <div className="container" style={{ marginBottom: '6rem' }}>
                <div style={{ 
                    padding: '4rem', borderRadius: '24px', textAlign: 'center', overflow: 'hidden', position: 'relative',
                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 1), rgba(15, 23, 42, 1))', border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)'}}></div>
                    
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
                        Take the Next Step Toward <br/> AI-Driven Innovation Today
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
                        Unblock the full potential of your business with our state-of-the-art AI solutions.
                    </p>
                    <button className="btn btn-glow" style={{ position: 'relative', zIndex: 2, padding: '1rem 2.5rem' }}>
                         Get Started Now
                    </button>
                </div>
            </div>

            {/* Contact & Footer Links */}
            <div style={{ background: 'linear-gradient(to top, rgba(139, 92, 246, 0.1), transparent)', padding: '4rem 0 2rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Get in Touch with <br/> AIHubPro</h2>
                    </div>

                    <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto 6rem', padding: '3rem' }}>
                        <form style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <input type="text" placeholder="Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
                                <input type="email" placeholder="Email" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white' }} />
                            </div>
                            <textarea rows="4" placeholder="Your Message" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontFamily: 'inherit' }}></textarea>
                            <button className="btn btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>Send Message</button>
                        </form>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Innovate with AI.</h2>
                             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>
                                <div style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></div>
                                </div>
                                AIHubPro
                            </div>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                                Innovation through applied Machine Learning.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', color: 'white' }}>
                                <Twitter size={20} /> <Linkedin size={20} /> <Github size={20} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', textAlign: 'left' }}>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Product</h4>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>Features</li>
                                    <li>Pricing</li>
                                    <li>Enterprise</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
                                <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>Terms</li>
                                    <li>Privacy</li>
                                    <li>Security</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4rem' }}>
                        © 2026 AIHubPro. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
