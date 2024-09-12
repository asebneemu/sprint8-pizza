import React from "react";
import "./SiparisNotu.css"

const SiparisNotu = () => {
    return (
        <div className="SiparisNotu">
            <label htmlFor="siparisNotu">Sipariş Notu</label>
            <textarea name="" id="siparisNotu" placeholder="Siparişinize eklemek istediğiniz bir not var mı?" rows="3"/>
        </div>
    )
}
export default SiparisNotu;