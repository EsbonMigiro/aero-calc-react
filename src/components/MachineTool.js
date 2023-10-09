import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

function MachineTool() {
    const [formData, setFormData] = useState({
        'frequency': '',
        'mass': '',
        'amplitude': '',
        'force': ''
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { frequency, mass, amplitude, force } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/machine_tool?frequency=${frequency}&mass=${mass}&amplitude=${amplitude}&force=${force}`);
            setResult(response.data.result);
            setError(null);
        } catch (error) {
            setResult(null);
            setError(error.response ? error.response.data.error : 'An error occurred');
        }
    };

    useEffect(() => {
        console.log(result);
    }, [result]);

    return (
        <div className="container mx-auto p-4">
    {error ? <div className="text-blue-500 mb-4">{error}</div> : result && (
                <div className="border p-4 rounded">
                   <h1 className="text-primary  p-2 rounded">Solutions</h1>

                    <div>Damper ratio = {result.Df}</div>
                    <div>Natural frequency = {result.Wn}</div>
                    <div>Stiffness = {result.K}</div>
                    <div>Damping Coefficient = {result.C}</div>
                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 411</h2>
    <h4 className="text-white-900 p-4"> Machine tool mounted on elastic foundation modeled as spring and viscous damper in parallel</h4>
    <div className="mb-4">
        <label htmlFor='frequency' className="block text-sm font-medium text-gray-600 mb-1">Frequency</label>
        <input
            type='number'
            name='frequency'
            value={formData.frequency}
            onChange={handleChange}
            id='frequency'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Frequency"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='mass' className="block text-sm font-medium text-gray-600 mb-1">Mass</label>
        <input
            type="number"
            name='mass'
            value={formData.mass}
            onChange={handleChange}
            id='mass'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Mass"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='amplitude' className="block text-sm font-medium text-gray-600 mb-1">Amplitude</label>
        <input
            type='number'
            name='amplitude'
            value={formData.amplitude}
            onChange={handleChange}
            id='amplitude'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Amplitude"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='force' className="block text-sm font-medium text-gray-600 mb-1">Force</label>
        <input
            type='number'
            name='force'
            value={formData.force}
            onChange={handleChange}
            id='force'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Force"
            required
        />
    </div>
    <button type='submit' className="btn btn-outline btn-success">Solve</button>
   <div>
   <span className="loading loading-ball loading-lg my-4" ></span>
   </div>
</form>

           
        </div>
    );
}

export default MachineTool;
