import React from 'react'
import { useNavigate } from 'react-router-dom';

function PublicOnlyRoute({ children} : any) {
  const accessToken = true;
  const loading = false;
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