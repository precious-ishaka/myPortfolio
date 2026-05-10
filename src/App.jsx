import './index.css'

import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Projects from './component/Projects.jsx'
import { useContext} from 'react'
import  ThemeContext  from './context/ThemeContext';
import Footer from './component/Footer.jsx'



function App() {

 const { theme } = useContext(ThemeContext);
 return(
  
 <div className={theme === "light" ? "bg-white text-gray-900 transition relative" : "bg-gray-900 text-white transition relative"}>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
 </div>
  
 )
}

export default App
