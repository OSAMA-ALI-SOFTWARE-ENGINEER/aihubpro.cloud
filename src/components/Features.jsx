import { Zap, Shield, BarChart3, Globe, Cpu, Layers, CheckCircle2, MessageSquare } from 'lucide-react';

const Features = () => {
    return (
        <section id="features" style={{ padding: '4rem 0' }}>
            <div className="container">
                
                {/* About + Feature Image Strip */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '8rem' }}>
                    <div>
                        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            About
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                            About AIHubPro & <br/> <span className="text-gradient">Our AI Tools</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                            We provide cutting-edge AI solutions tailored to your business needs, helping you automate workflows and unlock new insights.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {['Smart Automation', 'Real-time Analytics', 'Deep Learning Models', 'Cloud Native'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.95rem' }}>
                                    <CheckCircle2 size={18} color="var(--primary)" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="glass-card" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ 
                            background: 'linear-gradient(135deg, rgba(30,27,75,0.8), rgba(15,23,42,0.8))', 
                            borderRadius: '8px', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            minHeight: '300px', position: 'relative', overflow: 'hidden'
                        }}>
                             <div style={{
                                width: '120px', height: '120px', background: 'var(--primary)',
                                borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 0 50px rgba(139, 92, 246, 0.4)', zIndex: 2
                             }}>
                                <Zap size={48} color="white" />
                             </div>
                             {/* Decorative blurred circles behind */}
                             <div style={{ position: 'absolute', top: '20%', left: '20%', width: '100px', height: '100px', background: 'var(--accent)', filter: 'blur(60px)', opacity: 0.5 }}></div>
                        </div>
                    </div>
                </div>

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
    );
};

export default Features;
