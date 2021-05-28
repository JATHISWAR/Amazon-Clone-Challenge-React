import React from 'react';
import './Home.css';
import Product from './Product.js';
function Home() {
    return (
     <div className="home">
         <div className="home_container">
         <img 
         className="home_image"
         src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/Changestore/SMP_Desktop_2x_2._CB669743293_.jpg" 
          width="1500px" />
         <div className="home_row">
         <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS + Cellular, 44mm) - Blue Aluminium Case with Deep Navy Sport Band"
            price={50000.00}
            rating={4.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71j12hyvEVL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Marshall Uxbridge Home Voice Speaker with Amazon Alexa Built-in,White"
            price={21999.00}
            rating={3.5}
            image="https://images-na.ssl-images-amazon.com/images/I/81WIcjaGp2L._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Wildcraft Face Mask, Red_Trizi, 3 Pieces (Pack of 3)"
            price={300.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61X8flaBmGL._SL1094_.jpg"
          />
        
         </div>
         <div className="home_row">
         <Product
            id="12321341"
            title="The Theory of Everything: The Origin and Fate of the Universe"
            price={300.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
            price={39999.00}
            rating={3.5}
            image="https://images-na.ssl-images-amazon.com/images/I/61PDbUd1VaL._SL1500_.jpg"
          />
         </div>
         <div className="home_row">
         <Product
            id="610383381"
            title="Vandelay Pulse Oximeter Fingertip - Blood Oxygen Meter SpO2 & Pulse Monitor - FDA, CE - Oxymeter (Grey)"
            price={2400.00}
            rating={3.5}
            image="https://images-na.ssl-images-amazon.com/images/I/61auG640f2S._SL1500_.jpg"
          />
          <Product
            id="11538094"
            title="OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
            price={26999.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SL1500_.jpg"
          />
          <Product
            id="21538094"
            title="Amazon Brand - Solimo XXXL Bean Bag Filled With Beans (Green with Yellow Piping)"
            price={2099.00}
            rating={2.5}
            image="https://images-na.ssl-images-amazon.com/images/I/81WoYTStgAL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Amazon Brand - Solimo Checkered Jar Set of 18"
            price={549.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91IpehOCi2L._SL1500_.jpg"
          />
         </div>
       </div>
     </div>         
       
    );
}

export default Home
