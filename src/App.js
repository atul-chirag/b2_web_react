import './App.css';
import './assets/style.css';
import Login from './component/login';
import Signup from './component/signup';
import Dashboard from './component/dashboard';
import Loginlog from './component/loginlog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login-log' element={<Loginlog />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
