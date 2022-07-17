import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

function PublicOnlyRoute({ children  } : any) {
  const accessToken = useSelector((state : RootState) => state.session.accessToken); 
  const loading = useSelector((state : RootState) => state.session.loading);
  const navigate = useNavigate();
  
  if (!accessToken && !loading){
    return children;
  } else if (loading) {
    return <p>Loading...</p>
  } else if (accessToken && !loading) {
    navigate("/login");
  } else {
    return <p>Erreur</p>
  }

}

export default PublicOnlyRoute