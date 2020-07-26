import {GET_NUMBERS_BASKET, GET_DATA} from './types';
import Axios from 'axios';

export const getNumbers = () => {
    return (dispatch) =>{
        console.log("Getting all Basket Numbers");

        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}

export const getData = () => {
    return(dispatch) =>{
        console.log("getting book data");

        dispatch({
            type: GET_DATA,
            payload: null,
        })
    }
}
