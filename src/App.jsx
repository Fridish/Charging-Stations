import './App.css'
import { Suspense} from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <NavBar/>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/map" element={<Map/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>

    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
