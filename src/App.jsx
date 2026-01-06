import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import AboveFooter from './components/AboveFooter';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden', width: '100%' }}>
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <ContactFooter />
        <AboveFooter />
    </div>
  )
}

export default App
