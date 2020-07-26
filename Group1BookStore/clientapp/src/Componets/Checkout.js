import React from 'react';


function Checkout(props){
    

return(
    <div>
         <h4 className="Total">{props.basketProps.cartCost}</h4>
    </div>
)

}




export default Checkout;