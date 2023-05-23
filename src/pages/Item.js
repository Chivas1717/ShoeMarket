import React, {useContext, useEffect, useState} from 'react';
import Shoes from '../assets/test-item.jpg'
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {fetchOneItem} from "../http/itemApi";

const Item = () => {
  const [item, setItem] = useState({info: []})
  const [sizes, setSizes] = useState([])
  const {id} = useParams(); // після цього запит на сервер, отримаємо по id весь item
  useEffect(() => {
    fetchOneItem(id).then((data) => {
      setItem(data)
      setSizes(data.sizes.split('_'));
    })
  }, [])
  const {cart} = useContext(Context);

  const [selectedSize, setSelectedSize] = useState(0);

  return (
      <div className='container--main--item'>
        <div className='details mobile'>
          <div className='title'>{item.name}</div>
          <div className='price'>{item.price}₴<button>Порівняти ціну</button></div>
        </div>
        <div className='picture'><img alt='item' src={'http://localhost:7000/' + item.img}/></div>
        <div className='details'>
          <div className='title desktop'>{item.name}</div>
          <div className='price desktop'>{item.price}₴<button>Порівняти ціну</button></div>
          <h2>Обери розмір:</h2>
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
          <button disabled={!selectedSize} className='add-btn' onClick={() => cart.addItem({...item, selectedSize: selectedSize})}>
            Додати в кошик
          </button>
          <div className='description'>
            <div className='title'>Опис</div>
            <div className='text'>{item.info}</div>
          </div>
        </div>
      </div>
  );
};

export default Item;