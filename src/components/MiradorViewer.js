import React, { useEffect } from 'react';
import Mirador from 'mirador';

// import plugin
import annotationPlugins from 'mirador-annotations'
import LocalStorageAdapter from 'mirador-annotations/lib/LocalStorageAdapter';

// import LocalStorageAdapter from 'mirador-annotations/lib/LocalStorageAdapter';

const MiradorComponent = () => {
  useEffect(() => {
    const config = {
      annotation: {
        adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
        // adapter: (canvasId) => new AnnototAdapter(canvasId, endpointUrl),
        exportLocalStorageAnnotations: true, // display annotation JSON export button
      },
      window: {
        defaultSideBarPanel: 'annotations',
        sideBarOpenByDefault: true,
      },
      id: 'mirador-container',
      windows: [
        {
          imageToolsEnabled: true,
          manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
        },
      ],
    };

    Mirador.viewer(config, [...annotationPlugins]);
  }, []);



  return <div id="mirador-container"></div>;
};

export default MiradorComponent;
