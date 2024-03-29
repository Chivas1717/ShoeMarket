import React from 'react';
import styles from './PaymentCard.module.scss'
import checkoutShoe from '../../assets/checkout_shoe.png'
import {useNavigate} from "react-router-dom";


const PaymentCard = () => {
  const navigate = useNavigate()
  const onSubmit = () => {
    navigate('/success')
  }

  return (
    <div className={styles.mainscreen}>
      <div className={styles.card}>
        <div className={styles.leftside}>
          <img
            src={checkoutShoe}
            className={styles.product}
            alt="delivery"
          />
        </div>
        <div className={styles.rightside}>
          <form action="" onSubmit={(e) => {
            e.preventDefault();
            alert('paid!');
          }
          }>
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p className={styles.lineText}>ПІБ власника картки</p>
            <input type="text" className={styles.inputbox} name="name" required/>
            <p className={styles.lineText}>Номер картки</p>
            <input type="number" className={styles.inputbox} name="card_number" id="card_number" required/>

            <p className={styles.lineText}>Тип картки</p>
            <select className={styles.inputbox} name="card_type" id="card_type" required>
              <option value="">--Оберіть тип картки--</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div className={styles.expcvv}>

              <p className={`${styles.lineText} ${styles.expcvv_text}`}>Expiry</p>
              <input type="date" className={styles.inputbox} name="exp_date" id="exp_date" required/>

              <p className={`${styles.lineText} ${styles.expcvv_text2}`}>CVV</p>
              <input type="password" className={styles.inputbox} name="cvv" id="cvv" required/>
            </div>
            <p className={styles.lineText}></p>
            <button type="submit" className={styles.proceed} onClick={onSubmit}>Оплатити</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;