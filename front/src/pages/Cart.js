import ClearCartIcon from '../assets/garbage-icon.svg'
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className='container--main--cart'>
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">Cart</h2>
          <div className="cart__clear">
            <img src={ClearCartIcon}/>
            <span>Clear cart</span>
          </div>
        </div>
        <div className="content__items">
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Total items: <b>4</b>
            </span>
            <span>
              Total price: <b>56000</b>
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              // onClick={onClickGoBack}
              to="/home"
              className="button go-back-btn">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Back to main page</span>
            </Link>
            <Link to="/checkout">
              <div className="button pay-btn">
                <span>Pay now</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart