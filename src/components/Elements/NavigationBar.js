import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export function NavigationBar() {
  const [selectedUnit, setSelectedUnit] = useState('EAR...');
  const detailsRef = useRef(null);


  const handleUnitClick409a = () => {
    setSelectedUnit('EAR 409a');
  };
  const handleUnitClick409b = () => {
    setSelectedUnit('EAR 409b');
  };
  const handleUnitClick409c = () => {
    setSelectedUnit('EAR 409c');
  };
  const handleUnitClick409d = () => {
    setSelectedUnit('EAR 409d');
  };
  const handleUnitClick411a = () => {
    setSelectedUnit('EAR 411a');
  };
  const handleUnitClick411b = () => {
    setSelectedUnit('EAR 411b');
  };
  const handleUnitClick411c = () => {
    setSelectedUnit('EAR 411c');
  };

 
 
  return (
    <div>
      <div className="navbar bg-base-100 p-4  shadow-lg">
        <div className="flex-1">
          <h1>Aero Calc</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-4">
            <li>
              <details ref={detailsRef}>
                <summary>Unit: {selectedUnit}</summary>
                <ul className="p-2 bg-base-100 shadow-md rounded">


<li>
<ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
  <li>
    <details open>
      <summary>
       EAR 409
      </summary>
      <ul>

      <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 409a' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick409a}
          >
            <Link to="/EAR409a/solidCircularBar">Q.2 SolidCircularBar</Link>
          </li>

   
          <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 409b' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick409b}
          >
            <Link to="/EAR409b/AircratLandingGround">Q.3 AircraftLGround</Link>
          </li>


          <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 409c' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick409c}
          >
            <Link to="/EAR409c/AircratLandingCarrier">Q.4 AircraftLCarrier</Link>
          </li>
          
          <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 409d' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick409d}
          >
            <Link to="/EAR409d/BMBendingMoment">Q.5 BMBendMoment</Link>
          </li>




        
        <li>
        </li>
      </ul>
    </details>
  </li>
</ul>
</li>


<li>
<ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
  <li>
    <details open>
      <summary>
       EAR 411
      </summary>
      <ul>


      <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 411a' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick411a}
          >
            <Link to="/EAR411/millingMachine">Q.1 MillingMachine</Link>
          </li>

                 
          <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 411b' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick411b}
          >
            <Link to="/EAR411/machineCantBeam">Q.2 MCantileverBeam</Link>
          </li>
          


        
      
          <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 411c' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick411c}
          >
            <Link to="/EAR411/machine">Q.3 MachineTool</Link>
          </li>
          
         



      </ul>
    </details>
  </li>
</ul>
</li>

                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
