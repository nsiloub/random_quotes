import axios from "axios";
import { /*DEFAULT_QUOTE, CHANGE_ASKED,*/ FETCH_SUCCEEDED, FETCH_FAILED } from '../Constatnts/constants';
//import { randomInd } from "../Helpers/ReturnStuffs";

/*
export  function newItems (arr){
    let ind = arr.length
    let randObj = arr[randomInd(ind)];
    return {
        type : CHANGE_ASKED,
        payload :{
            quote : randObj.quote ,
            author : randObj.author ,
        }
        payload : randObj 

    }

};
*/


let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

export default function apiCall (){
    return (dispatch) => {
        return axios.get(url)
            .then (res =>{
                dispatch({
                    type : FETCH_SUCCEEDED,
                    payload : res.data.quotes
                })
            })
            /*.then(res =>{
                let array= res.data.quotes
                dispatch(newItems(array))
            })*/
            .catch(err =>{
                dispatch({
                    type : FETCH_FAILED,
                    payload : err
                })
            })
    };
};


