import styles from './Footer.module.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ paymentRef }) => {

  const location = useLocation()
  const navigate = useNavigate()
  const onClickPaymentMethods = () => {
    if (location.pathname !== '/ShoeMarket/payment-refund') {
      navigate('/ShoeMarket/payment-refund')
    }
    paymentRef.current.scrollIntoView()
  }

  return (
    <div className={styles.root}>
      <div className={styles.column}>
        <Link to='/ShoeMarket/payment-refund'><div className={styles.row}>Оплата і повернення</div></Link>
        <Link to='/ShoeMarket/privacy-policy'><div className={styles.row}>Політика конфіденціальності</div></Link>
        <div className={styles.row} onClick={() => onClickPaymentMethods()}>Методи оплати</div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>Контакти</div>
        <div className={styles.row}>(+38) 123-456-7890</div>
        <div className={styles.row}>email: test@company.com</div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>Facebook <FontAwesomeIcon icon={faFacebook} color='#00000'/></div>
        <div className={styles.row}>Instagram <FontAwesomeIcon icon={faInstagram} color='#00000'/></div>
        <div className={styles.row}>LinkedIn <FontAwesomeIcon icon={faLinkedin} color='#00000'/></div>
      </div>
    </div>
  )
}

export default Footer