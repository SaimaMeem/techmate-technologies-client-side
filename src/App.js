import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register';
import RequireAuth from './Pages/LoginRegister/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import Parts from './Pages/Home/Parts/Parts';
import Footer from './shared/Footer';
import Header from './shared/Header';
import NotFound from './Pages/NotFound';
import MyOrders from './Pages/Dashboard/Users/MyOrders';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header></Header>
      <div className='block mx-auto'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='parts/purchase/:partId' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/myorders' element={<RequireAuth>
          <MyOrders></MyOrders>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
    <Footer></Footer>
    <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
