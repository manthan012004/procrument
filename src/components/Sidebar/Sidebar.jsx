import React from "react";
import "./Sidebar.css";

const templates = [
  { id: 1, name: "Template 1" },
  { id: 2, name: "Template 2" },
  { id: 3, name: "Template 3" },
];

function Sidebar({ onTemplateSelect, selectedTemplateId }) {
  return (
    <div className="sidebar">
      <h2>Templates</h2>
      <ul className="template-list">
        {templates.map((template) => (
          <li
            key={template.id}
            className={selectedTemplateId === template.id ? "selected" : ""}
            onClick={() => onTemplateSelect(template)}
          >
            {template.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;