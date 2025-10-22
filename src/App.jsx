

import FAQ from './pages/FAQ'
import Header from './components/Header';
import FloatingBtn from './components/ui/FloatingBtn';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Testimonial from './pages/Testimonials';
import Contact from './pages/Contact';




export default function App() {

  return (
    <div className="app-root">
      <Header/>
      <main className="container">
            <Home/>
            <About/>
             <Product/>
            <Testimonial/>
                    <FAQ/>
            <Contact/>

      </main>
    <FloatingBtn/>
     <Footer/>
    </div>
  )
}










