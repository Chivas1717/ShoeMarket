import {Link} from "react-router-dom";
import LogoShoe from '../assets/shoe-icon.svg'
import AdminIcon from '../assets/admin-icon.png'
import CartIcon from '../assets/cart-icon-cropped.svg'
import ProfileIcon from '../assets/profile-icon.png'

import Search from "./Search/Search";

const NavBar = () => {
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
                    <div className='section'>Магазин</div>
                    <div className='section'>adamdlkawd</div>
                    <div className='section'>adamdlkawd</div>
                </div>
                <Search/>
                <div className='header__icons'>
                    <img className='admin' src={AdminIcon}/>
                    <img className='profile' src={ProfileIcon}/>
                    <img className='cart' src={CartIcon}/>
                </div>
            </div>
        </div>
    )
}

export default NavBar