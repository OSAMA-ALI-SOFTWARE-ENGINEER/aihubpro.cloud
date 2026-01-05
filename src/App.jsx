import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <ContactFooter />
    </div>
  )
}

export default App
