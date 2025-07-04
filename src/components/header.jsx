import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="JobPortal Logo" height="40" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/applications">My Applications</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;