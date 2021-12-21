import React, { Suspense} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
//import Allquotes from "./pages/Allquotes";
//import QuoteDeatils from "./pages/QuoteDetails";
//import Quotes from "./pages/Quotes";

function App() {

  const Allquotes = React.lazy(() => import("./pages/Allquotes"));
  const QuoteDeatils = React.lazy(() => import("./pages/QuoteDetails"));
  const Quotes = React.lazy(() => import("./pages/Quotes"));

  return (
    <Layout>
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }>
      <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <Quotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDeatils />
      </Route>
      <Route path="/Allquotes">
        <Allquotes />
      </Route>
      <Route path="/*">
        <p>No pages found!!!</p>
      </Route>
    </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
