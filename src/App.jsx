import Nav from './components/Nav';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className='bg-primary text-white w-full overflow-hidden'>
      <header className='px-20 py-6'>
        <Nav />
      </header>
      <section className='pl-20 py-12 '>
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