import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export function AircraftLandingGround() {
    const [formData, setFormData] = useState({
        'aircraftWeight': '',
        'verticalVelocity': '',
        'verticleReaction': '',
        'horizontalReaction': '',
        'inertiaMoment': '',
       
       
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
        const { aircraftWeight, verticalVelocity, verticleReaction, horizontalReaction, inertiaMoment } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/aircraftcarrier/?aircraftWeight=${aircraftWeight}&verticalVelocity=${verticalVelocity}&verticleReaction=${verticleReaction}&horizontalReaction=${horizontalReaction}&inertiaMoment=${inertiaMoment}`);
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

                   <div>Inertial  Force x = {result.Max} N</div>
                    <div>Inertial Force y = {result.May} N</div>
                    <div>Angular Acceleration = {result.O} * 10^3/ rad/s^2</div>
                    <div>Time = {result.T} s</div>
                    <div>Angular Velocity = {result.Ot} * 10^3 rad/s</div>
                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 409</h2>
    <h4 className="text-white-900 p-4"> Aircraft Landing on Ground</h4>
    <div className="mb-4">
        <label htmlFor='aircraftWeight' className="block text-sm font-medium text-gray-600 mb-1">aircraft Weight in N</label>
        <input
            type='number'
            name='aircraftWeight'
            value={formData.aircraftWeight}
            onChange={handleChange}
            id='aircraftWeight'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="aircraftWeight in N"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='verticalVelocity' className="block text-sm font-medium text-gray-600 mb-1">vertical Velocity in m/s</label>
        <input
            type="number"
            name='verticalVelocity'
            value={formData.verticalVelocity}
            onChange={handleChange}
            id='verticalVelocity'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="vertical Velocity in m/s"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='verticleReaction' className="block text-sm font-medium text-gray-600 mb-1">verticle Reaction in N</label>
        <input
            type='number'
            name='verticleReaction'
            value={formData.verticleReaction}
            onChange={handleChange}
            id='verticleReaction'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="verticle Reaction in N"
            required
        />
    </div>


    <div className="mb-4">
        <label htmlFor='horizontalReaction' className="block text-sm font-medium text-gray-600 mb-1">horizontal Reaction in N</label>
        <input
            type='number'
            name='horizontalReaction'
            value={formData.horizontalReaction}
            onChange={handleChange}
            id='horizontalReaction'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="horizontal Reaction in N"
            required
        />
    </div>
 
    <div className="mb-4">
        <label htmlFor='inertiaMoment' className="block text-sm font-medium text-gray-600 mb-1">inertia Moment like 5.7e8</label>
        <input
            type='number'
            name='inertiaMoment'
            value={formData.inertiaMoment}
            onChange={handleChange}
            id='inertiaMoment'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="inertia Moment as 5.7e8 "
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


