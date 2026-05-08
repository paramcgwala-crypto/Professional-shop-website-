import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Footer from './components/Footer';

export const metadata = {
  title: 'ParamCGWala | Premium 4D Luxury Fashion',
  description: 'The ultimate luxury fashion destination. Elevate your style with our premium 4D shopping experience.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trending />
      <Footer />
    </main>
  );
}
