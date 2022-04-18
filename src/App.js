import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import ProceedCheckout from './Pages/ProceedCheckout/ProceedCheckout';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import RequireAuth from './Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        } />
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        } ></Route>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout/proceed' element={<ProceedCheckout />} ></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
