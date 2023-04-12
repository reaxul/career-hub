import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            hello
            {
                cart.companyName
            }
        </div>
    );
};

export default Cart 