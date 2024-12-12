import react from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";

export default function ProductLists () {
    const {category} = useParams ()
    console.log('category parameter', category)

   const {subcategory} = useParams()
   
   const filteredProductsByCategory = productData.filter((productByCategory) => {
    console.log('productByCategory', productByCategory.categories)
    return (
        productByCategory => productByCategory.categories.includes(category)
    )
   }
    
   )
    
   const filteredProductsBySubcategory = productData.filter((product)=> {
        // console.log('product.type', product.type)
        return (
            product.type.toLowerCase() === subcategory
        )
    })
   
   return ( 
        <div>
            
            {/* filter products based on category name */}
            <h1>{category}</h1>
            <div className="grid grid-cols-1 md: grid-cols-3 glap-6 mt-8">
                {filteredProductsByCategory.map(product => (
                    <div key={product.id} className="border p-4 rounded-lg shadow">
                    <img src={product.img}/>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
                ))}
            </div>
            {/* filter products based on the subcategory name */}
            <h1 className="uppercase">{subcategory}</h1>
            <div className="grid grid-cols-1 md: grid-cols-3 glap-6 mt-8">
                {filteredProductsBySubcategory.map(product => (
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