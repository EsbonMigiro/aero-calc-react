import React, { useState } from 'react';
import axios from 'axios';

function Aeroform() {
  const [formData, setFormData] = useState({
    speed: '',
    force: '',
    mass: '',
    damping: '',
    amplitude: '',
    forcet: ''
  });
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { speed, force, forcet, mass, damping, amplitude } = formData;
    

    try {
      const response = await axios.get(`http://127.0.0.1:8000/aero/?speed=${speed}&force=${force}&forcet=${forcet}&mass=${mass}&damping=${damping}&amplitude=${amplitude}`);
      setResult(response.data.result);
      setError(null);
      console.log(response.data.result)
    } catch (error) {
      setResult(null);
      setError(error.response.data.error);
      console.error(error);
    }
  };
  return (
    <div className="container mx-auto mt-8 p-4">
      <form className="max-w-md mx-auto bg-white p-8 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="speed" className="block text-sm font-medium text-gray-600">
            Speed in RPM
          </label>
          <input
            type="number"
            id="speed"
            name="speed"
            value={formData.speed}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="force" className="block text-sm font-medium text-gray-600">
            Maximum force of the machine
          </label>
          <input
            type="number"
            id="force"
            name="force"
            value={formData.force}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="force" className="block text-sm font-medium text-gray-600">
            Maximum force Transmitted
          </label>
          <input
            type="number"
            id="forcet"
            name="forcet"
            value={formData.forcet}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mass" className="block text-sm font-medium text-gray-600">
            Mass of the machine
          </label>
          <input
            type="number"
            id="mass"
            name="mass"
            value={formData.mass}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="damping" className="block text-sm font-medium text-gray-600">
            Damping factor
          </label>
          <input
            type="number"
            id="damping"
            name="damping"
            value={formData.damping}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amplitude" className="block text-sm font-medium text-gray-600">
            Maximum amplitude at resonance
          </label>
          <input
            type="number"
            id="amplitude"
            name="amplitude"
            value={formData.amplitude}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Submit
          </button>
        </div>
      </form>
      {error && <div className="text-red-500">{error}</div>}

      {result && (
        <div className="mt-8 bg-gray-100 p-4 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Results:</h2>
          <div>
            <strong>Transmissibility:</strong> {result.T}
          </div>
          <div>
            <strong>Maximum amplitude at natural frequency:</strong> {result.Xmax}
          </div>
          <div>
            <strong>Mass at decrease resonant amplitude:</strong> {result.Mr}
          </div>
          <div>
            <strong>Steady state amplitude at increased mass:</strong> {result.X}
          </div>
          <div>
            <strong>Isolator stiffness:</strong> {result.K}
          </div>
        </div>
      )}
    </div>
  );
}

export default Aeroform;
