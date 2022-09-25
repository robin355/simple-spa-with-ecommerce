import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, price, seller, ratings
    } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => props.handleCartAdd(props.product)} className='btn-cart'><p>Add Cart</p></button>

        </div>
    );
};

export default Product;