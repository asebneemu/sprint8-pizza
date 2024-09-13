import React from "react";
import "./SiparisTop.css"

function SiparisTop() {
    return (
        <div className="SiparisTop">
            <h4>Siparis Toplamı</h4>
            <p>Seçimler <span>25</span></p>
            <p style={{color:"red"}}>Toplam <span className="toplam">110.50</span></p>
        </div>
    )
}
export default SiparisTop;