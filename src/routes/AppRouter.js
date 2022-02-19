import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/Auth/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path='/*' element={<DashboardRouters />} />
      </Routes>
    </BrowserRouter>
  )
}
