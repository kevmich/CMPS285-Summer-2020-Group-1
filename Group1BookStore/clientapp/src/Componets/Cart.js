import React, { Fragment, useState } from 'react';
import {connect} from 'react-redux'; 
import { Redirect} from 'react-router-dom';



function Cart({basketProps}) {
    console.log("IM HERE" + JSON.stringify(basketProps));

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
            <div className="products">
                
                <div ><ion-icon name ="close-circle"></ion-icon>
              <span className="sm-hide">{Object.entries(products)[2][1].title}</span> 
                </div>
                <div className="price sm-hide">${Object.entries(products)[2][1].price}</div>
                <div classsName="quantity">
                    <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>Productnumber</span> 
                        <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>  
                </div>
                 <div className="total">${Object.entries(products)[2][1].price}</div>
            </div>
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
            <div className="products-wrapper">
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
