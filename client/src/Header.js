import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <header>
            <a href="/" className="logo">My Blog</a>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="">Register</Link>
            </nav>
        </header>
    );
}