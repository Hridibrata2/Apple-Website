import React from 'react'
import Navbar from './Navbar/Navbar';
import Promotion from './Text/Promotion';
import Neo from './Neo/Neo';
import IPhone from './IPhone/IPhone';
import Macbook from './Macbook/Macbook';
import Extra from './Extra/Extra';
import Air from './Air/Air';
import Slope from './Slope/Slope';
import Slideshow from './Slideshow/Slideshow';
import Footer from './Footer/Footer';



const App = () => {
  return (
    <div>
        <Navbar />
        <Promotion />
        <Neo />
        <IPhone />
        <Macbook />
        <Extra />
        <Air />
        <Slope />
        <Slideshow />
        <Footer />
    </div>
  )
}

export default App