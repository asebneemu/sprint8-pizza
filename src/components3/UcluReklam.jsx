import React from "react";
import "./UcluReklam.css"

function UcluReklam() {
    return (
        <div className="siparisver-section">
            <div className="siparisver-content">
                <div className="siparisver-item item1">
                    <h1>Özel</h1>
                    <h1>Lezzetus</h1>
                    <p>Acı Burger</p>
                    <button className="btn">SİPARİŞ VER</button>
                </div>
                <div className="siparisver-item item2">
                    <h2>Hackathlon <br />Burger Menü</h2>
                    <button className="btn">SİPARİŞ VER</button>
                </div>
                <div className="siparisver-item item3">
                    <h2>Çooooook hızlı <br />npm gibi kurye</h2>
                    <button className="btn">SİPARİŞ VER</button>
                </div>
            </div>
        </div>
    )
}

export default UcluReklam;