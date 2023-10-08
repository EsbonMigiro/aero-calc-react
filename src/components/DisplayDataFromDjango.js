import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DocViewering from './DocViewering';
import { DocViewerRenderers } from '@cyntler/react-doc-viewer'; // Import DocViewerRenderers if not already imported


const DisplayDataFromDjango = () => {
  const [myfiles, setMyfiles] = useState([]);
  const [getData, setGetData] = useState(false);
  const [doc, setDoc] = useState([])
  const [btnClicked, setBtnClicked] = useState(false)

  const handleData = () => {
    setGetData(true);
    setBtnClicked(true)
  };

  useEffect(() => {
    if (getData) {
    
      axios
        .get('http://127.0.0.1:8000/api/files/')
        .then((response) => {
          setMyfiles(response.data.files); // Access the 'files' array
          console.log(response.data.files);
          setGetData(false);
          setDoc([{ uri: myfiles[0].file_url}])
          console.log(doc)
        })
        .catch((error) => console.error(error));
    }
  });

  return (
    <div>
      <div className="font-bold text-xl mb-4">Displayin Elements</div>
      <button onClick={handleData} className="btn btn-outline btn-success">
        Display PDF
      </button>
      {btnClicked && <DocViewering documents={doc} pluginRenderers={DocViewerRenderers}></DocViewering>}
     
    </div>
  );
};

export default DisplayDataFromDjango;
