import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Machine} from './components/EAR/EAR-411/Machine'
import { MachineTool } from './components/MachineTool'
import { NotFoundPage } from './components/NotFoundPage'



export  function Routing() {
  return (
    <Routes>
        <Route path='/' element={<MachineTool/>}/>
        <Route path='/machine' element ={<Machine/>}/>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}/>
        <Route path='/EAR411/machinetool' element={<MachineTool></MachineTool>}/>
        <Route path='/EAR411/machinetool' element={<MachineTool></MachineTool>}/>
     
    </Routes>
  )
}
