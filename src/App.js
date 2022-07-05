import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Discounts from './Discounts/components';
import Login from './Login';
import MyAccount from './MyAccount';
import Pizzas from './Pizzas/component';
import Popular from './Popular/components';
import Sets from './Sets/components';
import ShoppingCart from './ShoppingCart/components';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='pages_cont'>
          <Routes>
            <Route path="/" element={<Popular />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/pizzas" element={<Pizzas />} />
            <Route path="/sets" element={<Sets />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />\
            <Route path="/login" element={<Login />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/register" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
