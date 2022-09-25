import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    const GrandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <h3>Selected Iteam:{(props.cart).length}</h3>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{shipping}</p>
            <p>Tax:{tax}</p>
            <h4>Grand Total:{GrandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;