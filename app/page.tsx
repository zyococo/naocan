import About from './components/About';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Map from './components/Map';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonial />
      <Map />
      <CtaSection />
      <Footer />
    </main>
  );
}