import React, {useState} from 'react';
import Shoes from '../assets/test-item.jpg'
import {useParams} from "react-router-dom";

const Item = () => {
  const {id} = useParams(); // після цього запит на сервер, отримаємо по id весь item

  const sizes = [37, 38, 39, 40, 41, 42, 43, 44, 45]
  const [selectedSize, setSelectedSize] = useState(0);

  return (
      <div className='container--main--item'>
        <div className='picture'><img alt='item' src={Shoes}/></div>
        <div className='details'>
          <div className='title'>Jordan 450</div>
          <div className='price'>15000<button>Порівняти ціну</button></div>
          <div className='title'>Обери розмір:</div>
          <div className='sizes'>
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => selectedSize === size ? setSelectedSize(0) : setSelectedSize(size)}
                className={size === selectedSize ? 'size selected' : 'size'}
              >
                {size}
              </div>
            ))}
          </div>
          {/*чорна магія, сорі*/}
          <button disabled={!selectedSize} className='add-btn'>
            Додати в кошик
          </button>
          <div className='description'>
            <div className='title'>Опис</div>
            <div className='text'>Натхненний оригінальним Yeezy boost 350, це видання середнього розміру зберігає культовий вигляд, який вам подобається, а добірні кольори та якісні матеріали надають йому виразної ідентичності.</div>
          </div>
        </div>
      </div>
  );
};

export default Item;