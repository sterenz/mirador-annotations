import React, { useEffect, useState } from "react";
import SimpleAnnotationServerV2Adapter from "./SimpleAnnotationServerV2Adapter";

const AnnotationManager = () => {
  // Initialize the adapter with canvasId and endpointUrl
  const canvasId = "47174896"; // Replace with your canvas ID
  const endpointUrl = "http://localhost:8888/annotation"; // Replace with your SAS endpoint URL
  const adapter = new SimpleAnnotationServerV2Adapter(canvasId, endpointUrl);

  // State to store annotations for the current canvas
  const [annotations, setAnnotations] = useState([]);

  // Function to create a new annotation
  const createAnnotation = async (annotationData) => {
    try {
      const response = await adapter.create(annotationData);
      console.log("Annotation created:", response);
      // Update the annotations state with the newly created annotation
      setAnnotations([...annotations, response]);
    } catch (error) {
      console.error("Error creating annotation:", error);
    }
  };

  // Function to retrieve annotations for the current canvas
  const fetchAnnotationsForCanvas = async () => {
    try {
      const response = await adapter.all();
      console.log("Annotations for canvas:", response);
      // Update the annotations state with the retrieved annotations
      setAnnotations(response.items);
    } catch (error) {
      console.error("Error fetching annotations:", error);
    }
  };

  // Call fetchAnnotationsForCanvas when the component mounts
  useEffect(() => {
    fetchAnnotationsForCanvas();
  }, []); // Run once on component mount

  // Add more functions for updating and deleting annotations as needed

  return <div>{/* Your component JSX here */}</div>;
};

export default AnnotationManager;
