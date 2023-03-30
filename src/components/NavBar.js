import {Link, useLocation, useNavigate} from "react-router-dom";
import LogoShoe from '../assets/shoe-icon.svg'
import AdminIcon from '../assets/admin-icon.png'
import CartIcon from '../assets/cart-icon-cropped.svg'
import ProfileIcon from '../assets/profile-icon.png'
import MenuIcon from '../assets/menu-icon.png'
import CloseIcon from '../assets/clear-search-icon.svg'


import Search from "./Search/Search";
import {useState} from "react";

const NavBar = ({ aboutRef }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const [drawerIsOpened, setDrawerIsOpened] = useState(false);

    const onClickAboutNavigate = () => {
        setDrawerIsOpened(false);
        if (location.pathname !== '/ShoeMarket/home') {
            navigate('/ShoeMarket/home')
        }
        aboutRef.current.scrollIntoView({behavior:'smooth', block: 'start'})
    }

    return (
      <>

        <div className='header'>
            <div className='container'>
                <div className='hot-line'><span>Горяча лінія:</span> Пн-Пт: 9:00-19:00     (+38) 123-456-7890</div>
                <Link to='/ShoeMarket/home'>
                    <div className='header__logo'>
                        <img width='49' src={LogoShoe} alt="LogoShoe"/>
                        <div>
                            <h1>ShoeMarket</h1>
                            <p>обирай комфорт</p>
                        </div>
                    </div>
                </Link>
                <div className='header__sections'>
                    <Link to='/ShoeMarket/home'><div className='section'>Магазин</div></Link>
                    <div onClick={() => onClickAboutNavigate()} className='section'>Про нас</div>
                    <div className='section'>Контакти</div>
                </div>
                {location.pathname === '/ShoeMarket/home' && <Search/>}
                <div className='header__icons'>
                    <Link to='/ShoeMarket/admin'><img className='admin' src={AdminIcon} alt='admin'/></Link>
                    <img className='profile' src={ProfileIcon} alt='profile'/>
                    <Link to='/ShoeMarket/cart'><img className='cart' src={CartIcon} alt='cart'/></Link>
                </div>
            </div>
        </div>
          <div className='header2'>
              <div className='container'>
                  <div className='hot-line'><span>Горяча лінія:</span> Пн-Пт: 9:00-19:00     (+38) 123-456-7890</div>
                  <Link to='/ShoeMarket/home'>
                      <div className='header2__logo'>
                          <img width='49' src={LogoShoe} alt="LogoShoe"/>
                          <div>
                              <h1>ShoeMarket</h1>
                              <p>обирай комфорт</p>
                          </div>
                      </div>
                  </Link>
                  <div className='header2__icons'>
                      <Link to='/ShoeMarket/admin'><img className='admin' src={AdminIcon} alt='admin'/></Link>
                      <Link to='/ShoeMarket/cart'><img className='cart' src={CartIcon} alt='cart'/></Link>
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