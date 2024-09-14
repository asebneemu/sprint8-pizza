import React from "react";
import "./AciktiranKodlar.css";

function AciktiranKodlar() {
    return (
        <div className="menu-alt-section">
            <div className="menu-alt-content">
                <h2>en çok paketlenen lezzetler</h2>
                    <p>ACIKTIRAN <br/>KODLARA DOYURAN <br/>LEZZETLER</p>
            </div>
            <div className="menu-alt-items">
                <button className="menu-alt-item">
                    <img src="Assets/Iteration-2-aseets/icons/1.svg" alt=""/>
                    <p>YENİ! Kore</p>
                </button>
                <button className="menu-alt-item">
                    <img src="Assets/Iteration-2-aseets/icons/2.svg" alt=""/>
                    <p>Pizza</p>
                </button>
                <button className="menu-alt-item">
                    <img src="Assets/Iteration-2-aseets/icons/3.svg" alt=""/>
                    <p>Burger</p>
                </button>
                <button className="menu-alt-item">
                    <img src="Assets/Iteration-2-aseets/icons/4.svg" alt=""/>
                    <p>Kızartma Lezzetler</p>
                </button>
                <button className="menu-alt-item">
                    <img src="Assets/Iteration-2-aseets/icons/5.svg" alt=""/>
                    <p>Fast Food</p>
                </button>
                <button className="menu-alt-item">
                    <img src="Assets/Iteration-2-aseets/icons/6.svg" alt=""/>
                    <p>Gazlı İçecek</p>
                </button>
            </div>
        </div>
    )
}

export default AciktiranKodlar;