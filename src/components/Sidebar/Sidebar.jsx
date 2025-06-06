import React, { useState } from 'react';
import './Sidebar.css';

const templates = [
  'NDA Agreement',
  'Employment Contract',
  'Service Agreement',
  'Sales Contract',
  'Lease Agreement'
];

function Sidebar() {
  const [popupTemplate, setPopupTemplate] = useState(null);

  // This function simulates opening a Word template in a popup
  const handleTemplateClick = (template) => {
    setPopupTemplate(template);
    // In a real app, you would load the Word document here
  };

  const closePopup = () => setPopupTemplate(null);

  return (
    <aside className="sidebar">
      <div className="sidebar-section-title">Word Templates</div>
      <ul className="sidebar-menu">
        {templates.map((template) => (
          <li
            key={template}
            className="sidebar-item"
            onClick={() => handleTemplateClick(template)}
          >
            <span className="sidebar-icon">📄</span>
            <span className="sidebar-label">{template}</span>
          </li>
        ))}
      </ul>

      {/* Popup for Word template preview */}
      {popupTemplate && (
        <div className="sidebar-popup">
          <div className="sidebar-popup-content">
            <button className="sidebar-popup-close" onClick={closePopup}>×</button>
            {/* In a real app, embed or render the Word document here */}
            <h3>{popupTemplate}</h3>
            <p>[Word document preview or editor goes here]</p>
          </div>
        </div>
      )}
      {/* 
        // To actually open and edit Word docs, integrate Office.js or use a Word viewer/editor API.
        // This popup is a placeholder for demonstration.
      */}
    </aside>
  );
}

export default Sidebar;