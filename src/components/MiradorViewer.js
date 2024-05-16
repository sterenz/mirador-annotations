import React, { useEffect } from "react";
import Mirador from "mirador";
import "../styles/mirador-custom.css";

// Import annotation plugin from node_modules
import annotationPlugins from "mirador-annotations";

// Import the SimpleAnnotationServerV2Adapter
import SimpleAnnotationServerV2Adapter from "./SimpleAnnotationServerV2Adapter";

const MiradorComponent = ({ theme }) => {
  useEffect(() => {
    // Configuration for Mirador viewer
    const config = {
      annotation: {
        // Set adapter for annotations to the SAS adapter
        adapter: (canvasId) =>
          new SimpleAnnotationServerV2Adapter(
            canvasId,
            "http://localhost:8888/annotation"
          ),
        // Set to true to display annotation JSON export button
        exportLocalStorageAnnotations: true,
      },
      window: {
        // Set default sidebar panel to annotations
        defaultSideBarPanel: "annotations",
        // Open sidebar by default
        sideBarOpenByDefault: true,
      },
      id: "mirador-container", // ID of the Mirador container
      windows: [
        {
          // Enable image tools
          imageToolsEnabled: true,
          // Manifest ID of the IIIF manifest to load
          manifestId:
            // "https://media.nga.gov/public/manifests/nga_highlights.json",
            // "http://127.0.0.1:8080/manifest_structures.json", // TEST MANIFEST v2 ON "SIMPLE WEB SERVER"
            "https://raw.githubusercontent.com/sterenz/TEST_MANIFEST/main/manifests/manifest_structures_v3.json", // TEST MANIFEST v3 ON "SIMPLE WEB SERVER"
        },
      ],
      ...theme, // Merge the theme configuration
    };

    // Initialize Mirador viewer with configuration and annotation plugins
    Mirador.viewer(config, [...annotationPlugins]);
  }, [theme]); // Run effect when theme changes

  // Render the container for Mirador viewer
  return <div id="mirador-container"></div>;
};

export default MiradorComponent;
