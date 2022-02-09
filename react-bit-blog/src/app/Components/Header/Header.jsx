import './Header.css';
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-secondary">
                <Link className="bitBlog" to="/"><span className="navbar-brand mb-0 ms-5 fw-bold fs-1">BIT BLOG</span></Link>
                <div className="links me-5 fs-3">
                    <Link to="/"> Home </Link>
                    <Link to="/authors"> Authors </Link>
                    <Link to="/about"> About</Link>
                </div>
            </nav>
        </header>
    )
}
