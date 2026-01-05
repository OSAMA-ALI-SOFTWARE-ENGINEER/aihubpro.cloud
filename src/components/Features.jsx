import { Zap, Shield, BarChart3, Globe, Cpu, Layers, CheckCircle2, MessageSquare } from 'lucide-react';
import aboutLeftImg from '../assets/images/About_left.png';

const Features = () => {
    return (
        <>
            {/* About Section - Black Background */}
            <section id="about" style={{ padding: '6rem 0', background: 'black' }}>
                <div className="container">
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center', 
                        gap: '4rem'
                    }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ 
                                display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', 
                                border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                                fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem' 
                            }}>
                                About Us
                            </div>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '700' }}>
                                About AIHubPro & <br/> <span style={{ color: '#94a3b8' }}>Our AI Tools</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                AIHubPro brings together powerful AI tools, structured learning resources, and real implementation examples in one platform. Whether you're experimenting, building, or scaling, we help you move from theory to execution.
                            </p>
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                                {[
                                    'Scalable & Flexible Platform', '24/7 Access to Resources',
                                    'Secure, Vetted AI Tools', 'Real-World Use Cases',
                                    'Seamless Learning Experience', 'Cost-Efficient Exploration'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem', fontWeight: '500' }}>
                                        <div style={{ 
                                            minWidth: '20px', height: '20px', borderRadius: '50%', background: '#8b5cf6', 
                                            display: 'flex', alignItems: 'center', justifyContent: 'center' 
                                        }}>
                                            <CheckCircle2 size={12} color="white" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                            <img 
                                src={aboutLeftImg} 
                                alt="About AIHubPro Dashboard" 
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '600px', 
                                    height: 'auto',
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' 
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features & Partnering Section */}
            <section id="features" style={{ padding: '6rem 0' }}>
                <div className="container">
                    
                    {/* Benefits Bento Grid */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                         <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            Features
                        </div>
                        <h2 style={{ fontSize: '2.5rem' }}>The Key Benefits of Using <br/> AIHubPro</h2>
                    </div>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gridTemplateRows: 'auto auto', 
                        gap: '1.5rem',
                        marginBottom: '8rem' 
                    }}>
                        
                        {/* Large Card Left */}
                        <div className="glass-card" style={{ gridRow: 'span 2', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Centralized Data</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>All your AI models and datasets in one secure location.</p>
                            <div style={{ 
                                 background: 'rgba(255,255,255,0.05)', borderRadius: '8px', height: '200px', width: '100%',
                                 border: '1px solid var(--border-glass)'
                            }}></div>
                        </div>

                        {/* Wide Card Top Right */}
                        <div className="glass-card" style={{ gridColumn: 'span 2', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                             <div>
                                 <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Full Automation</h3>
                                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Run complex pipelines without manual intervention.</p>
                             </div>
                             <div style={{ display: 'flex', gap: '1rem' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ 
                                        width: '40px', height: '40px', borderRadius: '50%', 
                                        background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.8rem', fontWeight: 'bold'
                                    }}>{i}</div>
                                ))}
                             </div>
                        </div>

                        {/* Small Card Bottom Mid */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                             <div style={{ margin: '0 auto 1rem', width: '50px', height: '50px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Cpu size={24} />
                             </div>
                             <h4 style={{ marginBottom: '0.5rem' }}>AI Powered</h4>
                        </div>

                        {/* Small Card Bottom Right */}
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                             <div style={{ margin: '0 auto 1rem', width: '50px', height: '50px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BarChart3 size={24} />
                             </div>
                             <h4 style={{ marginBottom: '0.5rem' }}>Analytics</h4>
                        </div>
                    </div>

                    {/* Partnering Grid */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>The Key Benefits of <br/> Partnering</h2>
                    </div>

                    <div className="grid-3">
                        {[
                            { icon: Globe, title: 'Global Reach', desc: 'Expand your AI solutions to a worldwide audience.' },
                            { icon: Shield, title: 'Secure Infrastructure', desc: 'Bank-grade security for all transactions.' },
                            { icon: Layers, title: 'Scalable Architecture', desc: 'Grow your resources as your needs increase.' },
                            { icon: Zap, title: 'Instant Deployment', desc: 'Go live with your models in seconds.' },
                            { icon: Cpu, title: 'Advanced Hardware', desc: 'Access top-tier GPUs and TPUs.' },
                            { icon: MessageSquare, title: '24/7 Support', desc: 'Expert assistance whenever you need it.' }
                        ].map((feature, i) => (
                            <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                                 <div style={{ 
                                     width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)',
                                     margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                     color: '#d8b4fe'
                                 }}>
                                     <feature.icon size={28} />
                                 </div>
                                 <h3 style={{ fontSize: '1.25rem', marginBottom: '0.8rem' }}>{feature.title}</h3>
                                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
