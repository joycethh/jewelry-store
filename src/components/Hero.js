import React from "react";

export default function Hero ({text}) {
    return (
        <div  
            style={{
                backgroundImage: "url('/images/hero.jpg')",
                backgroundSize: 'cover',
                backgroundPosition:'center',
                height: '90vh',
                position: 'relative',
            }}
            className="flex items-center justify-center"
        >
            <div className="absolute w-full text-center mb-10">
            <h2 className="font-cursive text-bold text-2xl text-white text-opacity-80"> Jewelry that tells your story</h2>
            </div>
           
        </div>
    )
}