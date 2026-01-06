import { Shield, CheckCircle2 } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <div style={{ 
                        display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', 
                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                        fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem' 
                    }}>
                            Pricing
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', fontWeight: '700', marginBottom: '1.5rem' }}>
                        Revolutionize Your AI Journey <br/> <span style={{ color: '#94a3b8' }}>with AIHubPro</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Cutting-edge solutions AI designed to boost sales, streamline operations, and enhance customer experience.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    
                    {/* Card 1: Basic (Free) */}
                    <div style={{ 
                        background: '#0C0C0C', borderRadius: '30px', padding: '3rem 2.5rem',
                        border: '1px solid #333', position: 'relative', display: 'flex', flexDirection: 'column'
                    }}>
                        {/* Blue Shield Icon */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ 
                                width: '50px', height: '50px', background: '#3b82f6', borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                            }}>
                                <Shield fill="white" color="white" size={28} />
                            </div>
                        </div>
                        
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Basic</h3>
                        <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '2.5rem' }}>Best for personal use.</p>

                        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '2.5rem' }}>Free</div>

                        <button className="btn" style={{ 
                            width: '100%', padding: '1rem', borderRadius: '12px', 
                            textAlign:'center', placeItems:'center',
                            background: 'rgba(255,255,255,0.05)', border: '1px solid #333', color: 'white',
                            fontWeight: '600', marginBottom: '3rem', cursor: 'pointer'
                        }}>
                            Get Started
                        </button>
                        <div style={{width:'100%',background:'#1e1e1e', height:"1px" , marginBottom:'1rem'}}></div>

                        <div style={{ borderTop: '1px solid #333', paddingTop: '2rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>What you will get</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                                {[
                                    'Limited AI tools access',
                                    'Introductory tutorials',
                                    'Community updates'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                                        <CheckCircle2 size={18} color="white" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                        {/* Card 2: Enterprise */}
                        <div style={{ 
                        background: '#0C0C0C', borderRadius: '30px', padding: '3rem 2.5rem',
                        border: '1px solid #333', position: 'relative', display: 'flex', flexDirection: 'column'
                    }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ 
                                width: '50px', height: '50px', background: '#3b82f6', borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                            }}>
                                <Shield fill="white" color="white" size={28} />
                            </div>
                        </div>
                        
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Enterprise</h3>
                        <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '2.5rem' }}>For large teams & corporations.</p>

                        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '2.5rem', display: 'flex', alignItems: 'baseline' }}>
                            $45 <span style={{ fontSize: '1rem', fontWeight: '400', color: '#aaa', marginLeft: '0.5rem' }}>/ per month</span>
                        </div>

                        <button className="btn" style={{ 
                            width: '100%', padding: '1rem', borderRadius: '12px', 
                            background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)', border: 'none', color: 'black',
                            fontWeight: '600', marginBottom: '3rem', cursor: 'pointer'
                        }}>
                            Get Started
                        </button>
                         <div style={{width:'100%',background:'#1e1e1e', height:"1px" , marginBottom:'1rem'}}></div>

                        <div style={{ borderTop: '1px solid #333', paddingTop: '2rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>What you will get</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                                {[
                                    'Complete AI tools library',
                                    'Advanced tutorials',
                                    'Case studies access',
                                    'Priority updates'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                                        <CheckCircle2 size={18} color="white" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                        {/* Card 3: Business */}
                        <div style={{ 
                        background: '#0C0C0C', borderRadius: '30px', padding: '3rem 2.5rem',
                        border: '1px solid #333', position: 'relative', display: 'flex', flexDirection: 'column'
                    }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ 
                                width: '50px', height: '50px', background: '#3b82f6', borderRadius: '12px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
                            }}>
                                <Shield fill="white" color="white" size={28} />
                            </div>
                        </div>
                        
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Business</h3>
                        <p style={{ color: '#aaa', fontSize: '0.95rem', marginBottom: '2.5rem' }}>Best for business owners.</p>

                        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '2.5rem', display: 'flex', alignItems: 'baseline' }}>
                            $225 <span style={{ fontSize: '1rem', fontWeight: '400', color: '#aaa', marginLeft: '0.5rem' }}>/ per month</span>
                        </div>

                        <button className="btn" style={{ 
                            width: '100%', padding: '1rem', borderRadius: '12px', 
                            background: 'rgba(255,255,255,0.05)', border: '1px solid #333', color: 'white',
                            fontWeight: '600', marginBottom: '3rem', cursor: 'pointer'
                        }}>
                            Get Started
                        </button>
                         <div style={{width:'100%',background:'#1e1e1e', height:"1px" , marginBottom:'1rem'}}></div>

                        <div style={{ borderTop: '1px solid #333', paddingTop: '2rem' }}>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.5rem' }}>What you will get</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
                                {[
                                    'Team access',
                                    'Enterprise use cases',
                                    'AI adoption frameworks',
                                    'Dedicated support'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                                        <CheckCircle2 size={18} color="white" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
