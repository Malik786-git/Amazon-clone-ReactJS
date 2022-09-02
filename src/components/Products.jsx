import React from 'react'
import Card from './Card'
import { product } from '../ProductApi'



const Products = () => {
  console.log(product);

  const techProduct = product.tech.map((data, i)=>  <Card key={i} {...data}/>);

  return (
    <div className='product-container'>
     <div className="product-backside-container">

            <div className="card-product-container">
              { techProduct }
            </div> 
            
     </div>  
    </div>
  )
}


export default Products;
