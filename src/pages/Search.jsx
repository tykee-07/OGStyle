import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Search() {
  const results = useSelector((state) => state.search.results);
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/info/${item.id}`);
  };

  return (
    <div className="container">
      <h2>Результаты поиска</h2>
      {results.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <div className="product-grid">
          {results.map((item) => (
            <div
              key={item.id}
              className="odesh-kros"
              onClick={() => handleClick(item)}
            >
              <img src={item.img} alt={item.title} />
              <div className="info-odesh">
                <div className="title-odesh">
                  <h4>{item.title}</h4>
                  <p>Артикул: {item.article || '19666'}</p>
                </div>
                <div className="like-odesh">
                  <h3>{item.price} ₽</h3>
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
      )}
    </div>
  );
}

export default Search;
