import React from 'react'
import './reception.css'
import teeshirt1 from '../../../assets/images/teeshirt1.png'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Reception = () => {
  

  return (
    <motion.div
    initial={{y:30,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{
      delay:.3,
      duration:.6
    }}
    className='reception container'>
        <div className="contain-text"><h1>Hire the world's</h1></div>
        <div className="contain-text"><h1>Top design here</h1></div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique sapiente
            veritatis a laboriosam velit architecto, distinctio sed suscipit dolor quam rem nulla
            eius possimus cupiditate nihil fuga dolorum accusantium.
        </p>
        <span className='log'>
        <Link to={"/singup"}><button className='singin'><span>S'inscrire</span></button></Link>
        <Link to={"/login"}><button className='log-in'><span>Se connectez</span></button></Link>
        </span>

        <div className="security">
          <div className="content">
            <small>100% Secure payment</small>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M24.048828 2 A 1.50015 1.50015 0 0 0 22.998047 2.3847656C22.998047 2.3847656 15.490168 9 6.5 9 A 1.50015 1.50015 0 0 0 5 10.5L5 22.759766C5 29.437814 8.0894135 40.426402 23.417969 46.882812 A 1.50015 1.50015 0 0 0 24.582031 46.882812C39.910586 40.426403 43 29.437814 43 22.759766L43 10.5 A 1.50015 1.50015 0 0 0 41.5 9C32.509832 9 25.001953 2.3847656 25.001953 2.3847656 A 1.50015 1.50015 0 0 0 24.048828 2 z M 24 5.4277344C26.062966 7.0863651 32.111257 11.337189 40 11.875L40 22.759766C40 28.502023 37.793444 37.765684 24 43.826172C10.206556 37.765684 8 28.502023 8 22.759766L8 11.875C15.888743 11.337189 21.937034 7.0863651 24 5.4277344 z M 31.470703 17.986328 A 1.50015 1.50015 0 0 0 30.439453 18.439453L21.5 27.378906L17.560547 23.439453 A 1.50015 1.50015 0 1 0 15.439453 25.560547L20.439453 30.560547 A 1.50015 1.50015 0 0 0 22.560547 30.560547L32.560547 20.560547 A 1.50015 1.50015 0 0 0 31.470703 17.986328 z" fill="#9A9A9A" />
              </svg>
            </span>
          </div>
        </div>

        <div className="gradient1">
        </div>

        <img src={teeshirt1} alt="teeshirt1" className='teeshirt1' />
        <img src={teeshirt1} alt="teeshirt2" className='teeshirt2' />

    </motion.div>
  )
}

export default Reception