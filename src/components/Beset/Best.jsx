import React from 'react'
import "./Best.scss"
import bestlike from "./svg/best-like.svg"
import pro1 from "./img/pro1.png"
import lol1 from "./svg/lol1.svg"
import lol2 from "./svg/lol2.svg"
import lol3 from "./svg/lol3.svg"
function Best() {
  return (
    <>
    <div className='best'>
    <h1>Лучшие из лучших</h1>
      <div className="pro-kros">
        <img src={pro1} alt="" />
        <div className="info-text">
          <div className="title">
             <h4>СЛАНЦЫ ADIDAS YEEZY SLIDE</h4> 
           <p>Артикул 19666 </p>
          </div>
          <div className="like">
           <h3>3290 ₽</h3>
            <img src={bestlike} alt="" />
          </div>
          </div>
        <div className="pro-kros2">
        <img src={pro1} alt="" />
        <div className="info-text2">
          <div className="title2">
             <h4>СЛАНЦЫ ADIDAS YEEZY SLIDE</h4> 
           <p>Артикул 19666 </p>
          </div>
          <div className="like2">
           <h3>3290 ₽</h3>
            <img src={bestlike} alt="" />
          </div>
          <div className="eur">
            <p>35 eur</p>
            <p>36 eur</p>
            <p>37 eur</p>
            <p>38 eur</p>
            <p>39 eur</p>
            <p>40 eur</p>
            <p>41 eur</p>
          </div>
          </div>
        </div>
        </div>

        <div className="odzv">
          <div className="pop1">
            <div className="lol1">
              <img src={lol1} alt="" />
          </div>
              <h3>Гарантируем качество товара</h3>
          </div>
          <div className="pop1">
            <div className="lol2">
            <img src={lol2} alt="" />
          </div>
            <h3>Поможем  подобрать размер</h3>
          </div>
          <div className="pop1">
            <div className="lol3">
            <img src={lol3} alt="" />
          </div>
            <h3>Быстро доставим покупку</h3>
          </div>
        </div>


        

        </div>
        
      {/* -------------- */}

    </>
  )
}

export default Best
