import React, { useState } from 'react';
import axios from 'axios';

 function ComputeForm () {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/computing/?a=${a}&b=${b}`);
            setResult(response.data.result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="number"
                    placeholder="Enter a"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    className="p-2 border rounded mr-2"
                />
                <input
                    type="number"
                    placeholder="Enter b"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    className="p-2 border rounded mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Compute
                </button>
            </form>
            {result !== null && (
                <div className="text-xl">
                    Sum of {a} and {b} is: {result}
                </div>
            )}
        </div>
    );
};


export default ComputeForm