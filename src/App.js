import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
// import Parts from './Pages/Home/Parts/Parts';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/parts' element={<Parts></Parts>}></Route> */}
        <Route path='parts/purchase/:partId' element={<Purchase></Purchase>}></Route>
      </Routes>
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
