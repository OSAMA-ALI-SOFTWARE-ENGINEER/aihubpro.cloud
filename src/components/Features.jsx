import { useState } from 'react';
import { Zap, Shield, BarChart3, Globe, Cpu, Layers, CheckCircle2, MessageSquare, BookOpen, FileBadge, Star, Plus, Minus, HelpCircle } from 'lucide-react';
import aboutLeftImg from '../assets/images/About_left.png';
import automateGridImg from '../assets/icons/Automate-grid-3.png';
import enhanceGridImg from '../assets/icons/enhance-grid-4.png';

// Partnering Section Images
import aiToolsImg from '../assets/images/why/Ai_Tools.png';
import aiAdoptionImg from '../assets/images/why/Ai_Adoption.png';
import aiTutorialsImg from '../assets/images/why/Ai_Tutorials.png';
import aiUseCasesImg from '../assets/images/why/Ai_UseCases.png';
import aiResearchImg from '../assets/images/why/Ai_Research.png';
import aiEthicsImg from '../assets/images/why/Ai_Ethics.png';
import commonQuestionsImg from '../assets/images/Common_Qestions_Left.png';
import innovationBgImg from '../assets/images/Annovation/Anovation_Bg.png';

const Features = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            q: 'What is AIHubPro used for?',
            a: '1. AIHubPro is a centralized platform designed to help users discover, explore, and use a curated collection of AI tools across multiple categories such as productivity, content creation, design, development, and automation. It simplifies access to AI solutions by bringing them together in one easy-to-use hub.'
        },
        {
            q: 'Who is AIHubPro best suited for?',
            a: '2. AIHubPro is best suited for entrepreneurs, developers, marketers, content creators, startups, and businesses looking to leverage AI tools to improve efficiency, creativity, and decision-making without spending time searching across multiple platforms.'
        },
        {
            q: 'Do I need prior AI experience?',
            a: '3. No prior AI experience is required to use AIHubPro. The platform is designed to be user-friendly and accessible, allowing both beginners and experienced professionals to find and use AI tools effectively.'
        },
        {
            q: 'Are their any limits on the tool usage?',
            a: '4. Tool usage limits depend on the individual tools integrated into the platform. AIHubPro itself does not impose restrictive limits, but each third-party AI tool may have its own usage policies or pricing plans.'
        },
        {
            q: 'How often is content updated?',
            a: '5. Content and tool listings on AIHubPro are updated regularly to ensure users have access to the latest, most relevant, and high-performing AI tools as the ecosystem evolves.'
        },
        {
            q: 'Are the tools verified and secure?',
            a: '6. Yes, all tools listed on AIHubPro are carefully reviewed and verified before being featured. Security, reliability, and credibility are prioritized to ensure users can explore AI solutions with confidence.'
        }
    ];

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
            <section id="services" style={{ padding: '6rem 0' }}>
                <div className="container">
                    
                    {/* Benefits Bento Grid Section */}
                <div style={{ position: 'relative', marginBottom: '8rem' }}>
                    
                    <div style={{
                        position: 'absolute', top: '20%', left: '-10%', width: '40%', height: '60%',
                        borderRadius: '389.294px',
                        background: 'rgba(96, 100, 247, 0.40)',
                        filter: 'blur(100px)', 
                        zIndex: -1, pointerEvents: 'none'
                    }}></div>

                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                         <div style={{ 
                            display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', 
                            border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                            fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem' 
                        }}>
                            Why Choose Us
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.2' }}>
                            The Key Benefits of Using <br/> <span style={{ color: '#94a3b8' }}>AIHubPro</span>
                        </h2>
                    </div>


                        
                    {/* Bento Grid Layout */}
                    <div className="bento-container">
                        
                        {/* LEFT COLUMN ( ~33% ) */}
                        <div className="glass-card" style={{ 
                            flex: '1', minWidth: '300px', padding: '2.5rem', 
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                            position: 'relative', overflow: 'hidden'
                        }}>
                            {/* Inner Bottom Shadow */}
                            <div style={{
                                position: 'absolute',
                                left: '74px',
                                bottom: '-123px',
                                width: '300px', height: '300px',
                                borderRadius: '283px',
                                background: '#344BFD',
                                filter: 'blur(100px)',
                                pointerEvents: 'none',
                                zIndex: 0
                            }}></div>
                           <div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: '600' }}>Centralized AI Resources</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem', lineHeight: '1.6' }}>
                                    Access tools, guides, and insights from one unified hub.
                                </p>
                           </div>

                           {/* Dummy List UI */}
                           <div style={{ 
                               background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)', 
                               borderRadius: '12px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' 
                           }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                                    <div style={{ width: '20px', height: '20px', background: '#d946ef', borderRadius: '4px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                        <CheckCircle2 size={12} color="white"/>
                                    </div>
                                    <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>Cost Efficiency</span>
                                </div>
                                {[1,2,3,4,5,6].map(i => (
                                    <div key={i} style={{ 
                                        height: '8px', 
                                        width: i % 2 === 0 ? '80%' : '60%',
                                        background: 'rgba(255,255,255,0.1)', 
                                        borderRadius: '4px', marginBottom: '12px' 
                                    }}></div>
                                ))}
                           </div>
                        </div>

                        {/* RIGHT COLUMN ( ~66% ) */}
                        <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            
                            {/* ROW 1 */}
                            <div className="bento-row">
                                
                                {/* Card 1 (66%) - Reduced Learning Curve */}
                                <div className="glass-card" style={{ flex: '2', padding: '2.5rem', background: 'rgba(255,255,255,0.03)' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', fontWeight: '600' }}>Reduced Learning Curve</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                                        Step-by-step tutorials and examples designed for practical understanding.
                                    </p>
                                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                        {/* Icon 1 */}
                                        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="100" height="100" rx="50" fill="url(#paint0_linear_827_1795)"/>
                                            <path d="M31.6868 59.808L42.6716 43.6775L50.5852 49.0693L63.9122 29.5034" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M66.5594 34.2521C66.3192 31.5041 66.0379 30.0216 65.2771 27.4952C62.6482 27.716 61.1689 27.9967 58.5201 28.7774M45.8622 70.0321L43.0774 55.3571M59.3856 67.4658L56.6007 52.7908M33.0537 67.7097L33.9244 72.2975L72.7809 64.9237L68.879 44.3625" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_827_1795" x1="16" y1="16.5708" x2="102.204" y2="90.9232" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#344BFD"/>
                                                <stop offset="0.67719" stopColor="#7886F7"/>
                                                <stop offset="0.94472" stopColor="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Icon 2 */}
                                        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="100" height="100" rx="50" fill="url(#paint0_linear_827_1799)"/>
                                            <path d="M48.6827 56.5718L46.8174 66.3963" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                            <path d="M41.4107 30.3249C38.2062 29.061 36.604 28.429 34.9548 29.374C33.3099 30.3178 32.9357 32.2886 32.1874 36.2302L29.4981 50.3951C28.8139 53.9987 28.4718 55.8006 29.1678 57.0992C29.8622 58.3954 31.7901 59.1564 35.6499 60.679C39.0871 62.036 41.6662 63.6453 43.4755 65.1166C45.2567 66.5642 46.1456 67.2867 46.6309 67.3789C47.1162 67.471 48.21 67.1249 50.3939 66.4301C52.6182 65.7266 55.608 65.1726 59.3053 65.1702C63.4506 65.1673 65.5252 65.1663 66.6464 64.2147C67.7699 63.2615 68.1119 61.4597 68.7961 57.8561L71.4854 43.6911C72.2338 39.7495 72.6079 37.7787 71.4234 36.2978C70.2352 34.8141 68.5129 34.8149 65.0681 34.8164" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M49.2493 46.5947C49.3138 46.2549 49.2407 45.9033 49.046 45.6174C48.8513 45.3314 48.551 45.1345 48.2111 45.07C47.8712 45.0055 47.5197 45.0786 47.2337 45.2733C46.9478 45.468 46.7509 45.7683 46.6863 46.1082L49.2493 46.5947ZM46.0376 49.5254C45.973 49.8652 46.0462 50.2168 46.2409 50.5028C46.4356 50.7887 46.7359 50.9856 47.0757 51.0501C47.4156 51.1147 47.7672 51.0415 48.0531 50.8468C48.3391 50.6521 48.536 50.3518 48.6005 50.012L46.0376 49.5254ZM54.3751 47.5679C54.4396 47.228 54.3665 46.8765 54.1718 46.5905C53.9771 46.3046 53.6768 46.1077 53.3369 46.0432C52.9971 45.9786 52.6455 46.0518 52.3595 46.2465C52.0736 46.4412 51.8767 46.7415 51.8122 47.0813L54.3751 47.5679ZM51.1634 50.4985C51.0989 50.8384 51.172 51.19 51.3667 51.4759C51.5614 51.7619 51.8617 51.9588 52.2016 52.0233C52.5414 52.0878 52.893 52.0147 53.1789 51.82C53.4649 51.6253 53.6618 51.325 53.7263 50.9851L51.1634 50.4985ZM51.8444 32.9259C51.9089 32.586 51.8358 32.2344 51.6411 31.9485C51.4464 31.6625 51.1461 31.4656 50.8062 31.4011C50.4663 31.3366 50.1148 31.4097 49.8288 31.6044C49.5429 31.7991 49.346 32.0994 49.2815 32.4393L51.8444 32.9259ZM48.6327 35.8565C48.5682 36.1964 48.6413 36.5479 48.836 36.8339C49.0307 37.1198 49.331 37.3167 49.6708 37.3812C50.0107 37.4458 50.3623 37.3726 50.6482 37.178C50.9342 36.9833 51.1311 36.6829 51.1956 36.3431L48.6327 35.8565ZM56.9702 33.899C57.0347 33.5592 56.9616 33.2076 56.7669 32.9216C56.5722 32.6357 56.2719 32.4388 55.932 32.3743C55.5922 32.3098 55.2406 32.3829 54.9546 32.5776C54.6687 32.7723 54.4718 33.0726 54.4073 33.4125L56.9702 33.899ZM53.7585 36.8297C53.694 37.1695 53.7671 37.5211 53.9618 37.8071C54.1565 38.093 54.4568 38.2899 54.7967 38.3544C55.1365 38.4189 55.4881 38.3458 55.7741 38.1511C56.06 37.9564 56.2569 37.6561 56.3214 37.3163L53.7585 36.8297ZM46.6213 39.4576C46.9612 39.5221 47.3128 39.449 47.5987 39.2543C47.8847 39.0596 48.0816 38.7593 48.1461 38.4194C48.2106 38.0796 48.1375 37.728 47.9428 37.442C47.7481 37.1561 47.4478 36.9592 47.1079 36.8947L46.6213 39.4576ZM43.6907 36.2459C43.3508 36.1814 42.9993 36.2545 42.7133 36.4492C42.4274 36.6439 42.2305 36.9442 42.166 37.2841C42.1014 37.6239 42.1746 37.9755 42.3693 38.2614C42.564 38.5474 42.8643 38.7443 43.2041 38.8088L43.6907 36.2459ZM45.6482 44.5834C45.988 44.6479 46.3396 44.5748 46.6256 44.3801C46.9115 44.1854 47.1084 43.8851 47.1729 43.5452C47.2375 43.2054 47.1643 42.8538 46.9696 42.5679C46.7749 42.2819 46.4746 42.085 46.1348 42.0205L45.6482 44.5834ZM42.7175 41.3717C42.3777 41.3072 42.0261 41.3803 41.7402 41.575C41.4542 41.7697 41.2573 42.07 41.1928 42.4099C41.1283 42.7497 41.2014 43.1013 41.3961 43.3873C41.5908 43.6732 41.8911 43.8701 42.231 43.9346L42.7175 41.3717ZM60.2902 42.0527C60.6301 42.1172 60.9817 42.0441 61.2676 41.8494C61.5536 41.6547 61.7504 41.3544 61.815 41.0145C61.8795 40.6747 61.8064 40.3231 61.6117 40.0371C61.417 39.7512 61.1167 39.5543 60.7768 39.4898L60.2902 42.0527ZM57.3596 38.841C57.0197 38.7765 56.6681 38.8496 56.3822 39.0443C56.0963 39.239 55.8994 39.5393 55.8348 39.8792C55.7703 40.219 55.8434 40.5706 56.0381 40.8566C56.2328 41.1425 56.5331 41.3394 56.873 41.4039L57.3596 38.841ZM59.3171 47.1785C59.6569 47.243 60.0085 47.1699 60.2944 46.9752C60.5804 46.7805 60.7773 46.4802 60.8418 46.1404C60.9063 45.8005 60.8332 45.4489 60.6385 45.163C60.4438 44.877 60.1435 44.6801 59.8036 44.6156L59.3171 47.1785ZM56.3864 43.9668C56.0466 43.9023 55.695 43.9754 55.409 44.1701C55.1231 44.3648 54.9262 44.6651 54.8617 45.005C54.7971 45.3449 54.8703 45.6964 55.065 45.9824C55.2597 46.2683 55.56 46.4652 55.8998 46.5297L56.3864 43.9668ZM50.5251 37.5434L53.9424 38.1922L54.429 35.6293L51.0117 34.9805L50.5251 37.5434ZM55.6726 40.7335L55.0239 44.1507L57.5868 44.6373L58.2356 41.2201L55.6726 40.7335ZM52.4826 45.881L49.0654 45.2322L48.5788 47.7951L51.996 48.4439L52.4826 45.881ZM47.3351 42.6909L47.9839 39.2737L45.421 38.7871L44.7722 42.2044L47.3351 42.6909ZM49.0654 45.2322C48.2231 45.0723 47.7214 44.9735 47.3716 44.8575C47.2684 44.8267 47.1696 44.7824 47.078 44.7257L44.9231 46.1929C45.3505 46.8228 45.9549 47.1358 46.5476 47.3333C47.1036 47.5186 47.8099 47.6491 48.5788 47.7951L49.0654 45.2322ZM44.7722 42.2044C44.6262 42.9732 44.4888 43.6782 44.4574 44.2635C44.4239 44.8873 44.4936 45.5644 44.9231 46.1929L47.078 44.7257L47.0773 44.7202L47.072 44.7015C47.0568 44.6031 47.0538 44.5033 47.063 44.4042C47.0832 44.0363 47.1752 43.5333 47.3351 42.6909L44.7722 42.2044ZM55.0239 44.1507C54.8639 44.993 54.7652 45.4947 54.6492 45.8444C54.6184 45.9477 54.5741 46.0464 54.5173 46.138L55.9846 48.293C56.6145 47.8656 56.9275 47.2612 57.125 46.6685C57.3102 46.1125 57.4408 45.4061 57.5868 44.6373L55.0239 44.1507ZM51.996 48.4439C52.7649 48.5899 53.4699 48.7272 54.0552 48.7587C54.679 48.7922 55.3561 48.7225 55.9846 48.293L54.5173 46.138L54.5119 46.1388L54.4932 46.1441C54.3948 46.1592 54.2949 46.1623 54.1958 46.1531C53.8279 46.1328 53.325 46.0409 52.4826 45.881L51.996 48.4439ZM53.9424 38.1922C54.7847 38.3521 55.2864 38.4509 55.6361 38.5669C55.7376 38.5972 55.8347 38.6406 55.9249 38.6961L55.9297 38.6988L58.0847 37.2315C57.6573 36.6016 57.0529 36.2886 56.4602 36.0911C55.9041 35.9058 55.1978 35.7753 54.429 35.6293L53.9424 38.1922ZM58.2356 41.2201C58.3815 40.4512 58.5189 39.7462 58.5504 39.1609C58.5838 38.5371 58.5141 37.86 58.0847 37.2315L55.9297 38.6988L55.9305 38.7042L55.9358 38.7229C55.944 38.7634 55.9541 38.8503 55.9448 39.0203C55.9245 39.3881 55.8326 39.8911 55.6726 40.7335L58.2356 41.2201ZM51.0117 34.9805C50.2429 34.8346 49.5379 34.6972 48.9526 34.6657C48.3287 34.6322 47.6517 34.702 47.0232 35.1314L48.4904 37.2864L48.4959 37.2856L48.5146 37.2803C48.613 37.2652 48.7128 37.2621 48.8119 37.2713C49.1798 37.2916 49.6828 37.3835 50.5251 37.5434L51.0117 34.9805ZM47.9839 39.2737C48.1438 38.4314 48.2426 37.9297 48.3586 37.58C48.3893 37.4767 48.4337 37.378 48.4904 37.2864L47.0232 35.1314C46.3933 35.5588 46.0802 36.1632 45.8827 36.7559C45.6975 37.312 45.567 38.0183 45.421 38.7871L47.9839 39.2737ZM46.6863 46.1082L46.0376 49.5254L48.6005 50.012L49.2493 46.5947L46.6863 46.1082ZM51.8122 47.0813L51.1634 50.4985L53.7263 50.9851L54.3751 47.5679L51.8122 47.0813ZM49.2815 32.4393L48.6327 35.8565L51.1956 36.3431L51.8444 32.9259L49.2815 32.4393ZM54.4073 33.4125L53.7585 36.8297L56.3214 37.3163L56.9702 33.899L54.4073 33.4125ZM47.1079 36.8947L43.6907 36.2459L43.2041 38.8088L46.6213 39.4576L47.1079 36.8947ZM46.1348 42.0205L42.7175 41.3717L42.231 43.9346L45.6482 44.5834L46.1348 42.0205ZM60.7768 39.4898L57.3596 38.841L56.873 41.4039L60.2902 42.0527L60.7768 39.4898ZM59.8036 44.6156L56.3864 43.9668L55.8998 46.5297L59.3171 47.1785L59.8036 44.6156Z" fill="white"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_827_1799" x1="-6" y1="-10.4292" x2="100" y2="106.071" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#771CE0"/>
                                                <stop offset="0.646324" stopColor="#7B2FD9"/>
                                                <stop offset="1" stopColor="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Icon 3 */}
                                        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="100" height="100" rx="50" fill="url(#paint0_linear_827_1804)"/>
                                            <path d="M31.5114 57.4509L41.1886 55.6145M29.1685 45.105L63.9979 38.4954M45.886 58.6109L48.0326 69.9225M55.807 46.5257C53.8414 36.1677 48.6491 28.4544 44.2099 29.2969C39.7708 30.1393 37.7662 39.2183 39.7318 49.5763C40.1367 51.7096 40.6787 53.7313 41.3227 55.589" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M66.8468 47.345C66.8112 46.3997 66.703 45.4488 66.5221 44.4922C64.5564 34.1342 54.5668 27.3313 44.2089 29.297C33.8509 31.2626 27.048 41.2522 29.0137 51.6102C30.4033 58.9328 35.803 64.4782 42.5075 66.4049" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M47.0883 59.7972C45.7202 59.4681 45.4179 57.8749 46.5703 57.0675C47.8735 56.1586 49.1935 55.2742 50.5299 54.4149C53.2258 52.6744 55.1891 51.512 56.4019 50.8233C57.342 50.2876 58.4338 50.0804 59.5048 50.2344C60.8847 50.4311 63.1374 50.7934 66.2834 51.4253C67.8419 51.7357 69.3945 52.0749 70.9405 52.4428C72.3086 52.7718 72.6109 54.365 71.4585 55.1724C70.155 56.0814 68.8346 56.9658 67.4979 57.8252C64.803 59.5656 62.8388 60.7281 61.6269 61.4166C60.6865 61.9526 59.5944 62.1599 58.523 62.0057C57.1441 61.8088 54.8905 61.4467 51.7444 60.8148C50.1858 60.5048 48.6332 60.1656 47.0874 59.7974" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M51.6433 60.7942L52.1926 63.6889C52.4752 65.178 52.7358 66.2185 52.9467 66.9304C53.2242 67.8706 53.9212 68.5845 54.8746 68.8116C56.165 69.1205 58.3423 69.3621 61.4161 68.7787C64.4899 68.1954 66.4272 67.1721 67.5149 66.4129C68.3179 65.8525 68.7058 64.9327 68.6196 63.9562C68.555 63.2165 68.4163 62.1528 68.1337 60.6638L67.5844 57.769" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_827_1804" x1="16" y1="16.5708" x2="102.204" y2="90.9232" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#344BFD"/>
                                                <stop offset="0.67719" stopColor="#7886F7"/>
                                                <stop offset="0.94472" stopColor="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Icon 4 */}
                                        <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="100" height="100" rx="50" fill="url(#paint0_linear_827_1810)"/>
                                            <path d="M44.8155 70.9795C36.1548 69.3352 31.8255 68.5133 29.7357 64.8359C27.6452 61.1629 28.6128 56.0664 30.5472 45.8776C32.4816 35.6888 33.4488 30.5944 36.7409 27.9388C40.033 25.2833 44.3618 26.1074 53.0225 27.7517C61.6832 29.396 66.0125 30.2179 68.1026 33.8931C69.7841 36.8547 69.4868 40.7327 68.2972 47.4464M42.9955 39.2838L58.1253 42.1562M40.9438 50.0907L47.4279 51.3218" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M63.9424 65.8887C65.3604 65.2196 66.5302 64.1187 67.2841 62.7438C68.038 61.369 68.3373 59.7907 68.1391 58.2353C67.9409 56.6799 67.2554 55.2272 66.1808 54.0853C65.1063 52.9435 63.6978 52.1711 62.1573 51.8789L61.6148 51.7759C60.0744 51.4836 58.4811 51.6864 57.0632 52.3553C55.6452 53.0241 54.4753 54.1246 53.7211 55.4991C52.9669 56.8735 52.6672 58.4515 52.8649 60.0068C53.0625 61.5621 53.7474 63.0149 54.8214 64.157M54.8214 64.157C55.8943 65.3014 57.3034 66.0748 58.8449 66.3653L59.3852 66.4679C60.9259 66.7625 62.5204 66.5594 63.9381 65.8879L64.4452 70.0933C64.6378 71.6974 64.7362 72.4998 64.5798 72.9583C64.2573 73.9137 63.3197 74.4881 62.3744 74.3131C61.9205 74.2269 61.3091 73.7436 60.085 72.7722C59.5597 72.3545 59.2988 72.1482 59.0177 72.0008C58.4459 71.7043 57.7997 71.5816 57.1589 71.6479C56.8434 71.6821 56.5229 71.778 55.8832 71.9745C54.3883 72.4297 53.6419 72.6574 53.1884 72.5691C52.2447 72.3855 51.5829 71.5074 51.633 70.5003C51.6577 70.0168 52.039 69.3054 52.8083 67.884L54.8214 64.157Z" stroke="white" strokeWidth="3"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_827_1810" x1="-6" y1="-10.4292" x2="100" y2="106.071" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#771CE0"/>
                                                <stop offset="0.646324" stopColor="#7B2FD9"/>
                                                <stop offset="1" stopColor="white"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>

                                {/* Card 2 (33%) - Business Ready */}
                                <div className="glass-card" style={{ flex: '1', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(255,255,255,0.03)' }}>
                                     <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '600', lineHeight:'1.3' }}>Business-Ready <br/> Use Cases</h3>
                                     
                                     <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {/* User Item 1 */}
                                        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '0.8rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                            <img src="https://i.pravatar.cc/100?img=11" alt="User" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>Harry P</div>
                                                <div style={{ display: 'flex', gap: '2px' }}>{[1,2,3,4,5].map(s=><Star key={s} size={8} fill="#fbbf24" color="#fbbf24"/>)}</div>
                                            </div>
                                        </div>
                                         {/* User Item 2 */}
                                         <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '0.8rem', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                            <img src="https://i.pravatar.cc/100?img=12" alt="User" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>Jimmy L</div>
                                                <div style={{ display: 'flex', gap: '2px' }}>{[1,2,3,4,5].map(s=><Star key={s} size={8} fill="#fbbf24" color="#fbbf24"/>)}</div>
                                            </div>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            
                            {/* ROW 2 */}
                            <div className="bento-row">
                                
                                {/* Card 3 (33%) - Automated Updates */}
                                <div className="glass-card" style={{ 
                                    flex: '1', padding: '2rem', background: 'rgba(255,255,255,0.03)',
                                    position: 'relative', overflow: 'hidden', minHeight: '320px'
                                }}>
                                     <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: '600', position: 'relative', zIndex: 1 }}>Automated <br/> Updates to Tools</h3>
                                     <div style={{ 
                                         position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                                         width: '100%', display: 'flex', justifyContent: 'center'
                                     }}>
                                         <img src={automateGridImg} alt="Automated Updates" style={{ width: '80%', height: 'auto', objectFit: 'contain' }} />
                                     </div>
                                </div>

                                {/* Card 4 (66%) - Enhanced Productivity */}
                                <div className="glass-card" style={{ 
                                    flex: '2', padding: '2.5rem', background: 'rgba(255,255,255,0.03)',
                                    position: 'relative', overflow: 'hidden'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', fontWeight: '600', position: 'relative', zIndex: 1 }}>Enhanced Productivity</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', position: 'relative', zIndex: 1, maxWidth: '60%' }}>
                                        Apply AI faster with proven workflows and ready-to-use solutions.
                                    </p>
                                    
                                    <div style={{
                                        position: 'absolute', bottom: '-10px', right: '-10px',
                                        width: '60%', maxWidth: '300px'
                                    }}>
                                        <img src={enhanceGridImg} alt="Enhanced Productivity" style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                    {/* Partnering Grid Section */}
                    {/* Header */}
                    <div id="why-us" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                        <div style={{ 
                            display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', 
                            border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                            fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem' 
                        }}>
                             Why Choose Us
                        </div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2', fontWeight: '700' }}>
                           The Key Benefits of <br/> <span style={{ color: '#94a3b8' }}>Partnering</span>
                        </h2>
                    </div>

                    {/* New 6-Card Grid */}
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                        gap: '1.5rem'
                    }}>
                        {[
                            { 
                                title: 'AI Tools Library', 
                                desc: 'Explore curated AI tools for automation, analysis, and creation.',
                                img: aiToolsImg 
                            },
                            { 
                                title: 'AI Adoption Frameworks', 
                                desc: 'Guides to integrate AI into existing workflows and teams.',
                                img: aiAdoptionImg 
                            },
                            { 
                                title: 'AI Tutorials & Learning Paths', 
                                desc: 'Structured guides for beginners to advanced practitioners.',
                                img: aiTutorialsImg 
                            },
                            { 
                                title: 'AI Use Case Solutions', 
                                desc: 'Industry-specific AI implementations and examples.',
                                img: aiUseCasesImg 
                            },
                            { 
                                title: 'Research + Case Study Vault', 
                                desc: 'Documented success stories and applied AI research.',
                                img: aiResearchImg 
                            },
                            { 
                                title: 'AI Ethics & Best Practices', 
                                desc: 'Responsible AI usage, compliance, and governance insights.',
                                img: aiEthicsImg 
                            }
                        ].map((card, i) => (
                            <div key={i} className="" style={{ 
                                padding: '36px', 
                                textAlign: 'center',
                                borderRadius: '25px',
                                border: '1px solid #747474',
                                background: '#0C0C0C',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                                height: '328px',
                                position: 'relative', overflow: 'hidden'
                            }}>
                                 <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem', fontWeight: 'bold' }}>{card.title}</h3>
                                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '90%' }}>
                                     {card.desc}
                                 </p>
                                 
                                 <img src={card.img} alt={card.title} style={{ 
                                     width: '236px', height: '170px',
                                     position: 'absolute',
                                     top: '158px',
                                     left: '50%',
                                     transform: 'translateX(-50%)',
                                     filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                                 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" style={{ padding: '6rem 0' }}>
                <div className="container">
                    
                    {/* Top Row: Graphic + Title */}
                    <div className="bento-row" style={{ alignItems: 'center', gap: '4rem', marginBottom: '4rem' }}>
                        
                        {/* Left: FAQ Graphic */}
                        <div style={{ 
                            flex: '1', height: '300px', 
                            display: 'flex', flexDirection: 'column', 
                            justifyContent: 'center', alignItems: 'center',
                            borderRadius: '25px',
                            border: '1px solid #747474',
                            background: 'linear-gradient(180deg, #0C0C0C 0%, rgba(12, 12, 12, 0.20) 100%)',
                            position: 'relative', overflow: 'hidden'
                        }}>
                             <img src={commonQuestionsImg} alt="Common Questions" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
                        </div>

                        {/* Right: Header */}
                        <div style={{ flex: '1' }}>
                            <div style={{ 
                                display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', 
                                border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                                fontSize: '0.85rem', color: '#e2e8f0', marginBottom: '1.5rem' 
                            }}>
                                 Common Questions
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', fontWeight: '700' }}>
                                Your Questions <br/> About <span style={{ color: '#94a3b8' }}>AIHubPro</span>
                            </h2>
                        </div>
                    </div>

                    {/* Bottom: Questions Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} className="glass-card" 
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                style={{ 
                                    padding: '1.5rem 2rem', 
                                    cursor: 'pointer', transition: 'all 0.3s ease',
                                    background: openFaq === i ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                                    display: 'flex', flexDirection: 'column',
                                    border: openFaq === i ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.08)'
                                }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{faq.q}</span>
                                    <div style={{ 
                                        width: '32px', height: '32px', borderRadius: '50%', background: 'white', flexShrink: 0,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)'
                                    }}>
                                        {openFaq === i ? <Minus size={18} color="black" strokeWidth={2.5} /> : <Plus size={18} color="black" strokeWidth={2.5} />}
                                    </div>
                                </div>
                                <div style={{ 
                                    maxHeight: openFaq === i ? '300px' : '0',
                                    opacity: openFaq === i ? 1 : 0,
                                    marginTop: openFaq === i ? '1rem' : '0',
                                    paddingTop: openFaq === i ? '1rem' : '0',
                                    borderTop: openFaq === i ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent',
                                    overflow: 'hidden',
                                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                    color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem'
                                }}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation CTA Section */}
            <section style={{ 
                padding: '80px 0', 
                backgroundImage: `url(${innovationBgImg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div className="container" style={{ width: '100%', maxWidth: '1200px' }}>
                    <div style={{ 
                        background: '#0C0C0C', 
                        padding: '80px 40px', 
                        borderRadius: '40px', 
                        textAlign: 'center',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                    }}>
                        {/* Pill */}
                        <div style={{ 
                            display: 'inline-block', padding: '0.4rem 1.2rem', borderRadius: '50px', 
                            border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                            fontSize: '0.85rem', color: '#e2e8f0'
                        }}>
                             Secure, Fast, and Flexible
                        </div>

                        {/* Title */}
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', fontWeight: '700', color: 'white' }}>
                            Take the Next Step Toward <br/> <span style={{ color: '#94a3b8' }}>AI-Driven Innovation Today</span>
                        </h2>

                        {/* Subtitle */}
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
                            Join AIHubPro and start applying AI with clarity, confidence, and speed.
                        </p>

                        {/* Button */}
                        <button className="btn" style={{ 
                            marginTop: '1rem',
                            background: 'white', color: 'black', 
                            padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '600', fontSize: '1rem',
                            border: 'none', cursor: 'pointer', transition: 'transform 0.2s',
                            boxShadow: '0 10px 20px rgba(255, 255, 255, 0.1)'
                        }}>
                            Get Started with AIHubPro
                        </button>

                        {/* Footer Text */}
                        <p style={{ color: '#525252', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.5rem' }}>
                            Takes less than a minute!
                        </p>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Features;
