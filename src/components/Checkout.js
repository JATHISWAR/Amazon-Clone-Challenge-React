import React from 'react';
import './Checkout.css';
import Subtotal from'./Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"  
                src="https://www.cardexpert.in/wp-content/uploads/2019/04/amazon_pay_credit_card_application_1-1024x339.png"
                alt=""/>
                <div>
                    <h2 className="checkout_title">
                       Shopping Cart
                    </h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
