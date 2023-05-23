import {Link} from "react-router-dom";
import emptyCartLogo from '../assets/empty-cart.png'
const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>Кошик пустий</h2>
      <p>
        Скоріш за все ви ще нічого не обрали(
        <br />
        Вертайтесь на головну, щоб знайти взуття мрії!
      </p>
      <img src={emptyCartLogo} alt="Empty cart" />
      <Link to="/home" className="button button--black">
        <span>Вперед за покупками!</span>
      </Link>
    </div>
  )
}

export default EmptyCart