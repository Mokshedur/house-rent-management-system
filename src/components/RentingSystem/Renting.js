import React, { useEffect, useState } from 'react';
import House from '../House/House';
import HouseCart from '../HouseCard/HouseCart';
import './Renting.css';

const Renting = () => {
    const[renting, setRenting] =useState([]);
    const [houseCart, setHouseCart] = useState([]);
    
    useEffect(()=>{
       fetch('./house.json')
       .then(res=>res.json())
       .then(data=>setRenting(data))



    },[])

    const handleRentingSystem=  (house)=>{
        console.log(house);
        const newHouseCart = [...houseCart, house];
        setHouseCart(newHouseCart);

    }

   

    return (
        <div className='houses-container'>
            <div className='house-contain'>
                {
                    renting.map(house=><House
                    key = {house.key}
                    house = {house}
                    handleRentingSystem = {handleRentingSystem}


                    

                    >

                    </House>
                    )
                   
                }
        
            </div>
            <div className='card-container'>
              
               <HouseCart houseCart ={houseCart} ></HouseCart>
               
                
                

            </div>

            
            
        </div>
    );
};

export default Renting;