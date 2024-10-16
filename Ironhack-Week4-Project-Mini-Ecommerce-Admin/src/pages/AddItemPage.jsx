import { Link } from "react-router-dom";
import { useState } from "react";
import ecommerceDataSet from "../assets/products.json";

function AddItemPage() {
    const [newId, setNewId] = useState(Math.max(...ecommerceDataSet.map(item => item.id)) + 1);
    const [title, setTitle] = useState("Default Title");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [images, setImages] = useState("");
    const [id, setId] = useState(newId);

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id,
            title,
            description,
            price,
            discountPercentage,
            rating,
            stock,
            brand,
            category,
            thumbnail,
            images: images.split(","),
        };

        const existingItemIndex = ecommerceDataSet.findIndex(item => item.id === id);
        if (existingItemIndex !== -1) {
            ecommerceDataSet[existingItemIndex] = newItem;
        } else {
            ecommerceDataSet.push(newItem);
        }

        console.log(newItem);
        const updatedNewId = Math.max(...ecommerceDataSet.map(item => item.id)) + 1;
        setNewId(updatedNewId);
        setId(updatedNewId);
    };

    return (
        <form className="add-item-container" onSubmit={handleSubmit}>
            <span>Add/Modify product: To change, enter a valid existing id</span>
            <label>Id<input name="id" type="number" placeholder="Id" value={id} onChange={handleInputChange(setId)} /></label>
            <label>Title<input name="title" type="text" placeholder="Title" value={title} onChange={handleInputChange(setTitle)} /></label>
            <label>Description<input name="description" type="text" placeholder="Description" value={description} onChange={handleInputChange(setDescription)} /></label>
            <label>Price<input name="price" type="number" placeholder="Price" value={price} onChange={handleInputChange(setPrice)} /></label>
            <label>Discount Percentage<input name="discountPercentage" type="number" placeholder="Discount Percentage" value={discountPercentage} onChange={handleInputChange(setDiscountPercentage)} /></label>
            <label>Rating<input name="rating" type="number" step="0.01" placeholder="Rating" value={rating} onChange={handleInputChange(setRating)} /></label>
            <label>Stock<input name="stock" type="number" placeholder="Stock" value={stock} onChange={handleInputChange(setStock)} /></label>
            <label>Brand<input name="brand" type="text" placeholder="Brand" value={brand} onChange={handleInputChange(setBrand)} /></label>
            <label>Category<input name="category" type="text" placeholder="Category" value={category} onChange={handleInputChange(setCategory)} /></label>
            <label>Thumbnail<input name="thumbnail" type="text" placeholder="Thumbnail URL" value={thumbnail} onChange={handleInputChange(setThumbnail)} /></label>
            <label>Images<input name="images" type="text" placeholder="Images URLs" value={images} onChange={handleInputChange(setImages)} /></label>
            <button type="submit" onClick={handleSubmit}>
                Add Item - Submit
            </button>
            <Link to="/">Go Back Home</Link>
        </form>
    );
}

export default AddItemPage;
