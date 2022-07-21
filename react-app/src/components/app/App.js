import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard/Dashboard'
import Home from '../../pages/home/Home'
import SignInPage from '../../pages/signIn-page/SignInPage'
import Error404 from '../../pages/error404/Error404'

import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
