import React, { useState } from 'react';

function ProductCard ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, onDelete}) {
    return (
        <div className="productcard">
            <div className = "productcard-imgcontainer">
                <img className="productcard-thumbnail" src={thumbnail} alt={title} />
            </div>
            <div className ="productcard-general-info-container">
                <h3>Title: {title}</h3>
                <p>Description: {description}</p>
                <p>Price: ${price}</p>
                <p>Discount: {discountPercentage}%</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
                <p>Brand: {brand}</p>
                <p>Category: {category}</p>
                <button className = "productcard-delete-item-button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default ProductCard