import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state);
    
    const fetchProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        dispatch(setProducts(data));
    }
    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;