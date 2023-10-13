import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export function MachineCantBeam() {
    const [formData, setFormData] = useState({
        'machineMass': '',
        'cantileverBeamLength': '',
        'elasticModulus': '',
        'areaMoment': ''
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
        const { machineMass, cantileverBeamLength, elasticModulus, areaMoment } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/cantilever/?machineMass=${machineMass}&cantileverBeamLength=${cantileverBeamLength}&elasticModulus=${elasticModulus}&areaMoment=${areaMoment}`);
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

                  
                    <div>Stiffness = {result.K} N/m</div>
                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 411</h2>
    <h4 className="text-white-900 p-4"> Machine Attached to the End of Cantilever Beam</h4>
    <div className="mb-4">
        <label htmlFor='machineMass' className="block text-sm font-medium text-gray-600 mb-1">machineMass in kg</label>
        <input
            type='number'
            name='machineMass'
            value={formData.machineMass}
            onChange={handleChange}
            id='machineMass'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="machineMass"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='cantileverBeamLength' className="block text-sm font-medium text-gray-600 mb-1">cantileverBeamLength</label>
        <input
            type="number"
            name='cantileverBeamLength'
            value={formData.cantileverBeamLength}
            onChange={handleChange}
            id='cantileverBeamLength'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="cantileverBeamLength"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='elasticModulus' className="block text-sm font-medium text-gray-600 mb-1">elasticModulus</label>
        <input
            type='number'
            name='elasticModulus'
            value={formData.elasticModulus}
            onChange={handleChange}
            id='elasticModulus'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="200e9"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='areaMoment' className="block text-sm font-medium text-gray-600 mb-1">areaMoment</label>
        <input
            type='number'
            name='areaMoment'
            value={formData.areaMoment}
            onChange={handleChange}
            id='areaMoment'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="as 1.8e-5"
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


