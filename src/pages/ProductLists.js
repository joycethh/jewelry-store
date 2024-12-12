import react from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";

export default function ProductLists () {
   const {subcategory} = useParams()
   
    const filteredProducts = productData.filter((product)=> {
        console.log('product.type', product.type)
        return (
            product.type.toLowerCase() === subcategory
        )
    })
   
   return ( 
        <div>
            <h1 className="uppercase">{subcategory}</h1>
            {/* filter products based on the subcategory name */}
           
        
            <div className="grid grid-cols-1 md: grid-cols-3 glap-6 mt-8">
                {filteredProducts.map(product => (
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