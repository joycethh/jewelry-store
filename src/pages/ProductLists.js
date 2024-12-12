import react from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";

export default function ProductLists () {
   const {categoryName} = useParams()
   console.log ('category name in component', categoryName)
    return ( 
        <div>
            <h1>category title</h1>
            <div className="grid grid-cols-1 md: grid-cols-3 glap-6 mt-8">
                {productData.map(product => (
                    <div key={product.id} className="border p-4 rounded-lg shadow">
                    <img src={product.img}/>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
                ))}

                

            </div>
        </div>

    )

}