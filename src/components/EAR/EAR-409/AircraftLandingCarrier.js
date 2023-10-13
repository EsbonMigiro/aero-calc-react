import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export function AircraftLandingCarrier() {
    const [formData, setFormData] = useState({
        'aircraftWeight': '',
        'aircraftDecceleration': '',
        'fuselageSectionWeight': '',
        'touchDownSpeed': ''
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const[isLoading, setIsloading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true)
        setResult(null)
        const { aircraftWeight, aircraftDecceleration, fuselageSectionWeight, touchDownSpeed } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/jetcarrier/?aircraftWeight=${aircraftWeight}&aircraftDecceleration=${aircraftDecceleration}&fuselageSectionWeight=${fuselageSectionWeight}&touchDownSpeed=${touchDownSpeed}`);
            setIsloading(false)
            setResult(response.data.result);
            setError(null);
        } catch (error) {
            setIsloading(false)
            setResult(null);
            setError(error.response ? error.response.data.error : 'Network error occurred');
        }
    };

    useEffect(() => {
       
    }, [result]);

    return (
        <div className="container mx-auto p-4">

        {isLoading ? ( 
            <>
            <p className='p-2 text-green-500'>solving...</p>
                <span className="loading loading-dots loading-lg p-2" ></span>
                </>
            ) : null    
            }



    {error ? <div className="text-blue-500 mb-4">{error}</div> : result && (
                <div className="border p-4 rounded">
                   <h1 className="text-primary  p-2 rounded">Solutions</h1>

                   <div>Tension on cable = { result.T } N</div>
                    <div>Load on structure = { result.P } N</div>
                    <div>Force N = { result.N } N </div>
                    <div>Force S = { result.S } N</div>
                    <div>Length covered = { result.D }</div>

                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 409</h2>
    <h4 className="text-white-900 p-4"> Aircraft Landing On the Carrier</h4>
    <h5>You can use ex as  *10^x</h5>
    <div className="mb-4">
        <label htmlFor='aircraftWeight' className="block text-sm font-medium text-gray-600 mb-1">aircraftWeight in N</label>
        <input
            type='number'
            name='aircraftWeight'
            value={formData.aircraftWeight}
            onChange={handleChange}
            id='aircraftWeight'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="aircraft Weight in N"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='aircraftDecceleration' className="block text-sm font-medium text-gray-600 mb-1">aircraftDecceleration g</label>
        <input
            type="number"
            name='aircraftDecceleration'
            value={formData.aircraftDecceleration}
            onChange={handleChange}
            id='aircraftDecceleration'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="aircraft Decceleration in g"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='fuselageSectionWeight' className="block text-sm font-medium text-gray-600 mb-1">fuselageSectionWeight in N</label>
        <input
            type='number'
            name='fuselageSectionWeight'
            value={formData.fuselageSectionWeight}
            onChange={handleChange}
            id='fuselageSectionWeight'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="fuselageSectionWeight"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='touchDownSpeed' className="block text-sm font-medium text-gray-600 mb-1">TouchDownSpeed in m/s</label>
        <input
            type='number'
            name='touchDownSpeed'
            value={formData.touchDownSpeed}
            onChange={handleChange}
            id='touchDownSpeed'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="touchDownSpeed in m/s"
            required
        />
    </div>
    <button type='submit' className="btn btn-outline btn-success">Solve</button>
   <div>
   <span className="loading loading-ball loading-lg my-4" ></span>
   </div>
</form>
{result &&<h3 className='text-green-600'>Sroll up to see the solution</h3>} 
           
        </div>
    );
}


