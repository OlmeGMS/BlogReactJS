import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../components/ui/Sidebar';
import { PostScreen } from '../components/Post/PostScreen';
import { UserScreen } from '../components/Users/UserScreen';
import { Header } from '../components/ui/Header';

export const DashboardRouters = () => {
  return (
    <>
        {/* <Sidebar />  */}
        <Header /> 
        <Routes>
            <Route path="/" element={<PostScreen />} />
            <Route path="/post" element={<PostScreen />} />
            <Route path="/users" element={<UserScreen />} />
        </Routes>
    </>
  )
}