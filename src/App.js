import React from "react";
import MiradorViewer from "./components/MiradorViewer";
import { customTheme } from "./themes/customTheme";

const App = () => {
  return (
    <main className="App" style={{ padding: "20px" }}>
      <div className="App-header">
        <h3>Logo</h3>
      </div>
      <h1>Mirador Viewer Demo</h1>
      <p>
        This is a demo page for the Mirador viewer integrated into a React app.
      </p>
      <MiradorViewer theme={customTheme} />
    </main>
  );
};

export default App;
