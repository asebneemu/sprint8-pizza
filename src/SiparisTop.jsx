import React from "react";

function SiparisTop({secimler,fiyat}) {
    return (
        <div className="SiparisTop">
            <h4>Siparis Toplamı</h4>
            <p>Seçimler: <span>{secimler.length*5}</span></p>
            <p>Toplam: <span className="toplam">{toplamFiyat}</span></p>
        </div>
    )
}
export default SiparisTop;