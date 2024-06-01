import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App
