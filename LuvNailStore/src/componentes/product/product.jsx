import img1 from "../../assets/img/fon2.jpg"
import React from "react"
import axios from "axios";
import { useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const product = () => {

    const createPreference = async () => {

        try { 
            const response = await axios.post("http://localhost:3000/create_preference",{
              title: "bananita",
              quantity:1,
              price:100,
            });
      
            const {id} = response.data;
            return id;
            
          } catch (error) {
            
            console.log(error);
          }
        };
      

    const[preferenceId, setPreferenceId] = useState(null);

        
     initMercadoPago('YOUR_PUBLIC_KEY', {
      locale:"es-AR",
      });

        

    const handleBuy = async() => {
        const id = await createPreference();
        if(id){
          setPreferenceId(id);
        }
       }

    return (

        <>
        
        <div className="card-producto-container">
            <div className="card-product">
                <div className="card">

                <img src={img1} alt="product Image" />
                <h3>Imagen</h3>
                <p className="price"> 100$</p>
                <button className="btn btn-primary" onClick={handleBuy}>Comprar</button>
                {preferenceId && <Wallet initialization={{preferenceId: preferenceId}} />}

                </div>
            </div>
        </div>

        
        
        
        
        </>
    )

}

export default product;