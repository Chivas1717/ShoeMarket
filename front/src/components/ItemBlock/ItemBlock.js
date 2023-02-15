import TestItem from '../../assets/test-item.jpg'

const ItemBlock = () => {
  return (
    <div className='item-block-wrapper'>
      <div className='item-block'>
        <div className='item-block__image__wrapper'><img src={TestItem} className='item-block__image' alt='shoes photo'/></div>
        <button className='add'>Додати в кошик</button>
        <div className='item-block__title'>Jordan</div>
        <div className='item-block__price'>12000₴</div>
      </div>
    </div>

  )
}

export default ItemBlock