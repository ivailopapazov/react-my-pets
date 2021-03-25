import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header id="site-header">
                <nav className="navbar">
                    <section className="navbar-dashboard">
                        <div className="first-bar">
                            <Link to="/">Dashboard</Link>
                            <Link className="button" to="#">My Pets</Link>
                            <Link className="button" to="/pets/create">Add Pet</Link>
                        </div>
                        <div className="second-bar">
                            <ul>
                                <li>Welcome, Pesho!</li>
                                <li><a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                            </ul>
                        </div>
                    </section>
                    <section className="navbar-anonymous">
                        <ul>
                            <li><a href="#"><i className="fas fa-user-plus"></i> Register</a></li>
                            <li><a href="#"><i className="fas fa-sign-in-alt"></i> Login</a></li>
                        </ul>
                    </section>
                </nav>
            </header>
            
        </>
    );
};

export default Header;


