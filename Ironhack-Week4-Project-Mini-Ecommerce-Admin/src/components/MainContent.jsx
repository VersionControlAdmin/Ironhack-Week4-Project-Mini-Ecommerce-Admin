import React, {useState} from 'react';
import ecommerceDataSet from "../assets/products.json";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const MainContent = () => {
    const [ecommerceData, setEcommerceData] = useState(ecommerceDataSet);

    const deleteProduct = (id) => {
        setEcommerceData(ecommerceData.filter((element) => element.id !== id));
    }

    return (
        <div className="main-product-list">
            {ecommerceData.map((element)=> (
                <Link to={`/item/${element.id}`}>
                    <ProductCard key = {element.id} {...element} onDelete = {deleteProduct}/>
                </Link>
            ))}
        </div>
    );
};

export default MainContent;
