import React from "react";
import "./Dashboard.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import avatar from '../../assets/avatar.png';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="sidebar-title">Board</h2>
        <ul className="sidebar-menu">
          <li>
            <DashboardIcon className="sidebar-icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <LocalOfferIcon className="sidebar-icon" />
            <span>Transactions</span>
          </li>
          <li>
            <EventRepeatIcon className="sidebar-icon" />
            <span>Schedule</span>
          </li>
          <li>
            <AccountCircleIcon className="sidebar-icon" />
            <span>Users</span>
          </li>
          <li>
            <SettingsIcon className="sidebar-icon" />
            <span>Settings</span>
          </li>
        </ul>
        <div className="bottom-list">
          <div>Help</div>
          <div>Contact Us</div>
          <div>Sign In</div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Dashboard</h2>
          <div className="dashboard-user">
            <input type="text" className="search-input" placeholder="Search" />
            <img src={avatar} alt="User Avatar" className="user-avatar" />
          </div>
        </div>
        {/* Add your graphs and data here */}
      </div>
    </div>
  );
};

export default Dashboard;
