import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Process from './components/process/Process'
import Services from './components/services/Services'
import './App.css'
import { Route, Routes } from 'react-router'

function App() {
  

  return (
    <>
  <div>
     <Navbar />
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
          </Routes>
      <Footer/>
  </div>
  
   </>
  )
}

export default App
