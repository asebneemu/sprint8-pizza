import React, { useState } from 'react';
import "./Miktar.css"

const MiktarAyari = ({setSiparisVerildi, setMiktar}) => {
  const [miktar, setBurasiMiktar] = useState(1);

  const azalt = () => {
    if (miktar > 1) {
      const yeniMiktar = miktar - 1;
      setBurasiMiktar(yeniMiktar);
      setMiktar(yeniMiktar);
    }
  };
  
  const artir = () => {
    const yeniMiktar = miktar + 1;
    setBurasiMiktar(yeniMiktar);
    setMiktar(yeniMiktar);
  };
  

  return (
    <div className='IkiButon'>
    <div className="MiktarAyari">
      <button onClick={azalt}>-</button>
      <span>{miktar}</span>
      <button onClick={artir}>+</button>
    </div>
    <div>
        <button className="SiparisVerButton" onClick={() => setSiparisVerildi(true)}>SİPARİŞ VER</button>
    </div>
    </div>
    
  );
};

export default MiktarAyari;
