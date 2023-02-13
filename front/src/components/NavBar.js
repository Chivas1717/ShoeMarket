import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Link to='/ShoeMarket/'>
                    <div className='header__logo'>
                        <div>
                            <h1>ShoeMarket</h1>
                            <p>ось такі підкрадулі</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar