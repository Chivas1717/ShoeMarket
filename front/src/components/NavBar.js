import {Link, useLocation, useNavigate} from "react-router-dom";
import LogoShoe from '../assets/shoe-icon.svg'
import AdminIcon from '../assets/admin-icon.png'
import CartIcon from '../assets/cart-icon-cropped.svg'
import ProfileIcon from '../assets/profile-icon.png'

import Search from "./Search/Search";

const NavBar = ({ aboutRef }) => {
    const navigate = useNavigate()
    const location = useLocation()


    const onClickAboutNavigate = () => {
        if (location.pathname !== '/home/') {
            navigate('/home/')
        }
        aboutRef.current.scrollIntoView({behavior:'smooth'})
    }

    return (
        <div className='header'>
            <div className='container'>
                <Link to='/home/'>
                    <div className='header__logo'>
                        <img width='49' src={LogoShoe} alt="LogoShoe"/>
                        <div>
                            <h1>ShoeMarket</h1>
                            <p>ось такі підкрадулі</p>
                        </div>
                    </div>
                </Link>
                <div className='header__sections'>
                    <Link to='/home'><div className='section'>Магазин</div></Link>
                    <div onClick={() => onClickAboutNavigate()} className='section'>Про нас</div>
                    <div className='section'>Контакти</div>
                </div>
                <Search/>
                <div className='header__icons'>
                    <Link to='/admin'><img className='admin' src={AdminIcon}/></Link>
                    <img className='profile' src={ProfileIcon}/>
                    <Link to='/cart'><img className='cart' src={CartIcon}/></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar