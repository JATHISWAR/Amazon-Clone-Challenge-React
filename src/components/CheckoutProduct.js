import React from 'react';
import './CheckoutProduct.css';
import Rating from '@material-ui/lab/Rating';
import {useStateValue} from '../StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, disptach] = useStateValue();
    const removefromBasket = () =>{
        disptach({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                <Rating name="size-small" defaultValue={rating} precision={0.5} size="small" readOnly />
                </div>
              
                    <button onClick={removefromBasket}>Remove from Basket</button>
                
            </div>
        </div>
    )
}

export default CheckoutProduct

           