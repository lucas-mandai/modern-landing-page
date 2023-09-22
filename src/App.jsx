import Nav from './components/Nav';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className='bg-primary text-white'>
      <header className='px-12 py-3 bg-secondary'>
        <Nav />
      </header>
      <section>
        <Hero />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}