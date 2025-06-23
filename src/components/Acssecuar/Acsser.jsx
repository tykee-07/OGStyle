import React, { useEffect, useState } from 'react';
import { APIclient } from '../../axios/APIcliend';
import './Acsser.scss';
import bestlike from '../Beset/svg/best-like.svg';
import Menu from '../Menu/Menu';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../../redux/productSlice';
import { useNavigate } from 'react-router-dom';

function Acsser() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await APIclient.get(`?category=aksessuary`);
        setList(res.data);
        setFilteredList(res.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
    fetchData();
  }, []);

  const handleClick = (item) => {
    dispatch(setSelectedProduct(item));
    navigate(`/info/${item.id}`);
  };

  const handleApplyFilters = (filters) => {
    const { min, max, brands, categories } = filters;
    const newList = list.filter(item =>
      item.price >= min &&
      item.price <= max &&
      (brands.length === 0 || brands.includes(item.brand || '')) &&
      (categories.length === 0 || categories.includes(item.category || ''))
    );
    setFilteredList(newList);
  };

  return (
    <div className="wowl">
      {/* Фильтр по брендам, категории и цене */}
      <Menu onApply={handleApplyFilters} />

      <div className="odesh">
        <div className="pok">
          <span>Сортировка</span>
          <select>
            <option value="default">По умолчанию</option>
            <option value="new">Новый</option>
            <option value="popular">Популярные</option>
          </select>
        </div>

        {filteredList.map((item) => (
          <div key={item.id} className="odesh-kros" onClick={() => handleClick(item)}>
            <img src={item.img} alt={item.title} />
            <div className="info-odesh">
              <div className="title-odesh">
                <h4>{item.title}</h4>
                <p>Артикул: {item.article || '19666'}</p>
              </div>
              <div className="like-odesh">
                <h3>{item.price} ₽</h3>
                <img src={bestlike} alt="like" />
              </div>
            </div>

            <div className="odesh-kros2">
              <img src={item.img} alt={item.title} />
              <div className="info-odesh2">
                <div className="title2-odesh">
                  <h4>{item.title}</h4>
                  <p>Артикул: {item.article || '19666'}</p>
                </div>
                <div className="like2-odesh">
                  <h3>{item.price} ₽</h3>
                  <img src={bestlike} alt="like" />
                </div>
                <div className="eur-odesh">
                  {[35, 36, 37, 38, 39, 40, 41].map((size) => (
                    <p key={size}>{size} eur</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acsser;
