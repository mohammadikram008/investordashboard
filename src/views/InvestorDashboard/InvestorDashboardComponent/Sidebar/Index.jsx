import React, { Fragment, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';


const Index = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
   <Fragment>
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </span>
        <h1>InfeetInc</h1>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Setting</Link>
        </li>
        {/* Add links for other pages (e.g., Contact and Settings) */}
      </ul>
    </div>
   </Fragment>
  )
}

export default Index