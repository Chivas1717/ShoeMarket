import Shoes from '../../assets/photo_2023-02-14_18-21-52.jpg'
import styles from './TopRatedItem.module.scss'
const TopRatedItem = () => {
  return (
    <div className={styles.block}>
      <span>Топ продаж</span>
      <img src={Shoes} alt='top rated shoes'/>
      <button className={styles.add}>Додати в кошик</button>
      <div className={styles.title}>Jordan retro 2</div>
    </div>
  )
}

export default TopRatedItem