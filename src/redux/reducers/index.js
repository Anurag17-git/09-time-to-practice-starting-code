import { combineReducers } from "redux";
import { productReducer, selectReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectReducer,
});

export default reducers;