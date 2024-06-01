import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
