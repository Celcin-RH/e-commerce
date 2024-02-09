import React,{useState,useEffect} from 'react'
import { useStoreCart } from '../stores/stores';

interface CardsProps {
    selectedItem: any;
  }

  const Cards: React.FC<CardsProps> = ({ selectedItem }) => {
    
    const { removeItemFromCart } = useStoreCart();

const [priceParPiece, setPriceParPiece] = useState<number>(0);
const [quantity, setQuantity] = useState<number>(1);

const handlePlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
}


const handleMinus = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
}


useEffect(() => {
  // Mettez à jour le prix par pièce à chaque changement de quantité
  setPriceParPiece(selectedItem.price * quantity);
}, [selectedItem, quantity]);


  return (
    <div className="card" key={selectedItem.id}>
      <div className="left">
        <img src={selectedItem.imageSrc} alt={selectedItem.title} />
        <span>
          <p>{selectedItem.title}</p>
          {selectedItem.description && <small>{selectedItem.description}</small>}
        </span>
      </div>
      <div className="right">
        <div className="action">
          <span onClick={handlePlus}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path d="M14.970703 2.9726562 A 2.0002 2.0002 0 0 0 13 5L13 13L5 13 A 2.0002 2.0002 0 1 0 5 17L13 17L13 25 A 2.0002 2.0002 0 1 0 17 25L17 17L25 17 A 2.0002 2.0002 0 1 0 25 13L17 13L17 5 A 2.0002 2.0002 0 0 0 14.970703 2.9726562 z" fill="#9A9A9A"></path>
            </svg>
          </span>
          <span>{quantity}</span>
          <span onClick={handleMinus}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path d="M5 13 A 2.0002 2.0002 0 1 0 5 17L25 17 A 2.0002 2.0002 0 1 0 25 13L5 13 z" fill="#9A9A9A" />
            </svg>
          </span>
        </div>
        <div className="price">
          <h4>{priceParPiece} Ar</h4>
        </div>
        <div className="cancel" onClick={() => removeItemFromCart(selectedItem.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5.9902344 4.9902344 A 1.0001 1.0001 0 0 0 5.2929688 6.7070312L10.585938 12L5.2929688 17.292969 A 1.0001 1.0001 0 1 0 6.7070312 18.707031L12 13.414062L17.292969 18.707031 A 1.0001 1.0001 0 1 0 18.707031 17.292969L13.414062 12L18.707031 6.7070312 A 1.0001 1.0001 0 0 0 17.980469 4.9902344 A 1.0001 1.0001 0 0 0 17.292969 5.2929688L12 10.585938L6.7070312 5.2929688 A 1.0001 1.0001 0 0 0 5.9902344 4.9902344 z" fill="#9A9A9A" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Cards