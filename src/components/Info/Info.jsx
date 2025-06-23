// ✅ Info.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { APIclient } from '../../axios/APIcliend';
import './Info.scss';

const tabs = [
  { label: 'Описание', key: 'description' },
  { label: 'Оплата и доставка', key: 'delivery' },
  { label: 'Обмен и возврат', key: 'exchange' },
  { label: 'Гарантии', key: 'warranty' },
  { label: 'О товаре', key: 'about' },
];

function Info() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await APIclient.get(`https://6824116865ba05803398c659.mockapi.io/project/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке товара:', error);
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (selectedSize) setSizeError(false);
  }, [selectedSize]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      toast.warning('Пожалуйста, выберите размер!');
      return;
    }
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      size: selectedSize,
    }));
    toast.success('Товар добавлен в корзину');
  };

  if (!product) return <div>Загрузка...</div>;

  const tabContent = {
    description: (
      <div className="info-product">
        <p>{product.description}</p>
        <ul><li>Легкие</li><li>Удобные</li><li>Дышащие</li></ul>
      </div>
    ),
    delivery: (<div className="info-product"><p>Доставка в течение 3–5 дней. Оплата при получении.</p></div>),
    exchange: (<div className="info-product"><p>Обмен в течение 14 дней. Без проблем и вопросов.</p></div>),
    warranty: (<div className="info-product"><p>Гарантия от производителя: 6 месяцев.</p></div>),
    about: (<div className="info-product"><p>Категория: {product.category}. Бренд: {product.brand}. Модель: Presto.</p></div>),
  };

  return (
    <div className="kros-info">
      <h2>{product.title}</h2>
      <p className="art">Артикул: 19666</p>
      <div className="info-one-product">
        <img src={product.img} alt={product.title} />
        <div className="info-size">
          <h3>{product.price} ₽</h3>
          <div className={`size ${sizeError ? 'size-error' : ''}`}>
            <span>ВЫБЕРИТЕ РАЗМЕР</span>
            <div className="size-nub">
              {[35, 36, 37, 38, 39, 40, 41].map((size) => (
                <p
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? 'active-size' : ''}
                >
                  {size} eur
                </p>
              ))}
            </div>
            <button className="kak">как определить размер?</button>
          </div>
          <div className="knop2">
            <button className="kn1" onClick={handleAddToCart}>В корзину</button>
            <button className="kn2">Купить сейчас</button>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tab-buttons">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={tab.key === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">{tabContent[activeTab]}</div>
      </div>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default Info;
