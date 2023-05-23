import ClearCartIcon from '../assets/garbage-icon.svg'
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../index";
import EmptyCart from "../components/EmptyCart";

const Cart = observer((props) => {
  const {cart} = useContext(Context)
  // console.log(cart.cartItems[0])
  return (
    <div className='container--main--cart'>
      {
        cart.totalCartCount ? <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">Cart</h2>
            <div onClick={() => cart.clearCart()} className="cart__clear">
              <img src={ClearCartIcon}/>
              <span>Clear cart</span>
            </div>
          </div>
          <div className="content__items">
            {
              cart.cartItems.map(obj => <CartItem item={obj} key={obj.id}/>)
            }
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
            <span>
              Total items: <b>{cart.totalCartCount}</b>
            </span>
              <span>
              Total price: <b>{cart.totalCartPrice}</b>
            </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
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
                <span>Продовжити покупки</span>
              </Link>
              <Link to="/checkout">
                <div className="button pay-btn">
                  <span>Оплатити</span>
                </div>
              </Link>
            </div>
          </div>
        </div> : <EmptyCart />
      }
    </div>
  )
})

export default Cart