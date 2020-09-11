import React from 'react';

import LogoutView from './LogoutView';

export default function Logout() {
  function handleLogout() {
    if (window.confirm('Are you sure want to logout')) {
      localStorage.removeItem('token');
    }
  }

  return <LogoutView handleLogout={handleLogout} />;
}
