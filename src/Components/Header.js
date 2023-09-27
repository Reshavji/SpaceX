import React, { useState, useEffect, useRef } from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useStateValue } from '../Context/StateProvider';
import Logo from '../Images/logo.png';
import { auth } from '../config/firebase';
import { Link } from 'react-router-dom';
import { Dialog } from '@material-ui/core';
import './Header.css';
import Login from './Login';
import Sidebar from './Sidebar/Sidebar'; // Import the Sidebar component
import MenuIcon from '@material-ui/icons/Menu'; // Import the hamburger icon

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility

  const handleLoginButtonClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User logged out successfully!");
        // Clear user data from the global state by setting user to null
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const handleAdminClick = () => {
    setShowUserOptions(!showUserOptions); // Toggle the visibility of user options div
  };

  const handleUserOptionsMouseEnter = () => {
    if (user) {
      setShowUserOptions(true);
    }
  };

  const handleUserOptionsMouseLeave = () => {
    setShowUserOptions(false);
  };

  
  const scrollTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolledUp(true);
        clearTimeout(scrollTimer.current);
        scrollTimer.current = setTimeout(() => {
          setIsScrolledUp(false);
        }, 3000); // Adjust the delay as needed (e.g., 500ms)
      } else {
        setIsScrolledUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isScrolledUp ? 'scrolled' : ''}`}>
      <div className='header-main'>
      <div className='header-items'>
        <div>
          <Link to="/">
            <img className='logo' src={Logo} alt='spaceX' />
          </Link>
        </div>
        <nav>
          <ul>
            <Link to="/rockets"><li>Rockets</li></Link>
            <Link to="/capsules"><li>Capsules</li></Link>
          </ul>
        </nav>
        <div
          className='avatar'
          onMouseEnter={handleUserOptionsMouseEnter}
          onMouseLeave={handleUserOptionsMouseLeave}
        >
          {user ? (
            <div className='admin' onClick={handleAdminClick}>
              <PersonOutlineIcon className="cart-icon" />
              <span className='header-text'>{user.displayName || user.name}</span>
            </div>
          ) : (
            <button className='login-btn' onClick={handleLoginButtonClick}>
              Login
            </button>
          )}
          {showUserOptions && user && (
            <div className="user-options">
              <button className='logout-btn' onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
       
       
      </div>
       {/* Hamburger icon */}
      <div className='hamburger-icon' onClick={() => setShowSidebar(true)}>
        <MenuIcon fontSize='medium'/>
      </div>
      </div>
      

      {/* Sidebar */}
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />

      {/* Login Modal */}
      <Dialog open={showLoginModal} onClose={handleCloseLoginModal}>
        <Login handleCloseLoginModal={handleCloseLoginModal} />
      </Dialog>
    </div>
  );
}

export default Header;
