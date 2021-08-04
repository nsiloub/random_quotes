
import React from 'react';
import { randomInd } from '../Helpers/ReturnStuffs';
class QuoteBox extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    };

    componentDidMount() {
        this.props.fetchItems();

    };
    handleClick() {
        
        this.props.changeItems(this.props.quotesArr, this.props.colorArr);
    };
    render () {
        let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
        let ind = randomInd(this.props.quotesArr.length);
        let { quote, author} = this.props.quotesArr[ind];
        let { color } = this.props;
        return(
            <div id="quote-box" className="quote-boxe">
                <div className='content' style={{backgroundColor : color}}>
                    <div id="text" className="quote">{`"${quote}"`}</div>
                    <div id="author" className="author" >{`--- ${author} ---`}</div>
                </div>
                <div className="controls">
                    <button id="new-quote" onClick={this.handleClick} className="new-quote"><i className="fas fa-forward"></i> New Qote</button>
                    <div className='tweet'><a id="tweet-quote" href={`${twitterLink + quote + author}`} target="_blank">{<i className="fab fa-twitter"></i> }tweet this quote</a></div>
                </div>
            </div>
        )
    };
};
export default QuoteBox
