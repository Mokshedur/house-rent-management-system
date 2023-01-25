import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';






const Header = () => {
    const element02 = <FontAwesomeIcon icon={faDollarSign} />
    return (
        <div>
            <h2 className='head01'>This is MY Awesome Rental  House ManageMent System </h2>
            <h3>For a rent house  total budget : {element02}100 to {element02}500 usd </h3>
          <nav className='navControler'>
            <a href="/Home">Home</a>
            <a href="/House-details">House-details</a>
            <a href="/Location">Location</a>
            <a href="/Rental-details">Rental-details</a>

          </nav>
        </div>
    );
};

export default Header;