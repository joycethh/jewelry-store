import React from "react";
import Button from "./Button";


export default function ActionSection () {
    return (
        <div className="w-full py-12 flex flex-col text-center items-center justify-center bg-lilac ">
        <div
            style={{
                backgroundImage:"url('/images/logo.png')",
                backgroundSize: 'contain',
                backgroundPosition:'center',
                backgroundRepeat: 'no repeat',
                height: '300px',
                width: '300px',
            }}
            className="mb-3"
        >
        </div>
        <p className="tet-textDark mb-10"> Join our club and stay updated on new collections. </p>
        <Button label="Join the Club" />
        </div>
    )
}