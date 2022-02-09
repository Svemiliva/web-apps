import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <Link to="/home">
                <h3>Hacker News</h3>
            </Link>
        </header>
    )
}