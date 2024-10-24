import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import Dashboard from "./components/Dashboard";

function App() {
  const [data, setData] = useState([]);

  const handleFileLoad = (data) => {
    // Assuming the first row contains headers
    setData(data.slice(1)); // Remove the header row
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mb-10">
        EV Analytics Dashboard
      </h1>

      <CSVReader onFileLoaded={handleFileLoad} />
      {data.length > 0 && (
        <>
          <Dashboard data={data} />
        </>
      )}
    </div>
  );
}

export default App;
