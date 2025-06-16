import "./Header.scss"
import { Link } from 'react-router-dom'
import logo from "./svg/logo.svg"
import tel from "./svg/tel.svg"
import info from "./svg/info.svg"
import kor from "./svg/kor.svg"
import prof from "./svg/prof.svg"
import like from "./svg/like.svg"
import search from "./svg/search.svg"
function Header() {
  return (
    <>
      <div className="aksh">
        <h2>Только три дня  скидка -30% на всё!</h2>
      </div>
      <div className="header-top container">
        <div className="dan">
          <div className="tel">
            <img src={tel} alt="" />
            <p>+7 951 999 28 34 </p>
          </div>
          <div className="tel">
            <img src={info} alt="" />
            <p>info@stageboxbrand.ru</p>
          </div>
        </div>
        <div className="log">
          <img src={logo} alt="" />
        </div>
        <div className="rid-header">
          <div className="knop">
            <img src={kor} alt="" />
          </div>
          <div className="knop">
            <img src={prof} alt="" />
          </div>
          <div className="knop">
            <img src={like} alt="" />
          </div>
        </div>
      </div>
      <div className="header-but container">
        <ul>
      <Link to="/">Главная</Link>
      <Link to="about">Кросовки</Link>
      <Link to="contact">Одежда</Link>
      <Link to="regicter">Аксесуары</Link>
      <Link to="regicter">Отзывы</Link>
      </ul>
      <div className="search">
        <input type="text"
        placeholder="поиск" />
        <button>
          <img src={search} alt="" />
        </button>
      </div>
      </div>
    </>
  )
}

export default Header
