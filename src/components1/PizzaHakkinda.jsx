import React, { useEffect } from "react";
import "./PizzaHakkinda.css";

function PizzaHakkinda() {
    const fiyat="85.50";

    return (
        <div>
            <h2>Position Absolute Acı Pizza</h2>
            <div className="degerlendirme">
                <p className="price">{fiyat}₺</p>
                <span><span>4.9</span><span>(200)</span></span>
            </div>
            <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
    )
}

export default PizzaHakkinda;
