// ProductPage.js
import React from "react";
import "./Product.css";

function ProductPage({id, title, price, rating, image}) {

    const [cart, setCart] = React.useState([])

    const addToCart = () => {
        setCart(currentCart => [...currentCart, {id, title, price, rating, image}])
    }
    

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt={title}/>
            <button onClick={addToCart}>Add to Basket</button>
        </div>
    )
}

export default ProductPage
