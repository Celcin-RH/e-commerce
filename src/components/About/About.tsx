import React from 'react'
import './About.css'
import test from '../../assets/images/test.jpg'
import test2 from '../../assets/images/test2.jpg'
import Footer from '../LandignPage/footer/footer'

const About = () => {
  return (
    <div className='About_'>
      <div className="top"></div>
      <div className="bottom container">
        <div className="card">
          <div className="left">
            <h3>Our Story</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores facilis dolore aut, asperiores, voluptatem nobis quisquam eius voluptate inventore totam ducimus magni consectetur doloremque excepturi cupiditate! Laudantium, perferendis sapiente!</p>
          </div>
          <div className="right">
            <div className="img"><img src={test} alt="test" /></div>
          </div>
        </div>
        <div className="card">
        <div className="right">
            <div className="img"><img src={test2} alt="test2" /></div>
          </div>
          <div className="left">
            <h3>Our Story</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores facilis dolore aut, asperiores, voluptatem nobis quisquam eius voluptate inventore totam ducimus magni consectetur doloremque excepturi cupiditate! Laudantium, perferendis sapiente!</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About