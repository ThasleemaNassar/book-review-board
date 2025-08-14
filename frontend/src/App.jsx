import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Auth from './pages/Auth'
import Pagenotfound from './pages/Pagenotfound'
import AllBooks from './users/pages/AllBooks'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Viewbook from './users/pages/Viewbook'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='/all-books' element={<AllBooks/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/view-book/:id' element={<Viewbook/>} />
      


        <Route path='/*' element={<Pagenotfound/>} />
        
      </Routes>
    </>
  )
}

export default App
