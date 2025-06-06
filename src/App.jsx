import React from 'react';
import './App.css'
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import MainBody from './components/MainBody/MainBody.jsx';

function App() {
  return (
    <div className="whole-screen">
      <div ><Header /></div>
      <div className="sidebar-and-mainbody">
        <Sidebar />
        <main className="main-body">
          <MainBody />
        </main>
      </div>
    </div>
  );
}

export default App;
