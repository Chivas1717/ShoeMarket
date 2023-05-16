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
import Auth from "./pages/Auth";
import Contact from "./pages/Contact";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
      console.log('редирект на хоум')
    }
  }, [])

  const location = useLocation()

  const aboutRef = useRef(null)
  const paymentRef = useRef(null)



  return (
    <div className='wrapper'>
      <NavBar aboutRef={aboutRef}/>
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home aboutRef={aboutRef}/>}/>
          <Route path='/payment-refund' element={<PaymentRefund paymentRef={paymentRef} />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<CheckOut />}/>
          <Route path='/login' element={<Auth />}/>
          <Route path='/registration' element={<Auth />}/>
          <Route path='/home/item/:id' element={<Item />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<Home aboutRef={aboutRef}/>}/>
        </Routes>
      </div>
      {location.pathname !== 'cart' && location.pathname !== 'contact' && <div className='content__footer'><Footer paymentRef={paymentRef}/></div>}
    </div>
  );
}

export default App;
