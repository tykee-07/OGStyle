import React from 'react'
import "./Footer.scss"
import logo from "../Header/svg/logo.svg"
import insta from "./svg/insta.svg"
import vk from "./svg/vk.svg"
import wat from "./svg/wat.svg"
import tel from "./svg/tel.svg"
import email from "./svg/email.svg"
import lol1 from "./svg/lol1.svg"
import lol2 from "./svg/lol2.svg"
import lol3 from "./svg/lol3.svg"
function Footer() {
  return (
    <div className='footer'>
      <img className='lolp' src={logo} alt="" />
        <div className="sviz">
          <div className="messag">
            <img src={insta} alt="" />
            <img src={vk} alt="" />
            <img src={wat} alt="" />
          </div>
          <div className="emal">
            <div className="tel">
            <img src={tel} alt="" />
            <span>+7 951 999 28 34 </span>
          </div>
          <div className="tel">
            <img src={email} alt="" />
            <span>info@stageboxbrand.ru </span>
          </div>
          </div>
        </div>
            <div className="meni">
              <ul>
                <li>Доставка</li>
                <li>Гарантии</li>
                <li>Таблица размеров</li>
                <li>Обмен и возврат</li>
                <li>Вопросы и ответы</li>
              </ul>
            </div>

          <div className="poisk">
            <div className="po">
              <div className="prof">
              <img src={lol1} alt="" />
            </div>
            <div className="prof">
              <img src={lol2} alt="" />
            </div>
            </div>
            <div className="inp">
              <input type="text" 
              placeholder='Поиск'/>
              <button><img src={lol3} alt="" /></button>
            </div>
          </div>


    </div>
  )
}

export default Footer
