import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <HeaderNav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}