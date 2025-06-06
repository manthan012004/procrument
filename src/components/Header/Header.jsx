import React, { useState } from 'react';
import './Header.css'; // Ensure you have the CSS file for styling
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = { name: "Alice", email: "alice@example.com" }; // Replace with real user data

  return (
    <header className="header">
      <div className="header-left-where-website-is-placed">
        <span >I-VITACONTRACT</span>
      </div>
      <div className="header-right">
        <button className="icon-btn" >
          <img src="/Images/risk.png" alt="Risk" />
           <span className="custom-tooltip">Risk Analysis</span>
        </button>
        <button className="icon-btn" >
          <img src="/Images/bettterDeal.png" alt="Better Deal" />
           <span className="custom-tooltip">Better Deal</span>
        </button>
        <button className="icon-btn" >
          <img src="/Images/summary.png" alt="Summary" />
           <span className="custom-tooltip">Summary</span>
        </button>
        <div className="user-dropdown">
          <button
            className="user-initial"
            onClick={() => setDropdownOpen((open) => !open)}
          >
            {user.name[0]}
          </button>
          {dropdownOpen && (
            <div className="dropdown-options">
              <div className="dropdown-email">{user.email}</div>
              <button className="dropdown-logout">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;