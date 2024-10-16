import React from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetailsPage(props) {
    const { itemId } = useParams();
    console.log("itemdId ", itemId);
    console.log(props.itemsData);
    const foundItem = props.itemsData.find((singleItem) => singleItem.id === parseInt(itemId));
    console.log(foundItem);
    const {id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images} = foundItem;
    return (
        <div>
            <h1>{title}</h1>
            <img src={thumbnail} alt={title} />
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Discount Percentage:</strong> {discountPercentage}%</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>Stock:</strong> {stock}</p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Category:</strong> {category}</p>
            <div>
                <h3>Images:</h3>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`${title} ${index + 1}`} />
                ))}
            </div>
            <Link to="/">Back to Items List</Link>
        </div>
    )
}

export default ItemDetailsPage