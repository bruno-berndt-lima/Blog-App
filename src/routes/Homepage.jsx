import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <span>•</span>
                <span>Blogs and Articles</span>
            </div>
        </div>
    )
}

export default Homepage