import styles from './Footer.module.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";

const Footer = ({ paymentRef }) => {

  const location = useLocation()
  const navigate = useNavigate()
  const onClickPaymentMethods = () => {
    if (location.pathname !== '/payment-refund') {
      navigate('/payment-refund')
    }
    paymentRef.current.scrollIntoView()
  }

  return (
    <div className={styles.root}>
      <div className={styles.column}>
        <Link to='/payment-refund'><div className={styles.row}>Оплата і повернення</div></Link>
        <div className={styles.row}>Політика конфіденціальності</div>
        <div className={styles.row} onClick={() => onClickPaymentMethods()}>Методи оплати</div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>Контакти</div>
        <div className={styles.row}>(+38) 123-456-7890</div>
        <div className={styles.row}>email: test@company.com</div>
      </div>
      <div className={styles.column}>3</div>
    </div>
  )
}

export default Footer