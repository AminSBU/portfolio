// Header.jsx - Remove the Router imports since they're not used here
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ 
      backgroundColor: '#333', 
      color: 'white', 
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <h1>My Awesome Website</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;