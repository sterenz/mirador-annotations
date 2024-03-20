import React, { useEffect } from 'react';
import Mirador from 'mirador';

// Import annotation plugin from node_modules
import annotationPlugins from 'mirador-annotations';

// Import the SimpleAnnotationServerV2Adapter
import SimpleAnnotationServerV2Adapter from './SimpleAnnotationServerV2Adapter';

const MiradorComponent = () => {
  useEffect(() => {
    // Configuration for Mirador viewer
    const config = {
      annotation: {
        // Set adapter for annotations to the SAS adapter
        adapter: (canvasId) => new SimpleAnnotationServerV2Adapter(canvasId, 'http://localhost:8888'),
        // Set to true to display annotation JSON export button
        exportLocalStorageAnnotations: true,
      },
      window: {
        // Set default sidebar panel to annotations
        defaultSideBarPanel: 'annotations',
        // Open sidebar by default
        sideBarOpenByDefault: true,
      },
      id: 'mirador-container', // ID of the Mirador container
      windows: [
        {
          // Enable image tools
          imageToolsEnabled: true,
          // Manifest ID of the IIIF manifest to load
          manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
        },
      ],
    };

    // Initialize Mirador viewer with configuration and annotation plugins
    Mirador.viewer(config, [...annotationPlugins]);
  }, []); // Run effect only once when component mounts

  // Render the container for Mirador viewer
  return <div id="mirador-container"></div>;
};

export default MiradorComponent;
