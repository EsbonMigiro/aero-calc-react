import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = () => {
  const [myfiles, setMyfiles] = useState([]);
  const [getData, setGetData] = useState(false);

  const handleData = () => {
    setGetData(true);
  };

  useEffect(() => {
    if (getData) {
      axios
        .get('http://127.0.0.1:8000/api/files/')
        .then((response) => {
          setMyfiles(response.data.files); // Access the 'files' array
          console.log(response.data.files);
          setGetData(false);
        })
        .catch((error) => console.error(error));
    }
  }, [getData]);

  return (
    <div className="bg-gray-800 h-screen w-70 p-4 fixed left-0 top-70 text-white">
      <div className="font-bold text-xl mb-4">Sidebar</div>
      <button onClick={handleData} className="btn btn-outline btn-success">
        Success
      </button>
      <ul>
        {myfiles.length > 0 ? (
          myfiles.map((file) => (
            <li key={file.id} className="py-2 px-4 text-lg text-white-800 hover:bg-green-200 transition duration-300 cursor-pointer">
          {file.file_name}
        </li>
          ))
        ) : (
          <li>No files available</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
