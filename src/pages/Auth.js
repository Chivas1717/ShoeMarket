import React, {useRef, useState} from 'react';
import styles from "../components/Search/Search.module.scss";
import {set} from "mobx";
import {useNavigate} from "react-router-dom";

const Auth = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const searchRef = useRef(null);

  const navigate = useNavigate();

  const onChangeLogin = (e) => {
    setLoginValue(e.target.value)
  }

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value)
  }

  const onClickLogin = (e) => {
    e.preventDefault()
    alert("Вітаємо! Ви увійшли в свій акаунт!")
    navigate('/ShoeMarket/home')
  }

  return (
    <div className='auth'>
      <div className='card'>
        <form action="" onSubmit={onClickLogin}>
          <h4>Введіть пошту:</h4>
          <input
            ref={searchRef}
            value={loginValue}
            onChange={onChangeLogin}
            placeholder='тест@компанія.com'
            type="email"
            required
          />
          <h4>Введіть пароль:</h4>
          <input
            ref={searchRef}
            value={passwordValue}
            onChange={onChangePassword}
            placeholder='Пароль'
            type="text"
            required
          />
          <br></br>
          <button type="submit" className='submit'>Увійти</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;