import Shoes from '../../assets/photo_2023-02-14_18-21-52.jpg'
import styles from './TopRatedItem.module.scss'
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../../index";
import {Link} from "react-router-dom";
const TopRatedItem = observer(() => {
  const {item} = useContext(Context)
  console.log(item.topRatedItem)
  return (
    <Link to={`${'item/' + item.topRatedItem.id}`}>
      <div className={styles.block}>
        <span>Топ продаж</span>
        <img src={'http://localhost:7000/' + item.topRatedItem.img} alt='top rated shoes'/>
        <button className={styles.add}>Додати в кошик</button>
        <div className={styles.title}>Jordan retro 2</div>
      </div>
    </Link>
  )
})

export default TopRatedItem