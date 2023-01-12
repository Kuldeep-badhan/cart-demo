import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.scss';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
    <Toaster/>
  </BrowserRouter>    
    </div>
  );
}

export default App;
