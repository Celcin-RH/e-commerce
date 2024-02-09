import React, { useEffect, useState } from 'react'
import './shoping.css'
import ts from '../../assets/images/teeshirt5.png'
import { useStore,useStoreCart } from '../stores/stores'
import paypal from '../../assets/icons/paypal.svg'
import mastercard from '../../assets/icons/mastercard.svg'
import Cards from './cards'

const Shopping = () => {

// ---- store zustand ---- //  
// Utilisez le hook useStore pour accéder à l'état et aux fonctions du store
const { isBooleanValue,setBooleanValue } = useStore();

// ----- use store zustand ---- //
const { selectedItems } = useStoreCart();

useEffect(() => {
    if (Object.keys(selectedItems).length === 0 && isBooleanValue) {
        setBooleanValue(false);
    }
}, [selectedItems, isBooleanValue]);

const price =  Object.values(selectedItems).reduce((accumulateur:any,element)=>{
    return accumulateur+element.price
},0)




  return (
    <div className={`shopping ${isBooleanValue ? 'showShopping' : '' } `}>
        <div className={`content_shopping ${isBooleanValue ? 'show_left':''}`}>
        <div className="top">
            <h3>Shopping cart</h3>
            <span onClick={() => setBooleanValue(!isBooleanValue)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.9902344 4.9902344 A 1.0001 1.0001 0 0 0 5.2929688 6.7070312L10.585938 12L5.2929688 17.292969 A 1.0001 1.0001 0 1 0 6.7070312 18.707031L12 13.414062L17.292969 18.707031 A 1.0001 1.0001 0 1 0 18.707031 17.292969L13.414062 12L18.707031 6.7070312 A 1.0001 1.0001 0 0 0 17.980469 4.9902344 A 1.0001 1.0001 0 0 0 17.292969 5.2929688L12 10.585938L6.7070312 5.2929688 A 1.0001 1.0001 0 0 0 5.9902344 4.9902344 z" fill="#9A9A9A" />
                </svg>
            </span>
        </div>
        <div className="center">
        <div className="cards">
  {Object.values(selectedItems).map((selectedItem) => (
    <Cards selectedItem = {selectedItem} key={selectedItem.id}/>
  ))}
</div>

        </div>
        <div className="bottom">
            <div className="top">
                <h3>Total : </h3>
                <p>{price} Ar</p>
            </div>
            <span className='payement_method'>
                <h3>Payement method</h3>
                <div className="payement">
                    <div className="cards">
                        <div className="card paypal">
                        <img src={paypal} alt="paypal" />
                        <small>Paypal</small>
                        </div>
                        <div className="card mastercard active">
                        <img src={mastercard} alt="mastercard" />
                        <small>Mastercard</small>
                        </div>
                    </div>
                </div>
            </span>
            <div className="payer">
                <button>Continue to checkout</button>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Shopping