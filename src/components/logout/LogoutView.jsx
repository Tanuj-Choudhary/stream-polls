import React from 'react';

import './logoutView.css';

export default function LogoutView({ handleLogout }) {
  return (
    <button onClick={handleLogout} className="btn logout-btn">
      Logout
    </button>
  );
}
