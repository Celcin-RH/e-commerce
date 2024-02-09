import React,{CSSProperties, FC} from 'react'
import './review-client.css'
import user from '../../../assets/icons/user.png'
import star from '../../../assets/icons/star.svg'
import quote from '../../../assets/icons/quote.svg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}
  
  const SampleNextArrow: FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style, display: "block", background: "#3CCF88", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow: FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#3CCF88", borderRadius:"50%" }}
        onClick={onClick}
      />
    );
  };


const Review = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay:true,
        autoplaySpeed:5000,
        responsive: [
          {
            breakpoint: 1123,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 734,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };




  return (
    <div className='review-client container'>
        <div className="top">
            <h1>Reviews</h1>
            <p>Commentaire des clients</p>
        </div>
        <div className="bottom">
            <div className="cards">
                
                <Slider {...settings} >
                    <div className="card">
                        <img className='user' src={user} alt="user" />
                        <img src={quote} alt="quote" className='quote' />
                        <h3>Celicin</h3>
                        <div className="star">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aliquid eligendi quaerat repellendus ratione magni doloribus? Veritatis nostrum id quo.</i>
                    </div>
                    <div className="card">
                        <img className='user' src={user} alt="user" />
                        <img src={quote} alt="quote" className='quote' />
                        <h3>Celicin</h3>
                        <div className="star">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aliquid eligendi quaerat repellendus ratione magni doloribus? Veritatis nostrum id quo.</i>
                    </div>
                    <div className="card">
                        <img className='user' src={user} alt="user" />
                        <img src={quote} alt="quote" className='quote' />
                        <h3>Celicin</h3>
                        <div className="star">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aliquid eligendi quaerat repellendus ratione magni doloribus? Veritatis nostrum id quo.</i>
                    </div>
                    <div className="card">
                        <img className='user' src={user} alt="user" />
                        <img src={quote} alt="quote" className='quote' />
                        <h3>Celicin</h3>
                        <div className="star">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aliquid eligendi quaerat repellendus ratione magni doloribus? Veritatis nostrum id quo.</i>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Review