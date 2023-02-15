import './scss/app.scss';
import NavBar from "./components/NavBar";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, useRef} from "react";

function App() {
  const navigate = useNavigate()
  useEffect(() => {navigate('/home/')}, [])

  const aboutRef = useRef()

  return (
    <div className='wrapper'>
      <NavBar aboutRef={aboutRef}/>
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home aboutRef={aboutRef}/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
