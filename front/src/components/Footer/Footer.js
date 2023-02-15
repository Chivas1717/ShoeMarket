import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.column}>
        <div className={styles.row}>Оплата і повернення</div>
        <div className={styles.row}>Політика конфіденціальності</div>
        <div className={styles.row}>Методи оплати</div>
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