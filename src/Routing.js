import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Machine} from './components/EAR/EAR-411/Machine'
import { MachineTool } from './components/MachineTool'
import { NotFoundPage } from './components/NotFoundPage'
import { SolidCircularBar } from './components/EAR/EAR-409/SolidCircularBar'
import { AircraftLandingGround } from './components/EAR/EAR-409/AircraftLandingGround'
import { AircraftLandingCarrier } from './components/EAR/EAR-409/AircraftLandingCarrier'
import { BMBendingMoment } from './components/EAR/EAR-409/BMBendingMoments'
import { MillingMachine } from './components/EAR/EAR-411/MillingMachine'
import { MachineCantBeam } from './components/EAR/EAR-411/MachineCantileverBeam'



export  function Routing() {
  return (
    <Routes>
        <Route path='/' element={<MachineTool/>}/>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}/>
        <Route path='/EAR411/machinetool' element={<MachineTool></MachineTool>}/>
        <Route path='/EAR409a/solidCircularBar' element ={<SolidCircularBar></SolidCircularBar>}/>
        <Route path='/EAR409b/AircratLandingGround'  element = {<AircraftLandingGround></AircraftLandingGround>}/>
        <Route path='/EAR409c/AircratLandingCarrier' element = {<AircraftLandingCarrier></AircraftLandingCarrier>}/>
        <Route path='/EAR409d/BMBendingMoment' element = {<BMBendingMoment></BMBendingMoment>} />
    
        <Route path='/EAR411/machine' element ={<Machine/>}/>
        <Route path='/EAR411/millingMachine' element={<MillingMachine></MillingMachine>}/>
        <Route path='/EAR411/machineCantBeam' element = {<MachineCantBeam></MachineCantBeam>}/>

    </Routes>
  )
}
