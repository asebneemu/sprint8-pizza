import React, { useState } from "react"
import "./Sayfa.css"

function Sayfa() {
    return (
        <div className="girisAlani">
            <img className="ustResim" src="../Assets/Iteration-1-assets/logo.svg" alt="" />
            <div className="content">
                <p>KOD ACIKTIRIR</p>
                <p>PİZZA DOYURUR</p>
            </div>
            <button>ACIKTIM</button>
            <div className="altResim"></div>
        </div>
    )
}
export default Sayfa;