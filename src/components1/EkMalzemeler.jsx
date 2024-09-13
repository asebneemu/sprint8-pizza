import React, { useState } from "react";
import "./EkMalzemeler.css"
function EkMalzemeler() {
    const [secilenMalzeme, setSecilenMalzeme] = useState([]);

    const malzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Sogan", "Domates", "Misir", "Sucuk", "Jalepeno", "Sarmisak", "Biber", "Kabak", "Ananas"];

    const handleMalzemeChange = (event) => {
        const malzeme = event.target.value;
        setSecilenMalzeme((secilenler) => {
            if (secilenler.includes(malzeme)) {
                return secilenler.filter((i) => i !== malzeme);
            } else {
                if (secilenler.length < 10) {
                    return [...secilenler, malzeme];
                } else {
                    return secilenler;
                }
            }
        })
    }

    return (
        <div className="ekmalzemeler">
            <h3>Ek Malzemeler</h3>
            <p className="aciklama">En Fazla 10 Malzeme seçebilirsiniz. 5₺</p>
            <div className="malzemeler-container">
                {malzemeler.map((malzeme) => (
                    <label key={malzeme}>
                        <input
                            type="checkbox"
                            value={malzeme}
                            checked={secilenMalzeme.includes(malzeme)}
                            onChange={handleMalzemeChange}
                        />{' '}
                        {malzeme}
                    </label>
                ))}
            </div>
        </div>
    );
}
export default EkMalzemeler;