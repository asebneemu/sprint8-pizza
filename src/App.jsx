import React, { useState } from 'react'
import BaslikAlani from './components1/BaslikAlani'
import PizzaHakkinda from './components1/PizzaHakkinda'
import Secenekler from './components1/SecimBoyutHamur'
import EkMalzemeler from "./components1/EkMalzemeler"
import Sayfa from "./components2/Sayfa"
import "./App.css"
import SiparisNotu from './components1/SiparisNotu'
import SiparisTop from './components1/SiparisTop'
import MiktarAyari from "./components1/MiktarAyari"
import YiyecekCesitleri from './components3/YiyecekCesitleri'
import UcluReklam from "./components3/UcluReklam"



function App() {
  const [siparisVerildi,setSiparisVerildi]=useState(false);
  const [fiyat,setFiyat]=useState(0);
  const [malzemeSayisi,setMalzemeSayisi]=useState(0);
  const [miktar, setMiktar] = useState(1);

  const malzemeFiyati=5;
  const toplamMalzemeFiyati = malzemeSayisi * malzemeFiyati;
  return (
    <div>
      <BaslikAlani />
      <main>
        <PizzaHakkinda setFiyat={setFiyat}/>
        <Secenekler />
        <EkMalzemeler setSecilenMalzemeSayisi={setMalzemeSayisi}/>
        <SiparisNotu />
        <SiparisTop pizzaFiyati={fiyat} malzemeFiyati={toplamMalzemeFiyati} miktar={miktar} />
        <MiktarAyari setSiparisVerildi={setSiparisVerildi} setMiktar={setMiktar} />
      </main>
      <div className='IkinciSayfa'>
        <Sayfa siparisVerildi={siparisVerildi} />
        <YiyecekCesitleri />
        <UcluReklam />
      </div>
    </div>
  )
}

export default App
