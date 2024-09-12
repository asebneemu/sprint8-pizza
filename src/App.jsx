import React, { useState } from 'react'
import BaslikAlani from './BaslikAlani'
import PizzaHakkinda from './PizzaHakkinda'
import Secenekler from './SecimBoyutHamur'
import EkMalzemeler from "./EkMalzemeler"

import "./App.css"
import SiparisNotu from './SiparisNotu'
import SiparisTop from './SiparisTop'
import Miktar from "./Miktar"



function App() {
  
  return (
    <div>
      <BaslikAlani />
      <main>
        <PizzaHakkinda />
        <Secenekler />
        <EkMalzemeler />
        <SiparisNotu />
        <SiparisTop />
        <Miktar />

      </main>
    </div>
      

  )
}

export default App
