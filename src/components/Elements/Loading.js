import React, { useState, useEffect } from 'react';

 export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate an HTTP request with useEffect
  useEffect(() => {
    // Simulating an API call with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false); // Set loading to false after data is fetched (simulated API response)
      }, 10000); // Simulating a 2-second delay
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div>
      {isLoading ? ( 
       <>
       <p className='p-2'>solving...</p>
        <span className="loading loading-dots loading-lg p-2" ></span>
        </>
      ) : null
      }
    </div>
  );
};

;
