import React, { useEffect, useState } from "react";

const Productlist = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts();
    }, [])

    let  getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result)
    }
    console.warn("products", products)

    return (
        <div className="product-list">
        <h1>Product List</h1>
        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
        </ul>
      {
        products.map((item,index)=>
        <ul>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
    </ul>
        )
      }
        
        </div>
    )
}


export default Productlist;
