import React from 'react';
import './Product.css';
import Rating from '@material-ui/lab/Rating';
import {useStateValue} from '../StateProvider';



function Product({id,title,image,price,rating}){
const [{basket}, disptach] = useStateValue();
console.log('This is the basket',basket); 
 {
    const addToBasket = () =>{
        disptach({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image: image,
                price:price,
                rating:rating 
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>₹{price}</strong>
                </p>
                <div className="product_rating">
                <Rating name="size-small" defaultValue={rating} precision={0.5} size="small" readOnly />
                </div>
             </div>  
             <img src={image}></img>          
        <button onClick={addToBasket}>Add to Basket</button>
   </div>
    )
}
}

export default Product
