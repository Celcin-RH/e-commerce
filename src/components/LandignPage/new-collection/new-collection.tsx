import React from 'react'
import './new-collection.css'
import ts1 from '../../../assets/images/teeshirt1.png'
import ts2 from '../../../assets/images/teeshirt2.png'
import ts3 from '../../../assets/images/teeshirt3.png'
import ts4 from '../../../assets/images/teeshirt4.png'
import news from '../../../assets/icons/new.png'

import ciseau from '../../../assets/icons/sciseau.svg'
import tshirt1 from '../../../assets/icons/t-shirt1.svg'
import tshirt2 from '../../../assets/icons/t-shirt2.svg'
import machine from '../../../assets/icons/machine.svg'

const NewCollection = () => {
  return (
    <div className='new-collection container'>
        <div className="top">
            <h1>New collection commerce</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ipsam soluta animi eveniet aliquam impedit!</p>
        </div>
        <div className="center">
            <div className="cards">
                <div className="card">
                    <div className='top'>
                        <img src={ts1} alt="ts1" />
                    </div>
                    <div className='bottom'>
                        <h3>tee-shirt #0012</h3>
                        <span>
                            <div className="price">12.000 Ar</div>
                            <div className="buy"><button>Acheter</button></div>
                        </span>
                    </div>
                    <img src={news} alt="new" className='news' />
                </div>
                <div className="card">
                    <div className='top'>
                        <img src={ts2} alt="ts2" />
                    </div>
                    <div className='bottom'>
                        <h3>tee-shirt #0012</h3>
                        <span>
                            <div className="price">12.000 Ar</div>
                            <div className="buy"><button>Acheter</button></div>
                        </span>
                    </div>
                    <img src={news} alt="new" className='news' />
                </div>
                <div className="card">
                    <div className='top'>
                        <img src={ts1} alt="ts1" />
                    </div>
                    <div className='bottom'>
                        <h3>tee-shirt #0012</h3>
                        <span>
                            <div className="price">12.000 Ar</div>
                            <div className="buy"><button>Acheter</button></div>
                        </span>
                    </div>
                    <img src={news} alt="new" className='news' />
                </div>
                <div className="card">
                    <div className='top'>
                        <img src={ts2} alt="ts2" />
                    </div>
                    <div className='bottom'>
                        <h3>tee-shirt #0012</h3>
                        <span>
                            <div className="price">12.000 Ar</div>
                            <div className="buy"><button>Acheter</button></div>
                        </span>
                    </div>
                    <img src={news} alt="new" className='news' />
                </div>
            </div>
        </div>

        {/* ---- absolut ----- */}
        <img className='img_abs ciseau' src={ciseau} alt="ciseau" />
        <img className='img_abs tss1' src={tshirt1} alt="tshirt1" />
        <img className='img_abs tss2' src={tshirt2} alt="tshirt2" />
        <img className='img_abs machine' src={machine} alt="machine" />
    </div>
  )
}

export default NewCollection