import React, { useState } from 'react'
import BaslikAlani from './components1/BaslikAlani'
import PizzaHakkinda from './components1/PizzaHakkinda'
import Secenekler from './components1/SecimBoyutHamur'
import EkMalzemeler from "./components1/EkMalzemeler"
import Sayfa from "./components2/Sayfa"
import "./App.css"
import SiparisNotu from './components1/SiparisNotu'
import SiparisTop from './components1/SiparisTop'
import Miktar from "./components1/Miktar"



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
      <div className='IkinciSayfa'>
        <Sayfa />
      </div>
    </div>
  )
}

export default App
