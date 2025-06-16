import React from 'react'
import "./Brend.scss"
import porsh from "./img/porsh.png"
import newbalan from "./img/newbalan.png"
import nike from "./img/nike.png"
import puma from "./img/puma.png"
import vans from "./img/vans.png"
import reebok from "./img/reebok.png"
import left from "./svg/left.svg"
import right from "./svg/right.svg"
import { useState } from 'react';

const brands=[
    {id:1, src: porsh, alt:"Porsh"},
    {id:2, src: newbalan, alt:"NewBalans"},
    {id:3, src: nike, alt:"Nike"},
    {id:4, src: puma, alt:"Puma"},
    {id:5, src: vans, alt:"Vans"},
    {id:6, src: reebok, alt:"Reebok"},
]
function Brend() {
  const visibleCount = 4;

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % brands.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      (prev - 1 + brands.length) % brands.length
    );
  };

  const visibleBrands = brands
    .slice(startIndex, startIndex + visibleCount)
    .concat(
      startIndex + visibleCount > brands.length
        ? brands.slice(0, (startIndex + visibleCount) % brands.length)
        : []
    );

  return (
    <div className="brand-carousel">
      <h2>Бренды</h2>
      <div className="brand-track">
          <img className='next'  onClick={handlePrev} src={left} alt="" />
        {visibleBrands.map((brand) => (
          <div key={brand.id} className="brand-slide">
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
        <img className='next' onClick={handleNext} src={right} alt="" />
      </div>
    </div>
  );
};


export default Brend
