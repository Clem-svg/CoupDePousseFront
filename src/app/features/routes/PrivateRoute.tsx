import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../../store';
import LoadingGif from '../components/LoadingGif';

function PrivateRoute({ children  } : any ) {
  const loading = useSelector((state: RootState) => state.session.loading);
  const accessToken = useSelector((state : RootState) => state.session.accessToken);
  const location = useLocation();
  const fromLocation = (location.state as any)?.from;
  const previousLocation = fromLocation ? fromLocation : { pathname: '/login'};

  if (accessToken) {
      return children;
  } else if (loading) {
      return <LoadingGif/>;
  } else if (!accessToken && !loading) {
    return <Navigate to={previousLocation} state={{from: location}} replace/>;
  } else {
      return <p>Erreur...</p>;
  }
}

export default PrivateRoute