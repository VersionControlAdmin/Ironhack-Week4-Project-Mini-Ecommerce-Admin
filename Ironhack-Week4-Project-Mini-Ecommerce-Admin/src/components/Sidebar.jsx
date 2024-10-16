import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
return (
    <div className="sidebar">
        <ul>
            <li><Link to="/">Current Inventory</Link></li>
            <li><Link to="/additem">Add Products</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
);
};

export default Sidebar;
