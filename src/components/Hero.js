import React from "react";

export default function Hero ({text}) {
    return (
        <div  
            style={{
                backgroundImage: "url('/images/hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition:'center',
                height: '400px',
                position: 'relative',
            }}
            className="flex items-center justify-center text-white"
        >
            <div className="absolute bottom-12 w-full text-center">
            <h2 className="text-4xl font-bold text-aquamarine text-opacity-60">JEWELRY STORE</h2> 
            <p className="text-xl mt-2 text-aquamarine text-opacity-70"> Where elegance meet timeless beauty</p>
            </div>
           
        </div>
    )
}