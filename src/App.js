import {BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     <Switch>
     <Route path="/" exact component={ProductListing} />
     <Route path="/product/:productId" exact component={ProductDetail} /> 
     <Route>404 not found!!!</Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
