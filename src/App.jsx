import Nav from './components/Nav';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className='bg-primary text-white w-full overflow-hidden'>
      <header className='px-12 py-3'>
        <Nav />
      </header>
      <section className='pl-12 py-12 '>
        <Hero />
      </section>
      <footer className='px-12'>
        <Footer />
      </footer>
    </div>
  )
}