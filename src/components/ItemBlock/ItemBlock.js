import TestItem from '../../assets/test-item.jpg'
import {Link, useNavigate} from "react-router-dom";

const ItemBlock = ({item}) => {
  const navigate = useNavigate();

  const bgColor = item.brandId === 3 ? 'puma-color' : item.brandId === 2 ? 'adidas-color' : ''
  return (
    <div className='item-block-wrapper'>
      <Link to={`${'item/' + item.id}`}><div className='item-block'>
        <div className={`item-block__image__wrapper ` + bgColor} ><img src={'http://localhost:7000/' + item.img} className='item-block__image' alt='shoes photo'/></div>
        <button className='add'>Додати в кошик</button>
        <div className='item-block__title'>{item.name.length < 24 ? item.name : item.name.slice(0, 24) + '...'}</div>
        <div className='item-block__price'>{item.price}₴</div>
      </div></Link>
    </div>

  )
}

export default ItemBlock