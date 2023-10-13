

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export function BMBendingMoment() {
    const [formData, setFormData] = useState({
        'bendingMoment': '',
       
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
        const { bendingMoment } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/beamstress/?bendingMoment=${bendingMoment}`);
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

                    <div> Stress = {result.S}</div>
                    
                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 411</h2>
    <h4 className="text-white-900 p-4"> Beam Subjected to Bending Moment</h4>
    <div className="mb-4">
        <label htmlFor='bendingMoment' className="block text-sm font-medium text-gray-600 mb-1">BendingMoment in Nm</label>
        <input
            type='number'
            name='bendingMoment'
            value={formData.bendingMoment}
            onChange={handleChange}
            id='bendingMoment'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="BendingMoment in Nm"
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


