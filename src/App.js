import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './pages/Login/RequireAuth';
import NotFound from './pages/Shared/NotFound';
import ForgotPassword from './pages/Login/ForgotPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardReview from './pages/Dashboard/DashboardReview';
import MyAppointment from './pages/Dashboard/MyAppointment';
import DashboardFront from './pages/Dashboard/DashboardFront';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Dashboard/RequireAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        {/* <Route path='/' element={}></Route> */}

        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/appointment' element={<RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>}></Route>

        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<DashboardFront></DashboardFront>}></Route>
          <Route path='myappointment' element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<DashboardReview></DashboardReview>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='add-doctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
