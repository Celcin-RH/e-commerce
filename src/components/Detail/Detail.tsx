import React from 'react'
import './Detail.css'
import imgs from '../../assets/images/test2.jpg'
import star from '../../assets/icons/star.svg'
import facebook from '../../assets/icons/fb.png'
import twiter from '../../assets/icons/twiter.png'
import instagram from '../../assets/icons/instagram.png'
import { useStoreDetailProduct,useStoreCart } from '../stores/stores'

interface CartItem {
    id: number;
    imageSrc:string;
    title:string;
    description:string;
    price:number;
    genre:string
}

const Detail = () => {

const {isBoolDetail,setisBoolDetail, data} = useStoreDetailProduct()
const {selectedItems,removeItemFromCart,addItemToCart} = useStoreCart()

const handleDetail = () => {
    setisBoolDetail(!isBoolDetail)
}

console.log(data)

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

return (
  <div className={`Detail ${isBoolDetail ? 'showDetail' : ''}`} onClick={handleDetail}>
      <div className={`content_detail ${isBoolDetail ? 'showContent' : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className="left">
              <img src={imgs} alt="img" />
          </div>
          <div className="right">
              <h3>Boutique Sill Dress</h3>
              <div className="star">
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
                  <span><img src={star} alt="star" /></span>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo voluptatem distinctio dolore, debitis cum maiores eos consequuntur ipsa accusantium aliquid dignissimos commodi dolorum eius iste tempora dolorem architecto amet!</p>
              <a href="#">View Full Product Detail</a>
              <button
                className={`bottom ${data.length > 0 && selectedItems[data[0]?.id]?.loading ? 'loading' : ''}`}
                onClick={() => data.length > 0 && handleClick(data[0])}
              >
                <span>
                    {data.length > 0 && (
                      <div className="price">{data[0].price} Ar</div>
                    )}
                </span>
                <span className='add_rmv'>
                    {data && data.length > 0 && !selectedItems[data[0]?.id]?.loading ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                        <path d="M14.970703 2.9726562 A 2.0002 2.0002 0 0 0 13 5L13 13L5 13 A 2.0002 2.0002 0 1 0 5 17L13 17L13 25 A 2.0002 2.0002 0 1 0 17 25L17 17L25 17 A 2.0002 2.0002 0 1 0 25 13L17 13L17 5 A 2.0002 2.0002 0 0 0 14.970703 2.9726562 z" fill="#9A9A9A" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                        <path d="M22.566406 4.730469L20.773438 3.511719C20.277344 3.175781 19.597656 3.304688 19.265625 3.796875L10.476563 16.757813L6.4375 12.71875C6.015625 12.296875 5.328125 12.296875 4.90625 12.71875L3.371094 14.253906C2.949219 14.675781 2.949219 15.363281 3.371094 15.789063L9.582031 22C9.929688 22.347656 10.476563 22.613281 10.96875 22.613281C11.460938 22.613281 11.957031 22.304688 12.277344 21.839844L22.855469 6.234375C23.191406 5.742188 23.0625 5.066406 22.566406 4.730469Z" fill="#9A9A9A" />
                    </svg>
                    )}
                </span>
            
                </button>
              <div className="shar">
                  <h4>Share with Friend</h4>
                  <div>
                      <span><img src={facebook} alt="facebook" /></span>
                      <span><img src={twiter} alt="twitter" /></span>
                      <span><img src={instagram} alt="instagram" /></span>
                  </div>
              </div>
          </div>
          <span className="cancel" onClick={()=>setisBoolDetail(!isBoolDetail)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path d="M7 4C6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688L4.2929688 6.2929688C3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312L11.585938 15L4.2929688 22.292969C3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031L6.2929688 25.707031C6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031L15 18.414062L22.292969 25.707031C22.682969 26.098031 23.317031 26.098031 23.707031 25.707031L25.707031 23.707031C26.098031 23.316031 26.098031 22.682969 25.707031 22.292969L18.414062 15L25.707031 7.7070312C26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688L23.707031 4.2929688C23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688L15 11.585938L7.7070312 4.2929688C7.5115312 4.0974687 7.255875 4 7 4 z" fill="#9A9A9A" />
              </svg>
        </span>
      </div>
  </div>
)
}

export default Detail