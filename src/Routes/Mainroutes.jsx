import React, { useEffect } from 'react'
import { BrowserRouter, Route, Router, Routes , useLocation, useNavigate} from 'react-router-dom'
import Openview from '../page/Openview'
import Home from '../page/Home'
import About from '../page/About'
import Works from '../page/Works'
import Blogs from '../page/Blogs'
import Contacts from '../page/Contacts'
import View from '../page/View'
import Footer from '../component/Footer'


const Scrolling = ()=>{

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = 'manual';
  }, [pathname]);
}


const Mainroutes = () =>{
    return (
   
      <BrowserRouter>
      <Scrolling/>
        <Routes>
          <Route  path="/" element={<Openview />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works/>} />
          <Route path="/service" element={<Blogs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/view/:id" element={<View/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
}

export default Mainroutes
