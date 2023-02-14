import './scss/app.scss';
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <div className='content'>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
