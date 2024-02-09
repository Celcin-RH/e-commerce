import React from 'react'
import './LandignPage.css'
import Reception from './reception/reception'
import About from './about/about'
import Product from './products/products'
import Review from './review-client/review-client'
import Footer from './footer/footer'

const LandignPage = () => {
  return (
    <div className='LandignPage'>
        <section className='landing-page'>
        <Reception/>
        </section>
        <About/>
        <Product/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default LandignPage