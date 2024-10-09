import logo from '../assets/E-commerce_store_logo_for_admins.png';

function Homepage () {
    return (
    <>
        <nav>
            <img src={logo} alt="E-commerce Store Logo" class="logo"/>
            <span>Placeholder Current Choice</span>
        </nav>
        <div class ="main-screen">
            <div class="sidebar">
                <ul>
                    <li>Current Inventory</li>
                    <li>Add Products</li>
                    <li>About</li>
                </ul>
            </div>
            <div class = "main-content-container">
                <h1>Placeholder Main Content</h1>
            </div>
        </div>
        
        <div class="footer">
            <a href="https://github.com/VersionControlAdmin/Ironhack-Week4-Project-Mini-Ecommerce-Admin">Github-Repo</a>         
        </div>
    </>
    )
}

export default Homepage;