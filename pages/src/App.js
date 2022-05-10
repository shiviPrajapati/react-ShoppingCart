import './App.css';
import Header from './components/Header';
import DataProvider from './components/context';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/section/Home';
import Order from './components/section/Order';
import GoToCart from './components/section/GoToCart';
import Details from './components/section/Details';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path='/Order' element={<Order></Order>}></Route>
            <Route path='/GoToCart' element={<GoToCart></GoToCart>}></Route>
            <Route path='/product/:id' element={<Details></Details>}></Route>
          </Routes>
        </BrowserRouter>
        </DataProvider>
      </div>
  );
}

export default App;
