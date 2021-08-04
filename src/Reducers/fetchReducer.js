import { CHANGE_ASKED, FETCH_FAILED, FETCH_SUCCEEDED } from '../Constatnts/constants';
import { randomInd } from "../Helpers/ReturnStuffs";
import { colors } from "../Assets/repo"

let initState = {
    quotesArr : [{quote : "j'obtiens toujours tout ce que je desire",
    author : "Persévérance NSILOU",}],
    message : "",
    error : "",
    colorArr : [],
    color : colors[randomInd(colors.length)],
};




let fetchReducer = (state = initState, action) =>{
    switch(action.type) {
        case FETCH_SUCCEEDED :
            let quotesArr1 = action.payload;
            let ind1 = quotesArr1.length;
            let randObj1 = quotesArr1[randomInd(ind1)];
            let colArr = colors;
            let curCol = colArr[randomInd(colArr.length)]
            return {
                ...state,
                quotesArr : quotesArr1,
                colorArr : colArr,
                message : "Fetch Succeded",
                quote : randObj1.quote,
                author : randObj1.author,
                color : curCol
            };
        case FETCH_FAILED : 
            let err = action.payload;
            return {
                ...state,
                message : "Sorry, we encountered a problem, please check your API, lol !!!",
                error : err
            };
        case CHANGE_ASKED :
            let quotesArr2 = action.payload.quoteArray;
            let ind2 = quotesArr2.length;
            let randObj2 = quotesArr2[randomInd(ind2)];
            let colArr2 = action.payload.colArray;
            let curCol2 = colArr2[randomInd(colArr2.length)]
            return {
                ...state,
                quotesArr : quotesArr2,
                quote : randObj2.quote,
                author : randObj2.author,
                colorArr : colArr2,
                color : curCol2
            }
    default :
        return state;
    };
};

export default fetchReducer;

