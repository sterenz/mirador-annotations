# 📑 Change log

2024-20-03 - Stefano Renzetti <stefano.renzetti3@studio.unibo.it>
- Created `AnnotationManager.js` component to use the annotation-plugin's class `SimpleAnnotationServerV2Adapter`
- to start the SimpleAnnotationServer, run `java -jar dependency/jetty-runner.jar --port 8888 simpleAnnotationStore.war` in the directory. -> Navigate to `http://localhost:8888/index.html`.
- Downloaded SimpleAnnotationServer release.
- Created new branch `annotation-server` to test Annotot adapter.

2024-16-03 - Stefano Renzetti <stefano.renzetti3@studio.unibo.it>

- Created `LocalStorageAdapter.js` to store annotations in LocalStorage.
- Created `MiradorViewer.js`.
- Installed `annotations-plugin`.
- Installed Mirador 3.
- Created React App.