import QuoteList from "../components/quotes/QuoteList";

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

const Allquotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default Allquotes;