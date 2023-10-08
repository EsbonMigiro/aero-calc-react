import React, { useState, useEffect } from "react";
import axios from "axios";

const ComputeComponent = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  const compute = async () => {
    const response = await axios.post("/compute/", {
      number1,
      number2,
    });

    const sum = response.data.sum;
    setSum(sum);
  };

  useEffect(() => {
    compute();
  }, [number1, number2]);

  return (
    <div>
      <input
        type="number"
        placeholder="Number 1"
        value={number1}
        onChange={(e) => setNumber1(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Number 2"
        value={number2}
        onChange={(e) => setNumber2(parseFloat(e.target.value))}
      />
      <button onClick={compute}>Compute</button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default ComputeComponent;
