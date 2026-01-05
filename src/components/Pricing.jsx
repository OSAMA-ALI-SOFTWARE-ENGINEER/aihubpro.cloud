import { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" style={{ padding: '4rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                    Revolutionize Your AI Journey <br/> with AIHubPro
                </h2>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
                    <span style={{ color: !isYearly ? 'white' : 'var(--text-secondary)' }}>Monthly</span>
                    <div 
                        onClick={() => setIsYearly(!isYearly)}
                        style={{ 
                            width: '50px', height: '26px', background: 'var(--primary)', borderRadius: '20px', 
                            position: 'relative', cursor: 'pointer', transition: 'all 0.3s'
                        }}
                    >
                        <div style={{ 
                            width: '20px', height: '20px', background: 'white', borderRadius: '50%',
                            position: 'absolute', top: '3px', left: isYearly ? '27px' : '3px', transition: 'all 0.3s'
                        }}></div>
                    </div>
                    <span style={{ color: isYearly ? 'white' : 'var(--text-secondary)' }}>Yearly</span>
                </div>

                <div className="grid-3">
                    {/* Free Plan */}
                    <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left', borderTop: '4px solid #94a3b8' }}>
                         <div style={{ marginBottom: '2rem' }}>
                             <div className="btn-secondary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem' }}>Basic</div>
                             <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Free</h3>
                             <p style={{ color: 'var(--text-secondary)' }}>Forever free for individuals.</p>
                         </div>
                         <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                             {['1 Project', 'Basic Models', 'Community Support'].map((item, i) => (
                                 <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                     <Check size={16} color="var(--primary)" /> {item}
                                 </li>
                             ))}
                         </ul>
                         <button className="btn" style={{ width: '100%', background: 'transparent', border: '1px solid var(--border-glass)', color: 'white' }}>Get Started</button>
                    </div>

                    {/* Pro Plan */}
                    <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left', borderTop: '4px solid var(--primary)', transform: 'scale(1.05)', position: 'relative' }}>
                         {/* Badge */}
                         <div style={{ 
                             position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', 
                             background: 'var(--primary)', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold'
                         }}>MOST POPULAR</div>
                         
                         <div style={{ marginBottom: '2rem' }}>
                             <div className="btn-secondary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem', borderColor: 'var(--primary)', color: 'var(--primary)' }}>Pro</div>
                             <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>$49<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></h3>
                             <p style={{ color: 'var(--text-secondary)' }}>For professional developers.</p>
                         </div>
                         <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                             {['Unlimited Projects', 'Advanced Models', 'Priority Support', 'API Access'].map((item, i) => (
                                 <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                     <Check size={16} color="var(--primary)" /> {item}
                                 </li>
                             ))}
                         </ul>
                         <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Choose Pro</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'left', borderTop: '4px solid #d946ef' }}>
                         <div style={{ marginBottom: '2rem' }}>
                             <div className="btn-secondary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', borderRadius: '4px', display: 'inline-block', marginBottom: '1rem' }}>Enterprise</div>
                             <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>$299<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></h3>
                             <p style={{ color: 'var(--text-secondary)' }}>For large scale organizations.</p>
                         </div>
                         <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                             {['Custom Infrastructure', 'Dedicated Support', 'SLA Guarantee', 'On-premise Option'].map((item, i) => (
                                 <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                     <Check size={16} color="var(--primary)" /> {item}
                                 </li>
                             ))}
                         </ul>
                         <button className="btn" style={{ width: '100%', background: 'transparent', border: '1px solid var(--border-glass)', color: 'white' }}>Contact Sales</button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Pricing;
