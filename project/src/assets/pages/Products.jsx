import React from 'react'
import { useState,useEffect } from 'react';
function Products() {
     const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ecommerce-backend-klem.onrender.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {products.map(function (p) {
        return (
          <div key={p._id}>
            <img height={250} width={250} src={p.image} alt="" />
            <p>{p.title}</p>
            <p>{p.price}</p>
          </div>
        );
      })}

    </div>
    
    </>
  )
}

export default Products