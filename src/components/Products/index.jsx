import axios from "axios"
import { useState, useEffect } from "react"
import "./index.css"

const Products = () => {
    const [products, setProducts] = useState([]);

    // console.log(products);
    useEffect(() => {
        axios("https://dummyjson.com/products").then((response) => {
            console.log(response);

            const productsArr = response.data.products;
            setProducts(productsArr);
        });
        console.log(products);
    });

    let productJSX = products.map((product) => {
        return (
            <div key={product.id}>
                <div>{product.title}</div>
                <div>${product.price}</div>
                <img src={product.images[Math.floor(Math.random() * 3)]} alt="" style={{maxWidth: "100px"}} />
            </div>
        )
    })

    return (
        <div id="product-container">
            {productJSX}
        </div>
    )
};

export default Products