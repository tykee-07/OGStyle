// ✅ Menu.jsx — ПОЛНАЯ ФИЛЬТРАЦИЯ (цена, бренд, категория)
import React, { useEffect, useState } from 'react';
import './Menu.scss';
import axios from 'axios';

function Menu({ onApply }) {
  const min = 500;
  const max = 15000;

  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(7000);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    async function fetchFilters() {
      try {
        const res = await axios.get('https://6824116865ba05803398c659.mockapi.io/project');
        const data = res.data;

        const uniqueBrands = [...new Set(data.map(item => item.brand))];
        const uniqueCategories = [...new Set(data.map(item => item.category))];

        setBrands(uniqueBrands);
        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Ошибка при получении фильтров:', err);
      }
    }
    fetchFilters();
  }, []);

  const handleMin = (e) => {
    const val = Math.min(+e.target.value, maxValue - 100);
    setMinValue(val);
  };

  const handleMax = (e) => {
    const val = Math.max(+e.target.value, minValue + 100);
    setMaxValue(val);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleApply = () => {
    if (onApply) {
      onApply({
        min: minValue,
        max: maxValue,
        brands: selectedBrands,
        categories: selectedCategories,
      });
    }
  };

  const handleReset = () => {
    setMinValue(1000);
    setMaxValue(7000);
    setSelectedBrands([]);
    setSelectedCategories([]);
    if (onApply) {
      onApply({ min: 1000, max: 7000, brands: [], categories: [] });
    }
  };

  return (
    <div className="bos-odesh">
      <div className="slider-wrapper">
        <h2>Цена</h2>
        <div className="values">
          <span>{minValue} ₽</span>
          <span>{maxValue} ₽</span>
        </div>
        <div className="sliders">
          <input type="range" min={min} max={max} value={minValue} onChange={handleMin} />
          <input type="range" min={min} max={max} value={maxValue} onChange={handleMax} />
        </div>
      </div>

      <div className="brand-filter">
        <h2>Бренды</h2>
        <div className="scroll">
          {brands.map((brand, index) => (
            <div key={index} className="filter-item2">
              <input
                type="checkbox"
                onChange={() => handleBrandChange(brand)}
                checked={selectedBrands.includes(brand)}
              />
              <label>{brand}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="category-filter">
        <h2>Категории</h2>
        <div className="scroll">
          {categories.map((cat, index) => (
            <div key={index} className="filter-item2">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(cat)}
                checked={selectedCategories.includes(cat)}
              />
              <label>{cat}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="clik">
        <button className='klic1' onClick={handleApply}>Применить</button>
        <button className='klic2' onClick={handleReset}>Сбросить</button>
      </div>
    </div>
  );
}

export default Menu;
