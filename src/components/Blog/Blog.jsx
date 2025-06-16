import React from 'react'
import "./Blog.scss"
import blokros1 from "./img/blokros1.png"
import blokros2 from "./img/blokros2.png"
import eay from "./svg/eay.svg"
function Blog() {
  return (
    <div className='bl1'>
      <h1>Блог</h1>
      <div className="blog">
        <div className="b1">
            <div className="blog-info">
                <img src={blokros1} alt="" />
                <div className="kol">
                    <h2>КРОССОВКИ NIKE AIR MAX 270</h2>
                <p>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.</p>
                <div className="data">
                    <p>15 августа 2019</p>
                    <div className="eay">
                        <img src={eay} alt="" />
                        <p>4 416</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="blog-info">
                <img src={blokros2} alt="" />
                <div className="kol">
                    <h2>Кроссовки Nike Air Max 720 Saturn</h2>
                <p>Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.</p>
                <div className="data">
                    <p>15 августа 2019</p>
                    <div className="eay">
                        <img src={eay} alt="" />
                        <p>4 416</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="b2">
            <div className="blog-blac">
                <h2>Подпишись на рассылку и получи скидку  до 10 %  </h2>
                <div className="blog-wite">
                    <input type="text"
                    placeholder='Введите Ваш email' />
                    <button>Подписаться</button>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
