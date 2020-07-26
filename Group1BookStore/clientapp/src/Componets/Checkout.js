import React from 'react';
import Paypal from './payPal';


function Checkout(props){
    

return(
    <div className="checkout">
        <h1></h1>

         
         <Paypal price={10} description={'Description'} />
    </div>
)

}




export default Checkout;

//<h4 className="Total">{props.basketProps.cartCost}</h4>