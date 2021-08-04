import  { changeItems }  from "../Actions/index";
import { randomInd } from  "../Helpers/ReturnStuffs"
import {  CHANGE_ASKED } from '../Constatnts/constants';
let init = {
        quote : "" ,
        author : "",
        styles : [],
};
let changeReducer = (state = init, action) => {
    switch(action) {
        case CHANGE_ASKED : 
            return {
                ...state,
                ...action.payload
            }
        default :
            return state
    
    };
};

export default changeReducer();