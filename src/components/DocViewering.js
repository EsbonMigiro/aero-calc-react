// DocumentViewer.js
import React from 'react';
// import DocViewer from 'react-doc-viewer';
import DocViewer from '@cyntler/react-doc-viewer';

const DocViewering = ({ documents, pluginRenderers }) => {
  return (
    <div>
      <DocViewer documents={documents} pluginRenderers={pluginRenderers} />
    </div>
  );
};

export default DocViewering;
