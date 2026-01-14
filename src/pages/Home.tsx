import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Products } from '../components/sections/Products';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
