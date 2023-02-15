import './scss/app.scss';
import NavBar from "./components/NavBar";
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import {useEffect} from "react";

function App() {
  const navigate = useNavigate()
  useEffect(() => {navigate('/home/')}, [])

  return (
    <div className='wrapper'>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
