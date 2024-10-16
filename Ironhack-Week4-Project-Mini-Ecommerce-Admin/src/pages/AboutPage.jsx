import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <div className ="about-container">
            <h2>About This Project</h2>
            <p>This project was created by Sebastian Luft as part of an Ironhack Project. It is just the basic MVP.</p>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}


export default AboutPage;