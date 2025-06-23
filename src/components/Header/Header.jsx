import "./Header.scss";
import { Link, useNavigate } from 'react-router-dom';
import logo from "./svg/logo.svg";
import tel from "./svg/tel.svg";
import info from "./svg/info.svg";
import kor from "./svg/kor.svg";
import prof from "./svg/prof.svg";
import like from "./svg/like.svg";
import search from "./svg/search.svg";
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from '../../redux/searchSlice';
import axios from 'axios';
import { useState } from 'react';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await axios.get('https://6824116865ba05803398c659.mockapi.io/project');
      const filtered = res.data.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchText.toLowerCase())
      );
      dispatch(setSearchResults(filtered));
      navigate('/search');
    } catch (error) {
      console.error('Ошибка при поиске:', error);
    }
  };

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
            <Link to="/infoKros">
          <div className="knop cart-icon">
              <img src={kor} alt="" />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
            </Link>
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
          <Link to="/about">Кросовки</Link>
          <Link to="/contact">Одежда</Link>
          <Link to="/regicter">Аксесуары</Link>
          <Link to="/regicter">Отзывы</Link>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="поиск"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch}>
            <img src={search} alt="поиск" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
