import './scss/app.scss';
import NavBar from "./components/NavBar";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useRef} from "react";
import PaymentRefund from "./pages/PaymentRefund";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";

function App() {
  const navigate = useNavigate()
  useEffect(() => {navigate('/home/')}, [])

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
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </div>
      {location.pathname !== '/cart' && <div className='content__footer'><Footer paymentRef={paymentRef}/></div>}
    </div>
  );
}

export default App;
