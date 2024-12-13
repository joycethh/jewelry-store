import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json";

export default function ProductLists () {
   const {category, subcategory} = useParams ();
   console.log('category-string-from-route', category)
   const [filteredProducts, setFilteredProducts] = useState([]);
   
   useEffect(() => {
    const filtered = productData.filter((product) => {
        // console.log('product.categories-key-to-string', product.categories[category].toLowerCase())
        const matchesCategory = category && product.categories[category].toLowerCase() === subcategory?.toLowerCase()
        // console.log('matchesCategory', matchesCategory)

        return matchesCategory
  
    });

    setFilteredProducts(filtered);
  }, [category, subcategory]);

//    const filteredProductsByCategory = productData.filter((productByCategory) => {
//     console.log('productByCategory', productByCategory.categories)
//     return (
//         productByCategory => productByCategory.categories.includes(category)
//     )
//    }
 
//    )
    
//    const filteredProductsBySubcategory = productData.filter((product)=> {
//         // console.log('product.type', product.type)
//         return (
//             product.type.toLowerCase() === subcategory
//         )
//     })
   
   return ( 
        // <div>
            
        //     {/* filter products based on category name */}
        //     <h1>{category}</h1>
        //     <div className="grid grid-cols-1 md: grid-cols-3 glap-6 mt-8">
        //         {filteredProductsByCategory.map(product => (
        //             <div key={product.id} className="border p-4 rounded-lg shadow">
        //             <img src={product.img}/>
        //             <h2>{product.name}</h2>
        //             <p>{product.price}</p>
        //         </div>
        //         ))}
        //     </div>
        //     {/* filter products based on the subcategory name */}
        //     <h1 className="uppercase">{subcategory}</h1>
        //     <div className="grid grid-cols-1 md: grid-cols-3 glap-6 mt-8">
        //         {filteredProductsBySubcategory.map(product => (
        //             <div key={product.id} className="border p-4 rounded-lg shadow">
        //             <img src={product.img}/>
        //             <h2>{product.name}</h2>
        //             <p>{product.price}</p>
        //         </div>
        //         ))}

                

        //     </div>
        // </div>
        <div className="mt-20 px-6"> {/* Add top margin to account for fixed header */}
      <h1 className="text-3xl font-bold text-center capitalize">
        {subcategory ? `${subcategory} in ${category}` : category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-bold mt-2">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
    )

}