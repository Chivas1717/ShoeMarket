import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.column}>1</div>
      <div className={styles.column}>2</div>
      <div className={styles.column}>3</div>
    </div>
  )
}

export default Footer