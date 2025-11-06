import React, { JSX } from 'react'
import { Navigate } from 'react-router';
import { useUserStore } from '../../Stores/useUserStore';

interface ProtectedRouteProps{
    children: JSX.Element; 
}



const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const user = useUserStore((state) => state.user);
    
    if(!user){
       return <Navigate to="/signin" replace/>;
    }

    return children;
  
};

export default ProtectedRoute