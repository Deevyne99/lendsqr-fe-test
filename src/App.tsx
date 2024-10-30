import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dasboard from './pages/Dasboard'
import SingleUser from './pages/SingleUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dasboard />} />
          <Route path='/:id' element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
