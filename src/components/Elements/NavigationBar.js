import React, { useState, useRef } from 'react';

function NavigationBar() {
  const units = ['EAR 406', 'EAR 407', 'EAR 408', 'EAR 409', 'EAR 410', 'EAR 411'];
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const detailsRef = useRef(null);

  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
    detailsRef.current.removeAttribute('open'); // Close the details element after clicking an item
  };

  return (
    <div>
      <div className="navbar bg-base-100 p-4 shadow-lg">
        <div className="flex-1">
          <h1>Aero Calc</h1>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-4">
            <li>
              <details ref={detailsRef}>
                <summary>Unit: {selectedUnit}</summary>
                <ul className="p-2 bg-base-100 shadow-md rounded">
                  {units.map((unit) => (
                    <li
                      key={unit}
                      className={`cursor-pointer my-2 ${selectedUnit === unit ? 'text-primary' : 'text-neutral-content'}`}
                      onClick={() => handleUnitClick(unit)}
                    >
                      {unit}
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
