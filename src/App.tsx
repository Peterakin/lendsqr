import './App.scss'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import UsersDetails from './pages/UserDetails/UsersDetails';
import DashboardLayout from './layout/DashboardLayout/DashboardLayout';
import UsersPage from './pages/Users/UsersPage';


const App = () => {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<UsersPage />} />
        <Route path="/users/:id" element={<UsersDetails />} />
      </Route>
    </Routes>
  )
}

export default App
