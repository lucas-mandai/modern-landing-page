import Nav from './components/Nav';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className='bg-primary text-white w-full overflow-hidden'>
      <header className='px-20 py-6 max-container'>
        <Nav />
      </header>
      <section className='px-20 pt-12  max-container bg-black'>
        <Hero />
      </section>
      <section className='py-12'>
        <Stats  />
      </section>
      <footer className='px-12'>
        <Footer />
      </footer>
    </div>
  )
}