import React, { useState } from 'react'
import BaslikAlani from './BaslikAlani'
import PizzaHakkinda from './PizzaHakkinda'
import Secenekler from './SecimBoyutHamur'
import EkMalzemeler from "./EkMalzemeler"

import "./App.css"
import SiparisNotu from './SiparisNotu'


function App() {
  
  return (
    <div>
      <BaslikAlani />
      <main>
        <PizzaHakkinda />
        <Secenekler />
        <EkMalzemeler />
        <SiparisNotu />

      </main>
    </div>
      

  )
}

export default App
