import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [{
    id: 'q1',
    author: 'Anurag',
    text: 'Cricket is a nice game to play'
},
{
    id: 'q2',
    author: 'Anurag-Developer',
    text: 'Work hard to place in top product based companies'
}]

const QuoteDeatils = () => {
    const param = useParams();
    const quote = DUMMY_QUOTES.find(quote => { return quote.id === param.quoteId});

    if(!quote) {
        return <NoQuotesFound />
    }

    return <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`/quotes/${param.quoteId}/comments`}>
            <Comments />
        </Route>
    </Fragment>
    }
    
    export default QuoteDeatils;