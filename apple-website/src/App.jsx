import React from 'react'
import Navbar from './Navbar/Navbar';
import Promotion from './Text/Promotion';
import Neo from './Neo/Neo';
import IPhone from './IPhone/IPhone';
import Macbook from './Macbook/Macbook';
import Extra from './Extra/Extra';



const App = () => {
  return (
    <div>
        <Navbar />
        <Promotion />
        <Neo />
        <IPhone />
        <Macbook />
        <Extra />
    </div>
  )
}

export default App