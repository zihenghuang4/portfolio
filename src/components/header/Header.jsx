import React from 'react';
import './header.css';
import Connect from './Connect';
// import PROFILE from '../../assets/profile2-bg-removed.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi, this is</h5>
        <h1>Ziheng Huang</h1>
        <h5 className='text-light'>(zi-hen)</h5>
        <Connect />
        <Socials />
        {/* <div className="profile">
          <img src={PROFILE} alt="" />
        </div> */}
      </div>
    </header>
  )
};

export default Header;