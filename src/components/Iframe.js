// import React, { useState } from 'react';
// import a from '../pdfs/a.pdf';

// function Iframe() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const handleLoad = () => {
//     setLoading(false);
//   };

//   const handleError = () => {
//     setLoading(false);
//     setError(true);
//   };

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error loading PDF.</p>}
//       <iframe
//         title="PDF Viewer"
//         src={a}
//         width="100%"
//         height="500px"
//         onLoad={handleLoad}
//         onError={handleError}
//         sandbox="allow-same-origin allow-scripts"
//         style={{ display: loading || error ? 'none' : 'block' }}
//       />
//     </div>
//   );
// }

// export default Iframe;


import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import a from '../pdfs/a.pdf';
import "../App.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Iframe = () => (
  <Document
    file={a}
    onContextMenu={(e) => e.preventDefault()}
    className="pdf-container"
    style={{ width: "100%", height: "800px" }} // Set the width and height of the Document
  >
    <Page 
      pageNumber={1} 
      width={window.innerWidth}  // Set the width of the Page to match the window width
    />
  </Document>
);

export default Iframe;
