import React, { useState, useEffect } from 'react';
import DocViewering from './DocViewering'; // Assuming you have a DocViewering component
import { DocViewerRenderers } from '@cyntler/react-doc-viewer'; // Import DocViewerRenderers if not already imported

function Staging() {
  const [docsLoaded, setDocsLoaded] = useState(false);
  const [docs, setDocs] = useState([]);

  // Load PDFs when the component is mounted
  useEffect(() => {
    if (!docsLoaded) {
      // Load PDFs asynchronously (example using import, adjust this according to your setup)
      import('../pdfs/b.pdf').then((pdfModule) => {
        setDocs([{ uri: pdfModule.default }]);
        setDocsLoaded(true);
      });
    }
  }, [docsLoaded]);

  if (!docsLoaded) {
    return <div>Loading PDF...</div>;
  }

  return (

        <div className="bg-gray-200 p-4 flex-grow">
          <div
            style={{
              marginLeft: '100px', // Move 100px from the left for the sidebar
              width: 'calc(100% - 100px)', // Adjust width to fill remaining space
              height: '100%',
            }}
          >
            {/* DocViewering with 100% width and height */}
            <DocViewering
              documents={docs}
              pluginRenderers={DocViewerRenderers}
              style={{ width: '100%', height: '100%' }}
            />
           
          </div>     
        </div>
    
  );
}

export default Staging;
