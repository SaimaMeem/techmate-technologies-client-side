import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
