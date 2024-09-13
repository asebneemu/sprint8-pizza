import React, { useState } from 'react';
import "./Miktar.css"

const MiktarAyari = () => {
  const [miktar, setMiktar] = useState(1);

  const azalt = () => {
    if (miktar > 1) {
      setMiktar(miktar - 1);
    }
  };

  const artir = () => {
    setMiktar(miktar + 1);
  };

  return (
    <div className='IkiButon'>
    <div className="MiktarAyari">
      <button onClick={azalt}>-</button>
      <span>{miktar}</span>
      <button onClick={artir}>+</button>
    </div>
    <div>
        <button className="SiparisVerButton">SİPARİŞ VER</button>
    </div>
    </div>
    
  );
};

export default MiktarAyari;
