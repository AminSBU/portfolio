// Header.jsx - Remove the Router imports since they're not used here
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ 
      backgroundColor: 'transparent', 
      color: 'white', 
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-github"></a>
          <a href="#" class="fa fa-twitter"></a>
          <input className='search-input' type='text' placeholder='searching ...'></input>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        </ul>


      </nav>
    </header>
  );
}

export default Header;