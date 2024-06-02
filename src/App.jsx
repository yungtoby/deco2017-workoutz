import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import MyProfile from './Pages/MyProfile';
import ViewMyProgress from './Pages/ViewMyProgress';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/my_profile" element={<MyProfile />}></Route>
        <Route path="/view_my_progress" element={<ViewMyProgress />}></Route>
      </Routes>
    </>
  )
}

export default App
