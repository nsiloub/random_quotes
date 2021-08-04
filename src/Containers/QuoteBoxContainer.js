import React from 'react';
import { connect } from 'react-redux';
import QuoteBox from '../Components/QuoteBox';
import  apiCall, { /*newItems*/ }  from '../Actions/index'
import { CHANGE_ASKED } from '../Constatnts/constants';

export class QuoteBoxContainer extends React.Component {
    render() {
        return (
            <QuoteBox />
        )
    }
};

const mapStateToProps = (state) => {
    return {
        quote :state.fetchReducer.quote,/*: randArr.quote,*/
        author : state.fetchReducer.author,/*: randArr.author    */
        quotesArr : state.fetchReducer.quotesArr,
        message : state.fetchReducer.message,
        error : state.fetchReducer.error,
        colorArr : state.fetchReducer.colorArr,
        color : state.fetchReducer.color

    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        //newQuote : (array, index) => {dispatch(changeItems(array, index))}
        fetchItems : ()=>{
            dispatch(apiCall())
        },
        changeItems : (quoteArray, colArray) =>{
            dispatch({type : CHANGE_ASKED, payload : {quoteArray, colArray}})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox);