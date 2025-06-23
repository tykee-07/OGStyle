// ✅ Bascet.jsx
import React from 'react';
import './Bascet.scss';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function Bascet() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleOrder = () => {
    toast.success('Заказ оформлен!');
    dispatch(clearCart());
  };

  const handleCancel = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="basket-empty">Корзина пуста</div>;
  }

  return (
    <div className="basket-list">
      {cartItems.map((item) => (
        <div key={`${item.id}-${item.size}`} className="basket-card">
          <div className="basket-img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="basket-info">
            <button
              className="basket-remove"
              onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size }))}
            >
              ×
            </button>
            <h3>{item.title}</h3>
            <p className="art">Артикул: 19666</p>
            <div className="lolpop">
              <p className="size">Размер: <b>{item.size} EUR</b></p>
              <p className="price">{item.price} ₽</p>
            </div>
            <div className="quantity-control">
              <button
                className='wol1'
                onClick={() => dispatch(decrementQuantity({ id: item.id, size: item.size }))}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className='wol2'
                onClick={() => dispatch(incrementQuantity({ id: item.id, size: item.size }))}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="basket-footer">
        <div className="promo-input">
          <input type="text" placeholder="12345678910" />
          <button>Применить</button>
        </div>
        <div className="total-price">
          <h2>Сумма к оплате: <span>{totalPrice} ₽</span></h2>
        </div>
        <div className="basket-actions">
          <button className="order" onClick={handleOrder}>Оформить заказ</button>
          <button className="clear" onClick={handleCancel}>Очистить корзину</button>
        </div>
      </div>
    </div>
  );
}

export default Bascet;
