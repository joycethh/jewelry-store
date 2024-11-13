import React from "react";

export default function Hero ({text}) {
    return (
        <div style={{backgroundImage:"url(`images/hero.jpg`)"}} >
           <h2>{text}</h2> 
        </div>
    )
}