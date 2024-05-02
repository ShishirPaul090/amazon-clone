import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import './Header.css'; // Move CSS import to the top
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue(); // Destructuring the state value correctly
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to="/">
        <img className="header_logo" src="https://www.shutterstock.com/image-vector/amazon-logo-editorial-icon-isolated-260nw-2313339121.jpg" alt="Amazon Logo" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon"/>
        {/* Logo */}
      </div>
      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>Hello {!user?'Guest':user.email}</span>
            <span className='header_optionLineTwo'>{user ? 'Sign out' : 'Sign in'}</span>
          </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineOne'>Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingBasketIcon/>
          <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
