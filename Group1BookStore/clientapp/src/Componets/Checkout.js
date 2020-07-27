import React from 'react';
import {connect} from 'react-redux'; 
import Paypal from './payPal';



function Checkout({basketProps}){
    

return(
    <div className="checkout">
        <h1></h1>

         
         <Paypal price={basketProps.cartCost} description={'Description'} />
    </div>
)

}




const mapStateToProps = state => ({
    basketProps:  state.basketState
});

export default connect(mapStateToProps)(Checkout);

//<h4 className="Total">{props.basketProps.cartCost}</h4>