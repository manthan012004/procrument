import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBody from "./components/MainBody/MainBody";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="app-container">
      <Header />
      <div >
        <Sidebar
          onTemplateSelect={setSelectedTemplate}
          selectedTemplateId={selectedTemplate?.id}
        />
      </div>
      <div className="main-content">
        <MainBody selectedTemplate={selectedTemplate} />
      </div>
    </div>
  );
}

export default App;
