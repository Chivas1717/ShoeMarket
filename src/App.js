import './scss/app.scss';

import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import PaymentRefund from "./pages/PaymentRefund";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Item from "./pages/Item";
import CheckOut from "./pages/CheckOut";

function App() {
  const navigate = useNavigate()
  useEffect(() => {navigate('/ShoeMarket/home')}, [])

  const location = useLocation()

  const aboutRef = useRef(null)
  const paymentRef = useRef(null)



  return (
    <div className='wrapper'>
      <NavBar aboutRef={aboutRef}/>
      <div className='content'>
        <Routes>
          <Route path='/ShoeMarket/home' element={<Home aboutRef={aboutRef}/>}/>
          <Route path='/ShoeMarket/payment-refund' element={<PaymentRefund paymentRef={paymentRef} />}/>
          <Route path='/ShoeMarket/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/ShoeMarket/cart' element={<Cart />}/>
          <Route path='/ShoeMarket/checkout' element={<CheckOut />}/>
          <Route path='/ShoeMarket/item/:id' element={<Item />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </div>
      {location.pathname !== '/cart' && <div className='content__footer'><Footer paymentRef={paymentRef}/></div>}
    </div>
  );
}

export default App;
