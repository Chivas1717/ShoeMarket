import TestItem from '../../assets/test-item.jpg'
import {Link, useNavigate} from "react-router-dom";

const ItemBlock = ({item}) => {
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate()
  }

  return (
    <div className='item-block-wrapper'>
      <Link to={`${'item/' + item.id}`}><div className='item-block'>
        <div className='item-block__image__wrapper' ><img src={TestItem} className='item-block__image' alt='shoes photo'/></div>
        <button className='add'>Додати в кошик</button>
        <div className='item-block__title'>{item.name}</div>
        <div className='item-block__price'>{item.price}₴</div>
      </div></Link>
    </div>

  )
}

export default ItemBlock