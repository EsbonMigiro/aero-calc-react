import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export function NavigationBar() {
  const [selectedUnit, setSelectedUnit] = useState('EAR 406');
  const detailsRef = useRef(null);

  const handleUnitClick406 = () => {
    setSelectedUnit('EAR 406');
  };

  const handleUnitClick407 = () => {
    setSelectedUnit('EAR 407');
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
       EAR 407
      </summary>
      <ul>

      <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 407' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick407}
          >
            <Link to="/EAR411/machinetool">Machine Tool</Link>
          </li>

        <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 407' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick407}
          >
            <Link to="/411">Coming soon</Link>
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
       EAR .
      </summary>
      <ul>
        
        <li
            className={`cursor-pointer my-2 ${selectedUnit === 'EAR 406' ? 'text-primary' : 'text-neutral-content'}`}
            onClick={handleUnitClick406}
          >
            <Link to="/EAR409">Coming soon</Link>
          </li>
       
        <li>
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
