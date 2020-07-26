import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux'; 
import { Redirect} from 'react-router-dom';





function Cart({basketProps}) {
    console.log(basketProps);

    const [PriceRedirect, setPriceRedirect] = useState(false);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function(item){

            console.log(item);
            console.log(basketProps.products[item].inCart);
            if(basketProps.products[item].inCart){
                productsInCart.push(basketProps.products[item])
            }
            console.log(productsInCart);
    })

   

    productsInCart = productsInCart.map( (products , index) =>{
        return (
            <Fragment>
                
                <div className ="products"><ion-icon name ="close-circle"></ion-icon>
                        <span className="sm-hide">Title</span> 
                </div>
                <div className="price sm-hide">$Price</div>
                <div classsName="quantity">
                    <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>Productnumber</span> 
                        <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>  
                </div>
                 <div className="total">$number + price</div>
            </Fragment>
        )
    })

    return !PriceRedirect ? (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>     
            <div className="products">
                {productsInCart}
            </div>   
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                 <h4 className="basketTotal">{basketProps.cartCost}</h4>
                </div>     
            <div className="checkout">
                <button onClick={() => setPriceRedirect(true)}>
                    Checkout
                </button>

            </div>   
        </div>
    ) : (<Redirect  to="/checkout"/>)
}

const mapStateToProps = state => ({
    basketProps:  state.basketState
});

export default connect(mapStateToProps)(Cart);

//onClick={() => productQuantity('decrease')}
//onClick={() => productQuantity('increase')}
//import {productQuantity} from '../actions/productQuantity';
