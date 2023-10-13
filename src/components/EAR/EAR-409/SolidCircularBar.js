import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

export function SolidCircularBar() {
    const [formData, setFormData] = useState({
        'strainA': '',
        'StrainB': '',
        'StainC': '',
        'diameter': '',
        'poisonRatio': '',
        'modulusE': '',
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
        const { strainA, StrainB, StainC, diameter, poisonRatio, modulusE } = formData;
        try {
            const response = await axios.get(`https://aerospace-render.onrender.com/solidcircularbar/?modulusE=${modulusE}&strainA=${strainA}&StrainB=${StrainB}&StainC=${StainC}&diameter=${diameter}&poisonRatio=${poisonRatio}`);
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

                            <div> principal strain one = {result.Ei} * 10^-6 </div>
                            <div>principal strain two = {result.Eii} * 10^-6  </div>
                            <div>Principal stress one = {result.Si} N/mm^2  </div>
                            <div>Principal stress two = {result.Sii} N/mm^2  </div>
                            <div> Direct stress = {result.Sd}    N/mm^2 </div>
                            <div>Axial Load = {result.P}     N</div>
                            <div>Shear Stress  = {result.Ss}  N/mm^2 </div>
                            <div>Torque = {result.T}   Nmm </div>

                </div>
            )}



           <form onSubmit={handleSubmit} className="mb-4">
    <h2 className="text-2xl font-semibold mb-4">EAR 409</h2>
    <h4 className="text-white-900 p-4"> Solid Circular Bar</h4>
    <div className="mb-4">
        <label htmlFor='strainA' className="block text-sm font-medium text-gray-600 mb-1">strainA without (x 10^-6)</label>
        <input
            type='number'
            name='strainA'
            value={formData.strainA}
            onChange={handleChange}
            id='strainA'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="strainA without (x 10^-6)"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='StrainB' className="block text-sm font-medium text-gray-600 mb-1">StrainB without (x 10^-6)</label>
        <input
            type="number"
            name='StrainB'
            value={formData.StrainB}
            onChange={handleChange}
            id='StrainB'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="StrainB without (x 10^-6)"
            required
        />
    </div>
    <div className="mb-4">
        <label htmlFor='StainC' className="block text-sm font-medium text-gray-600 mb-1">StrainC without (x 10^-6)</label>
        <input
            type='number'
            name='StainC'
            value={formData.StainC}
            onChange={handleChange}
            id='StainC'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="StrainC without (x 10^-6)"
            required
        />
    </div>


    <div className="mb-4">
        <label htmlFor='diameter' className="block text-sm font-medium text-gray-600 mb-1">diameter in mm</label>
        <input
            type='number'
            name='diameter'
            value={formData.diameter}
            onChange={handleChange}
            id='diameter'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="diameter in mm"
            required
        />
    </div>
 
    <div className="mb-4">
        <label htmlFor='diameter' className="block text-sm font-medium text-gray-600 mb-1">poisonRatio</label>
        <input
            type='number'
            name='poisonRatio'
            value={formData.poisonRatio}
            onChange={handleChange}
            id='poisonRatio'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="poisonRatio"
            required
        />
    </div>

    <div className="mb-4">
        <label htmlFor='diameter' className="block text-sm font-medium text-gray-600 mb-1">modulusE in N/mm^2</label>
        <input
            type='number'
            name='modulusE'
            value={formData.modulusE}
            onChange={handleChange}
            id='modulusE'
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="modulusE in N/mm^2"
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


