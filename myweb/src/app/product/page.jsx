"use client"
import { useEffect, useState } from 'react'

import React, { use } from 'react'

function page() {
    let [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
  return (
    <>
      <h2>Products</h2>
      
    </>
  )
}

export default page
