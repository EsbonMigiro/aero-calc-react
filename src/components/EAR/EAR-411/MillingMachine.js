import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export function MillingMachine() {
    const [formData, setFormData] = useState({
        'millingMachineMass': '',
        'speedInRPM': '',
        'harmonicRepeatedForce': '',
        'limitedTranmmitedForce': '',
        'amplitudeDuringOperation': '',
        'amplitudeDuringStartup': '',
        'dampingRatio' : ''
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
        const { millingMachineMass, speedInRPM,dampingRatio, harmonicRepeatedForce, limitedTranmmitedForce, amplitudeDuringOperation, amplitudeDuringStartup } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/aero/?dampingRatio=${dampingRatio}&amplitudeDuringStartup=${amplitudeDuringStartup}&millingMachineMass=${millingMachineMass}&speedInRPM=${speedInRPM}&harmonicRepeatedForce=${harmonicRepeatedForce}&limitedTranmmitedForce=${limitedTranmmitedForce}&amplitudeDuringOperation=${amplitudeDuringOperation}`);
            setIsloading(false)
            setResult(response.data.result);
            setError(null);
            console.log(result)
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

                   <div>Transmissibility (T) = {result.T} </div>
                    <div>Minimum Frequency Ratio (R) = {result.R } </div>
                    <div>Natural Frequency (Wn) = {result.Wn} </div>
                    <div>Maximum Amplitude at Wn (Xmax) = {result.Xmax} m</div>
                    <div>Mass at Decreased Resonant Amplitude (Mr) = {result.Mr} kg</div>
                    <div>Steady State Amplitude at Increased Mass (X) = {result.X} m</div>
                    <div>Isolator Stiffness (K) = {result.K} N/m</div>
                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 409</h2>
    <h4 className="text-white-900 p-4"> Milling machine</h4>
    <div className="mb-4">
        <label htmlFor='millingMachineMass' className="block text-sm font-medium text-gray-600 mb-1">millingMachineMass in kg</label>
        <input
            type='number'
            name='millingMachineMass'
            value={formData.millingMachineMass}
            onChange={handleChange}
            id='millingMachineMass'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="millingMachineMass"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='speedInRPM' className="block text-sm font-medium text-gray-600 mb-1">speedInRPM</label>
        <input
            type="number"
            name='speedInRPM'
            value={formData.speedInRPM}
            onChange={handleChange}
            id='speedInRPM'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="speedInRPM"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='harmonicRepeatedForce' className="block text-sm font-medium text-gray-600 mb-1">harmonicRepeatedForce in N</label>
        <input
            type='number'
            name='harmonicRepeatedForce'
            value={formData.harmonicRepeatedForce}
            onChange={handleChange}
            id='harmonicRepeatedForce'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="harmonicRepeatedForce"
            required
        />
    </div>


    <div className="mb-4">
        <label htmlFor='limitedTranmmitedForce' className="block text-sm font-medium text-gray-600 mb-1">limitedTranmmitedForce in N</label>
        <input
            type='number'
            name='limitedTranmmitedForce'
            value={formData.limitedTranmmitedForce}
            onChange={handleChange}
            id='limitedTranmmitedForce'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="limitedTranmmitedForce"
            required
        />
    </div>
 
    <div className="mb-4">
        <label htmlFor='amplitudeDuringOperation' className="block text-sm font-medium text-gray-600 mb-1">amplitudeDuringOperation in mm</label>
        <input
            type='number'
            name='amplitudeDuringOperation'
            value={formData.amplitudeDuringOperation}
            onChange={handleChange}
            id='amplitudeDuringOperation'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="amplitudeDuringOperation in mm"
            required
        />
    </div>

    <div className="mb-4">
        <label htmlFor='amplitudeDuringStartup' className="block text-sm font-medium text-gray-600 mb-1">amplitudeDuringStartup in mm</label>
        <input
            type='number'
            name='amplitudeDuringStartup'
            value={formData.amplitudeDuringStartup}
            onChange={handleChange}
            id='amplitudeDuringStartup'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="amplitudeDuringStartup in mm"
            required
        />
    </div>


    <div className="mb-4">
        <label htmlFor='dampingRatio' className="block text-sm font-medium text-gray-600 mb-1">dampingRatio</label>
        <input
            type='number'
            name='dampingRatio'
            value={formData.dampingRatio}
            onChange={handleChange}
            id='dampingRatio'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="dampingRatio"
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


