import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" style={{ border: '2px dashed red', padding: '10px', position: 'relative' }}>
      <button 
        style={{ 
          position: 'absolute', 
          right: '10px', 
          top: '10px', 
          border: 'none', 
          background: 'transparent', 
          cursor: 'pointer' 
        }} 
        aria-label="Close" 
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="close icon" width="20px" height="20px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;