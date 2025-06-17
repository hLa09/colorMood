
import './Navbar.css';

const Navbar = function Navbar() {
  return (
    <nav className="nav">
      {/* Logo on the left */}
      <div className='logo'>
        <img src="../../assets/Logo.svg" alt='Website Logo'></img>
      </div>
      

      {/* Buttons on the right */}
      <button className="signInBtn">Sign-In</button>

    </nav>
  );
};

export default Navbar;