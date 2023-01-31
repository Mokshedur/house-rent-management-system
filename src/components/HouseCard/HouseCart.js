
import React from 'react';
import './HouseCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


const HouseCart = (props) => {
    const {houseCart}= props;
    let total = 0
    let name = 0 ;
  
    for(const cart of houseCart){
        total = total+cart.price;
    name = name + ' '+cart.landLordName;
   
    

    
    }
    return (
        <div>
            <h3>House renting Details</h3>
            <h5>Item Orderes : {props.houseCart.length}</h5>
            
            
            <p>Total :<FontAwesomeIcon icon={faDollarSign} /> {total} usd</p>
            <p>You Select <span className='boss-name'>, {name},</span>  House. Enjoy!!!</p>

        <button className='button-click'>Go for renting a house</button>
            
        </div>
    );
};

export default HouseCart;
