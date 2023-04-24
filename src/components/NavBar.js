import {Link, useLocation, useNavigate} from "react-router-dom";
import LogoShoe from '../assets/shoe-icon.svg'
import AdminIcon from '../assets/admin-icon.png'
import CartIcon from '../assets/cart-icon-cropped.svg'
import ProfileIcon from '../assets/profile-icon.png'
import MenuIcon from '../assets/menu-icon.png'
import CloseIcon from '../assets/clear-search-icon.svg'


import Search from "./Search/Search";
import {useEffect, useRef, useState} from "react";

const NavBar = ({ aboutRef }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [drawerIsOpened, setDrawerIsOpened] = useState(false);
    const [popUpIsOpened, setPopUpIsOpened] = useState(false);

    const loginRef = useRef(null);

    const onClickAboutNavigate = () => {
        setDrawerIsOpened(false);
        if (location.pathname !== '/home') {
            navigate('/home')
        }
        aboutRef.current.scrollIntoView({behavior:'smooth', block: 'start'})
    }

    const onClickLoginPopUpActivated = () => {
        setPopUpIsOpened(!popUpIsOpened);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {

            if (loginRef.current && !loginRef.current.contains(event.target)) {
                setPopUpIsOpened(false);
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
      <>
        <div className='header'>
            <div className='container'>
                <div className='hot-line'><span>Гаряча лінія:</span> Пн-Пт: 9:00-19:00     (+38) 123-456-7890</div>
                <Link to='/home'>
                    <div className='header__logo'>
                        <img width='49' src={LogoShoe} alt="LogoShoe"/>
                        <div>
                            <h1>ShoeMarket</h1>
                            <p>обирай комфорт</p>
                        </div>
                    </div>
                </Link>
                <div className='header__sections'>
                    <Link to='/home'><div className='section'>Магазин</div></Link>
                    <div onClick={() => onClickAboutNavigate()} className='section'>Про нас</div>
                    <Link to='/contact'><div className='section'>Контакти</div></Link>
                </div>
                {location.pathname === '/home' && <Search/>}
                <div className='header__icons'>
                    <Link to='/admin'><img className='admin' src={AdminIcon} alt='admin'/></Link>
                    <img onClick={onClickLoginPopUpActivated} ref={loginRef} className='profile' src={ProfileIcon} alt='profile'/>
                    {popUpIsOpened && (
                      <div  className="login-popup">
                        <ul>
                          <Link to='/login'>
                            <li>
                              Увійти
                            </li>
                          </Link>
                          <li>
                            Закази
                          </li>
                          <li className='or'>
                            або
                          </li>
                          <Link to='/registration'>
                            <li className='option'>
                              Зареєструватись
                            </li>
                          </Link>
                        </ul>
                      </div>
                    )}
                    <Link to='/cart'><img className='cart' src={CartIcon} alt='cart'/></Link>
                </div>
            </div>
        </div>
          <div className='header2'>
              <div className='container'>
                  <div className='hot-line'><span>Гаряча лінія:</span> Пн-Пт: 9:00-19:00     (+38) 123-456-7890</div>
                  <Link to='/home'>
                      <div className='header2__logo'>
                          <img width='49' src={LogoShoe} alt="LogoShoe"/>
                          <div>
                              <h1>ShoeMarket</h1>
                              <p>обирай комфорт</p>
                          </div>
                      </div>
                  </Link>
                  {location.pathname === '/home' && <div className='temp-wrapper'><Search/></div>}
                  <div className='header2__icons'>
                      <Link to='/admin'><img className='admin' src={AdminIcon} alt='admin'/></Link>
                      <Link to='/cart'><img className='cart' src={CartIcon} alt='cart'/></Link>
                      <img className='menu' src={MenuIcon} alt='menu' onClick={() => setDrawerIsOpened(true)}/>
                  </div>
              </div>
          </div>
          <div className={drawerIsOpened ? 'drawer opened' : 'drawer'}>
              <img className='close-btn' src={CloseIcon} alt='menu' onClick={() => setDrawerIsOpened(false)}/>
              <div className='category'><img className='icon' src={ProfileIcon} alt='profile'/>Увійти</div>
              <div className='category__admin'><img className='icon' src={AdminIcon} alt='profile'/>Адмін</div>
              <div className='category'>Магазин</div>
              <div className='category' onClick={() => onClickAboutNavigate()}>Про нас</div>
              <div className='category'>Контакти</div>
          </div>
      </>
    )
}

export default NavBar