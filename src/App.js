import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className=''>
      <h1>Welcome</h1>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/country/:countryName' element={<CountryDetail></CountryDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
