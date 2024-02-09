import React, { useState,useEffect } from 'react';
import './Shop.css';
import Slider from 'react-slider';
import {motion} from 'framer-motion'
import { useStoreCart,useStoreDetailProduct } from '../stores/stores';
import SkeletonArticle from '../Skeletons/SkeletonArticle';
import Footer from '../LandignPage/footer/footer';

interface CartItem {
  id: number;
  imageSrc:string;
  title:string;
  description:string;
  price:number;
  genre:string
}


const Shop: React.FC = () => {
  const MIN = 0; // Replace with your minimum value
  const MAX = 100; // Replace with your maximum value

  const [values, setValues] = useState<any>([MIN, MAX]);

  const [data, setData] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await import('../LandignPage/products/data');
        setData(jsonData.Data);
      } catch (error) {
        console.error('Erreur lors du chargement des données', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }
    };
  
    fetchData();
  }, []);

  const handleClick = (data: CartItem) => {
    // Vérifiez si l'article est déjà dans le panier
    if (selectedItems[data.id]) {
      // Si oui, supprimez-le du panier
      removeItemFromCart(data.id);
    } else {
      // Sinon, ajoutez-le au panier
      addItemToCart(data.id, { ...data, loading: true, quantity: 1 });
  
    }
  };


  const handleShopDetail = (data:any) =>{
    setisBoolDetail(!isBoolDetail)
    getAllDetail(data)
  }
  
// ----- use store zustand ---- //
const { selectedItems, addItemToCart, removeItemFromCart } = useStoreCart();
const {isBoolDetail,setisBoolDetail,getAllDetail} = useStoreDetailProduct()


  return (
    <div className='Shop'>
      <section className='container'>
        <div className="left">
          <div className="categorie">
            <h2>Categories</h2>
            <ul>
              <li>Tout</li>
              <li>Nouveau</li>
              <li>Solde</li>
              <li>Enfant</li>
            </ul>
          </div>
          <div className="shopByPrice">
            <h2>Shop By Price</h2>
            <span>
              <h3>Price <span>Range</span></h3>
              <Slider className={'slider'} value={values} min={MIN} max={MAX} onChange={setValues} />
              <div className={`values`}><span>Price :</span> <span>${values[0]}</span>-<span>${values[1]}</span> </div>
              <div>
                <small>Current Range : ${values[1] - values[0]}</small>
                <button>Filter</button>
              </div>
            </span>
          </div>
          <div className="shopByColor">
            <h2>Shop By Color</h2>
            <div className="colors">
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
            </div>
          </div>
        </div>
        <div className="right">
        <div className="cards">

{loading ? (
    [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonArticle theme='' key={n} />)
  ) : (
    data.map((value, index) => (
      <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="card">
        <div className="top">
          <img src={value.imageSrc} alt={value.imageSrc} />
          <span onClick={()=>handleShopDetail(value)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M7.5 4C2.105469 4 0.046875 8.289063 0.046875 8.289063L-0.0546875 8.5L0.046875 8.710938C0.046875 8.710938 2.105469 13 7.5 13C12.894531 13 14.953125 8.710938 14.953125 8.710938L15.050781 8.5L14.953125 8.289063C14.953125 8.289063 12.894531 4 7.5 4 Z M 7.5 5C9.4375 5 11 6.5625 11 8.5C11 10.4375 9.4375 12 7.5 12C5.5625 12 4 10.4375 4 8.5C4 6.5625 5.5625 5 7.5 5 Z M 3.941406 5.777344C3.359375 6.535156 3 7.472656 3 8.5C3 9.527344 3.359375 10.464844 3.941406 11.222656C2.023438 10.269531 1.242188 8.753906 1.117188 8.5C1.242188 8.246094 2.023438 6.730469 3.941406 5.777344 Z M 11.058594 5.777344C12.976563 6.730469 13.757813 8.246094 13.882813 8.5C13.757813 8.753906 12.976563 10.269531 11.058594 11.222656C11.640625 10.464844 12 9.527344 12 8.5C12 7.472656 11.640625 6.535156 11.058594 5.777344 Z M 7.5 7C6.671875 7 6 7.671875 6 8.5C6 9.328125 6.671875 10 7.5 10C8.328125 10 9 9.328125 9 8.5C9 7.671875 8.328125 7 7.5 7Z" fill="#9A9A9A" />
            </svg>
          </span>
        </div>
        <div className="bottom">
          <div className="top">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
          <button
           className={`bottom ${selectedItems[value.id]?.loading ? 'loading' : ''}`}
           onClick={() => handleClick(value)}
          >
            <span>
              <div className="price">{value.price} Ar</div>
            </span>
            <span>
              {
                !selectedItems[value.id]?.loading ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M14.970703 2.9726562 A 2.0002 2.0002 0 0 0 13 5L13 13L5 13 A 2.0002 2.0002 0 1 0 5 17L13 17L13 25 A 2.0002 2.0002 0 1 0 17 25L17 17L25 17 A 2.0002 2.0002 0 1 0 25 13L17 13L17 5 A 2.0002 2.0002 0 0 0 14.970703 2.9726562 z" fill="#9A9A9A" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                  <path d="M22.566406 4.730469L20.773438 3.511719C20.277344 3.175781 19.597656 3.304688 19.265625 3.796875L10.476563 16.757813L6.4375 12.71875C6.015625 12.296875 5.328125 12.296875 4.90625 12.71875L3.371094 14.253906C2.949219 14.675781 2.949219 15.363281 3.371094 15.789063L9.582031 22C9.929688 22.347656 10.476563 22.613281 10.96875 22.613281C11.460938 22.613281 11.957031 22.304688 12.277344 21.839844L22.855469 6.234375C23.191406 5.742188 23.0625 5.066406 22.566406 4.730469Z" fill="#9A9A9A" />
                </svg>
              }

            </span>
            
          </button>
        </div>
      </motion.div>
    ))
  )}
</div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Shop;
