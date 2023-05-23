import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from "../components/Search/Search.module.scss";
import ShowPasswordIcon from "../assets/eye-open.svg";
import HidePasswordIcon from "../assets/eye-hide.svg";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Auth = observer(() => {
  const {user} = useContext(Context);

  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  const onChangeLogin = (e) => {
    setLoginValue(e.target.value)
  }

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value)
  }

  const onClickLogin = async (e) => {
    e.preventDefault()
    try {
      let data;
      if (location.pathname === '/login') {
        data = await login(loginValue, passwordValue);
      } else {
        data = await registration(loginValue, passwordValue);
      }
      user.setUser('test1@gmail.com')
      user.setIsAuth(true)
      navigate('/home')
    } catch (e) {
      alert(e)
    }

  }

  return (
    <div className='auth'>
      <div className='card'>
        <form action="" onSubmit={onClickLogin}>
          <h4>Введіть пошту:</h4>
          <div className='input--wrapper'>
            <input
              value={loginValue}
              onChange={onChangeLogin}
              placeholder='тест@компанія.com'
              type="email"
              required
            />

          </div>
          <h4>Введіть пароль:</h4>
          <div className='input--wrapper'>
            <input
              value={passwordValue}
              onChange={onChangePassword}
              placeholder='Пароль'
              type={passwordShown ? "text" : "password"}
              required
            />
            <img
              className=''
              onClick={togglePassword}
              src={passwordShown ? HidePasswordIcon : ShowPasswordIcon}
              alt='пошук очистити'
            />
          </div>
          <br></br>
          <button type="submit" className='submit'>{location.pathname === '/login' ? 'Увійти' : 'Зареєструватися'}</button>
        </form>
        <div className='switch'>
          <h4>або</h4>
          <Link to={location.pathname === '/login' ? '/registration' : '/login'}><h3>{location.pathname === '/login' ? 'Зареєструватися' : 'Увійти'}</h3></Link>
        </div>
      </div>
    </div>
  );
})

export default Auth;