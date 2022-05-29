import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginRegister/Login/Login';
import Register from './Pages/LoginRegister/Register';
import RequireAuth from './Pages/LoginRegister/RequireAuth';
import RequireAdmin from './Pages/LoginRegister/RequireAdmin';
import RequireOnlyUser from './Pages/LoginRegister/RequireUser';
import Purchase from './Pages/Purchase/Purchase';
import Parts from './Pages/Home/Parts/Parts';
import Footer from './shared/Footer';
import Header from './shared/Header';
import NotFound from './Pages/NotFound';
import MyOrders from './Pages/Dashboard/Users/MyOrders';
import Payment from './Pages/Dashboard/Users/Payment';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/Users/AddReview';
import AllUsers from './Pages/Dashboard/Admins/AllUsers';
import ManageOrders from './Pages/Dashboard/Admins/ManageOrders';
import AddPart from './Pages/Dashboard/Admins/AddPart';
import ManageParts from './Pages/Dashboard/Admins/ManageParts';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header></Header>
      <div className='block'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/parts' element={<Parts></Parts>}></Route>
          <Route path='parts/purchase/:partId' element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>
          <Route path='/payment/:orderId' element={<RequireAuth>
            <Payment></Payment>
          </RequireAuth>}></Route>
          {/* dashboard */}
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            {/* only user */}
            <Route path='myorders' element={<RequireOnlyUser>
              <MyOrders></MyOrders>
            </RequireOnlyUser>
            }></Route>
            <Route path='addreview' element={<RequireOnlyUser>
              <AddReview></AddReview>
            </RequireOnlyUser>
            }></Route>
            {/* only user */}
            {/* only admin */}
            <Route path='allusers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='addpart' element={<RequireAdmin><AddPart></AddPart></RequireAdmin>}></Route>
            <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
            <Route path='manageparts' element={<RequireAdmin><ManageParts></ManageParts></RequireAdmin>}></Route>
            {/* only admin */}
          </Route>
          {/* dashboard */}
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
