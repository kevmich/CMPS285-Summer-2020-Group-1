import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, GET_DATA } from '../actions/types';
import axios from "axios";
import React, {useState} from 'react';






const initialState = {

    basketNumbers: 0 ,
    cartCost: 0,
    products: [

    ]
}


export default(state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let  productSelected = {}
            
            productSelected.numbers += 1; //numbers is from product on video
            productSelected.inCart = true;
            productSelected.product = action.payload;
            console.log(productSelected);
            let data;

            let newProducts = state.products
            newProducts.push(productSelected)
            return{
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + action.payload.price, //price

                products: newProducts,
                
            }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }

        case GET_DATA:

            console.log("get data");

            axios({
                method: 'get',
                url: 'api/Book/get-all',
                data:{
                   
                }
                }).then((res)=> {
                    console.log(res.data);
                     data = res.data;
                })

                
            return{
                ...state,

                product: data,

            }

        case INCREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}
            productSelected.numbers += 1;

                return{
                    ...state,
                    cartCost: state.cartCost + state.products[0].price, //.price
                    products:{
                        ...state.products,
                        [action.payload]: productSelected,
                    }
                }
        case DECREASE_QUANTITY:
            productSelected = {...state.products[action.payload]}
                let newCartCost = 0;

            if(productSelected.numbers === 0){
                productSelected.numbers = 0;
                newCartCost = state.cartCost
            } else{
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload]; //.price
            }
            
            return{
                ...state,
                cartCost: newCartCost,
                    products:{
                        ...state.products,
                        [action.payload]: productSelected,
                    }
            } 
        default:
            return state;
    }
    
}
