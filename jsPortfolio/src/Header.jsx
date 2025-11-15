import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        padding: '1rem',
        marginBottom: '2rem',
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            margin: 0,
            padding: 0,
          }}
        >
          {/* Left Group: Search + Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <input
              className="search-input"
              type="text"
              placeholder="searching ..."
              style={{ padding: '0.5rem', borderRadius: '4px', border: 'none' }}
            />
            <li>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                Contact
              </Link>
            </li>
          </div>

          {/* Right Group: Social Icons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="fa fa-linkedin" style={{ color: 'white', fontSize: '1.5rem' }}></a>
            <a href="#" className="fa fa-github" style={{ color: 'white', fontSize: '1.5rem' }}></a>
            <a href="#" className="fa fa-twitter" style={{ color: 'white', fontSize: '1.5rem' }}></a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;