import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './House.css';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const House = (props) => {
    const {key, landLordName,location,price, description, image, availabeRooms }= props.house;
    const element = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const element01 = <FontAwesomeIcon icon={faShoppingCart} />
    const elem = <FontAwesomeIcon icon={faDollarSign} />

    return (
        <div className='house-detalis'>
           
          




  <img src={image} alt="Avatar" className='img-control'/>
  <div class="container">
  <p className='landLordName'>landLordName : {landLordName}</p>
            <p>availabeRooms : {availabeRooms} rooms</p>
            <p>location : {element} {location}</p>
            <h4> price : {elem} {price} usd</h4>
            <p>description : {description}</p>
            <button 
            onClick={() => props.handleRentingSystem(props.house)}


            className='button-control'>
             {element01}   Add To Cart</button>
    
  </div>
</div>
           
            
      
    );
};

export default House;