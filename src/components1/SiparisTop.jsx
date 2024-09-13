import React from "react";
import "./SiparisTop.css"

function SiparisTop({pizzaFiyati, malzemeFiyati, miktar}) {
    
    const toplam = (malzemeFiyati + pizzaFiyati)*miktar;
    return (
        <div className="SiparisTop">
            <h4>Siparis Toplamı</h4>
            <p>Seçimler <span>{malzemeFiyati}</span></p>
            <p style={{color:"red"}}>Toplam <span className="toplam">{toplam} </span></p>
        </div>
    )
}
export default SiparisTop;