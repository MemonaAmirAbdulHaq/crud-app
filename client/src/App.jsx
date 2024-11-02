import { useState } from 'react'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'


import './App.css'
import {Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Router>
    <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser />}></Route>
      </Routes></Router>
   </div>
  )
}

export default App
