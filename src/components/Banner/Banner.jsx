import React from 'react'
import "./Banner.scss"
import kros1 from "./img/kros1.png"
import fon from "./img/fon.png"
import kros2 from "./img/kros2.png"
import kros3 from "./img/kros3.png"
import strel from "./svg/strel.svg"
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
         <div className="ban">
        <div className="ban-riad">
        <h1>Adidas Nite Jogger</h1>
        <p>Городские кроссовки в ярком стиле 80-х</p>
        <button>Смотреть все</button>
      </div>
      <div className="ban-left">
        <img className='fon' src={fon} alt="" />
        <img className='kros1' src={kros1} alt="" />
      </div>
      </div>
      <div className="bos-vid">
        <div className="vid">
        <div className="brend">
            <p>Adidas Yeezy Boost</p> 
        </div>

        <img className='k1' src={kros2} alt="" />
        <button>
            <img src={strel} alt="" />
        </button>
      </div>
      <div className="vid">
        <div className="brend">
            <p>Nike Air Max   </p> 
        </div>
        <img className='k3' src={kros3} alt="" />
        <button>
            <img src={strel} alt="" />
        </button>
      </div>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="ban">
        <div className="ban-riad">
        <h2>Adidas Yeezy Boost </h2>
        <p>Городские кроссовки в ярком стиле 80-х</p>
        <button>Смотреть все</button>
      </div>
      <div className="ban-left">
        <img className='fon' src={fon} alt="" />
        <img className='kros2' src={kros2} alt="" />
      </div>
      </div>
      <div className="bos-vid">
        <div className="vid">
        <div className="brend">
            <p>Adidas Yeezy Boost</p> 
        </div>

        <img className='k2' src={kros1} alt="" />
        <button>
            <img src={strel} alt="" />
        </button>
      </div>
      <div className="vid">
        <div className="brend">
            <p>Nike Air Max   </p> 
        </div>
        <img className='k3' src={kros3} alt="" />
        <button>
            <img src={strel} alt="" />
        </button>
      </div>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <div className="ban">
        <div className="ban-riad">
        <h1>Nike Air Max   </h1>
        <p>Городские кроссовки в ярком стиле 80-х</p>
        <button>Смотреть все</button>
      </div>
      <div className="ban-left">
        <img className='fon' src={fon} alt="" />
        <img className='kros3' src={kros3} alt="" />
      </div>
      </div>
      <div className="bos-vid">
        <div className="vid">
        <div className="brend">
            <p>Adidas Yeezy Boost</p> 
        </div>

        <img className='k1' src={kros2} alt="" />
        <button>
            <img src={strel} alt="" />
        </button>
      </div>
      <div className="vid">
        <div className="brend">
            <p>Adidas Yeezy Boost</p> 
        </div>
        <img className='k2' src={kros1} alt="" />
        <button>
            <img src={strel} alt="" />
        </button>
      </div>
      </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
    </>
  )
}

export default Banner
