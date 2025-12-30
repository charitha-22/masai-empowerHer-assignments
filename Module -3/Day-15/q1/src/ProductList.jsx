import React from 'react'

const ProductList = ({products, onSelect}) => {
    console.log("Product List Rendered");
  return (
    <div>
        <ul>
            {products.map((product)=>(
                <li key={product.id} onClick={()=>onSelect(product)}>
                    {product.name} - {product.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductList