import React, {useState} from 'react';
import ecommerceDataSet from "../assets/products.json";
import ProductCard from "./ProductCard";

const MainContent = () => {
    const [ecommerceData, setEcommerceData] = useState(ecommerceDataSet);

    const deleteProduct = (id) => {
        setEcommerceData(ecommerceData.filter((element) => element.id !== id));
    }

    return (
        <div className="main-product-list">
            {ecommerceData.map((element)=> (
                <ProductCard key = {element.id} {...element} onDelete = {deleteProduct}/>
            ))}
        </div>
    );
};

export default MainContent;
