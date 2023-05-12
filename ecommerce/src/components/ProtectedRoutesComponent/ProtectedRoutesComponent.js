import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutesComponent(admin) {
    let auth = false;
    if (admin) {
      let adminAuth = true;
      if (adminAuth) auth = true;
    }else {
      let adminAuth = true;
      if (adminAuth) auth = true;
    }
  return (
    
      auth ? <Outlet/> : <Navigate to="/login" />
   
  )
};

export default ProtectedRoutesComponent
