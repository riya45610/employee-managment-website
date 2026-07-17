import React from 'react'
import { BrowserRouter, Routes , Route, Router} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import EmpAllList from './components/EmpAllList'
import EmpCreate from './components/EmpCreate'
import EmpDetails from './components/EmpDetails'
import EmpEdit from './components/EmpEdit'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<EmpAllList/>}/>
    <Route path='/empcreate' element={<EmpCreate/>}/>
    <Route path='/empedit/:eid' element={<EmpEdit/>}/>
    <Route path='/empdetails/:eid' element={<EmpDetails/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App