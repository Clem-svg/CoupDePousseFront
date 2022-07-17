import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

function PrivateRoute({ children} : any) {
  const loading = useSelector((state: RootState) => state.session.loading);
  const accessToken = useSelector((state : RootState) => state.session.accessToken);
  const navigate = useNavigate();
  
  if (accessToken) {
    return children;
  } else if (loading) {
    return <p>Loading...</p>
  } else if (!accessToken && !loading) {
    navigate("/login");
  } else {
    return <p>Erreur</p>
  }

}

export default PrivateRoute