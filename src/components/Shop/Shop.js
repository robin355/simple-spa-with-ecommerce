import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart);

    }, [products])

    const handleCartAdd = (selectedproduct) => {
        let newCart = [];
        const exited = cart.find(product => product.id === selectedproduct.id)
        if (!exited) {
            selectedproduct.quantity = 1;
            newCart = [...cart, selectedproduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedproduct.id);
            exited.quantity = exited.quantity + 1;
            newCart = [...rest, exited]
        }
        setCart(newCart)
        addToDb(selectedproduct.id)
    }

    return (
        <div className='main-area'>
            <div className='products-area'>
                {
                    products.map(product => <Product key={product.id} product={product} handleCartAdd={handleCartAdd}></Product>)

                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;