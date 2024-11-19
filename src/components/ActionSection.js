import React from "react";
import Button from "./Button";

export default function ActionSection () {
    return (
        <div className="w-full py-12 flex flex-col text-center items-center justify-center bg-aquamarine ">
        <h2 className="text-lilac text-3xl font-bold mb-3">Jewelry Store</h2>
        <p className="tet-textDark mb-10"> Join our club and stay updated on new collections. </p>
        <Button label="Join the Club" />
        </div>
    )
}