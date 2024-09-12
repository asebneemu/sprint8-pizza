import React, { useState } from 'react';
import "./SecimBoyutHamur.css"

function Secenekler() {
  const [boyut, setBoyut] = useState('');
  const [hamur, setHamur] = useState('');

  const handleBoyutDegisimi = (event) => {
    setBoyut(event.target.value);
  };

  const handleHamurDegisimi = (event) => {
    setHamur(event.target.value);
  };

  return (
    <div className='secenekler'>
      <div className='boyut'>
        <h3>Boyut Seç</h3>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Kucuk"
            onChange={handleBoyutDegisimi}
          /> Küçük
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Orta"
            onChange={handleBoyutDegisimi}
          /> Orta
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Buyuk"
            onChange={handleBoyutDegisimi}
          /> Büyük
        </label>
      </div>
      <div>
        <h3>Hamur Seç</h3>
        <select value={hamur} onChange={handleHamurDegisimi}>
          <option value="">Hamur Kalınlığı</option>
          <option value="Ince">İnce</option>
          <option value="Kalın">Kalın</option>
        </select>
      </div>
    </div>
  );
}

export default Secenekler;