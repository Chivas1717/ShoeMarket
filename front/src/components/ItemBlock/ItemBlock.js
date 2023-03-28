import TestItem from '../../assets/test-item.jpg'
import {Link, useNavigate} from "react-router-dom";

const ItemBlock = ({item}) => {
  const navigate = useNavigate();
  const onClickItem = () => {
    navigate('/item/' + item.id)
  }

  return (
    <div className='item-block-wrapper'>
      <div className='item-block'>
        <div className='item-block__image__wrapper' onClick={onClickItem}><img src={TestItem} className='item-block__image' alt='shoes photo'/></div>
        <button className='add'>Додати в кошик</button>
        <div className='item-block__title'>{item.name}</div>
        <div className='item-block__price'>{item.price}₴</div>
      </div>
    </div>

  )
}

export default ItemBlock