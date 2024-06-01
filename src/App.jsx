import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import MyProfile from './Pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/my_profile" element={<MyProfile />}></Route>
      </Routes>
    </>
  )
}

export default App
