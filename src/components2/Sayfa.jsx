import React, { useState } from "react"
import "./Sayfa.css"

function Sayfa({ siparisVerildi }) {
    return (
        <div className="girisAlani">
            <img className="ustResim" src="../Assets/Iteration-1-assets/logo.svg" alt="" />
            {!siparisVerildi ? (
                <>
                    <div className="content">
                        <p>KOD ACIKTIRIR</p>
                        <p>PİZZA DOYURUR</p>
                    </div>
                    <button>ACIKTIM</button>
                    <div className="altResim"></div>
                </>
            ) : (
                <p className="SiparisAlindi">TEBRİKLER! SİPARİŞİNİZ ALINDI!</p>
            )}

        </div>
    )
}
export default Sayfa;