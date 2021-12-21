import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm"

const Quotes = () => {
    const history = useHistory();
    const quoteHandler = (quoteData) => {
        console.log(quoteData);
        history.push("./Allquotes");
    }

    return <QuoteForm onAddQuote={quoteHandler}/>
};

export default Quotes;