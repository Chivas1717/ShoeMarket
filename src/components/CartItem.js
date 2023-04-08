import imageTest from '../assets/photo_2023-02-14_18-21-52.jpg'
import {useState} from "react";

const CartItem = () => {
  const [count, setCount] = useState(1)
  const onClickMinus = () => {
    setCount(count - 1)
  }

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickRemove = () => {
    setCount(0)
  }

  return (
    <div className='cart__item__wrapper'>
      <h3 className='first'>Yeezy Boost</h3>
      <div className="cart__item">
        <div className="cart__item-img">
          <img src={imageTest} alt="Item" />
        </div>
        <div className='cart__item-details'>
          <div className="cart__item-info">
            <h3 className='second'>Yeezy Boost</h3>
            <p>
              Розмір: 38
            </p>
          </div>
          <div className="cart__item-count">
            <div
              className="circle-btn minus"
              onClick={onClickMinus}>
              -
            </div>
            <b>{count}</b>
            <div
              className="circle-btn plus"
              onClick={onClickPlus}>
              +
            </div>
          </div>
          <div className="cart__item-price">
            <b>{14000 * count}</b>
          </div>
          <div className="cart__item-remove">
            <div className="button button--outline button--circle" onClick={onClickRemove}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
                />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem